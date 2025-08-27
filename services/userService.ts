import { EditClient, EditUser, LoginUser, RegisterClient, RegisterUser } from "@/src/schema";
import { prisma } from "@/src/lib/prisma"
import bcrypt from "bcrypt"
import { ChangePasswordData } from "@/src/types";
import { Prisma, PrismaClient } from "@/src/generated/prisma";
import { DefaultArgs } from "@/src/generated/prisma/runtime/library";

export async function createAccount(userData: RegisterUser, client: RegisterClient) {

    const validateErrors = await validateNewUSer(userData.usuario, client.correo, client.dni)

    if (Object.keys(validateErrors).length > 0) {
        return { message: validateErrors }

    }

    const hashedPassword = await bcrypt.hash(userData.contraseña, 10)
    const user = { ...userData, contraseña: hashedPassword }
    const { id_cliente } = await prisma.clientes.create({
        data: {
            ...client,
            dni: Number(client.dni)
        }
    })
    if (!id_cliente) {
        return { message: "No se pudo crear el cliente" }
    }

    return prisma.usuarios.create({
        data: {
            ...user,
            id_cliente
        }
    })
}

async function validateNewUSer(username: RegisterUser["usuario"], email: RegisterClient["correo"], dni: RegisterClient["dni"]) {
    const [usernameExists, emailExists, dniExists] = await Promise.all([
        prisma.usuarios.findUnique({
            where: { usuario: username }
        }),
        prisma.clientes.findUnique({
            where: { correo: email }
        }),
        prisma.clientes.findUnique({
            where: { dni: Number(dni) }
        })
    ])

    const errores: Record<string, string> = {}

    if (usernameExists) errores.usuario = "El nombre de usuario ya existe"
    if (emailExists) errores.correo = "El correo electrónico ya existe"
    if (dniExists) errores.dni = "El DNI ya existe"

    return errores
}

export async function findUser(user: LoginUser) {
    return prisma.usuarios.findFirst({
        where: { usuario: user.usuario }
    })
}

export async function getUserData(id: number) {
    return prisma.usuarios.findFirst({
        where: { id_usuario: id },
        select: {
            cliente: {
                select: {
                    nombre: true,
                    apellido: true,
                    correo: true,
                    dni: true,
                    barrio: true,
                    calle: true,
                    ciudad: true
                }
            },
            usuario: true,
            id_usuario: true,
            id_cliente: true,
            saldo: {
                select: {
                    saldo: true
                }
            }
        }
    })
}

export async function updateUserInfo(userData: EditUser, clientData: EditClient) {
    const validateErrors = await validateUpdateUser(userData.usuario, clientData.correo, clientData.dni, userData.id_usuario, clientData.id_cliente)

    if (Object.keys(validateErrors).length > 0) {
        return { message: validateErrors, status: 409 }
    }

    const [user, client] = await Promise.all([
        prisma.usuarios.update({
            where: { id_usuario: userData.id_usuario },
            data: {
                usuario: userData.usuario
            }
        }),
        prisma.clientes.update({
            where: { id_cliente: clientData.id_cliente },
            data: {
                nombre: clientData.nombre,
                apellido: clientData.apellido,
                dni: Number(clientData.dni),
                correo: clientData.correo,
                ciudad: clientData.ciudad,
                calle: clientData.calle,
                barrio: clientData.barrio
            }
        })
    ])

    if (!user || !client) return { message: "Error al actualizar los datos", status: 500 }

    return { user, client }

}

export async function validateUpdateUser(username: EditUser["usuario"], email: EditClient["correo"], dni: EditClient["dni"], id_usuario: EditUser["id_usuario"], id_cliente: EditClient["id_cliente"]) {
    const [usernameExists, emailExists, dniExists] = await Promise.all([
        prisma.usuarios.findFirst({
            where: {
                usuario: username,
                NOT: { id_usuario: id_usuario }
            }
        }),
        prisma.clientes.findUnique({
            where: {
                correo: email,
                NOT: { id_cliente: id_cliente }
            }
        }),
        prisma.clientes.findUnique({
            where: {
                dni: Number(dni),
                NOT: { id_cliente: id_cliente }
            }
        })
    ])

    const errores: Record<string, string> = {}

    if (usernameExists) errores.usuario = "El nombre de usuario ya existe"
    if (emailExists) errores.correo = "El correo electrónico ya existe"
    if (dniExists) errores.dni = "El DNI ya existe"

    return errores
}

export async function updatePassword(data: ChangePasswordData) {
    const user = await prisma.usuarios.findFirst({
        where: { id_usuario: data.id_usuario }
    })

    if (!user) return { message: "El usuario no existe", status: 404 }

    const validateUser = await bcrypt.compare(data.contraseñaActual, user.contraseña)
    if (!validateUser) {
        return { message: "contraseña incorrecta", status: 401 }
    }

    const hashedPassword = await bcrypt.hash(data.contraseñaNueva, 10)

    return prisma.usuarios.update({
        where: {id_usuario: data.id_usuario},
        data: {
            contraseña: hashedPassword
        }
    })
}

export async function getUserBalance(id: number) {
    return prisma.saldos.findFirst({
        where: {
            id_usuario: id
        },
        select: {
            saldo: true,
            id_saldo: true
        }
    })
}

export async function decrementBalance(amount: number, userId: number, balanceId: number, tx: PrismaClient | Prisma.TransactionClient){
    return await prisma.saldos.update({
        where: {
            id_usuario: userId,
            id_saldo: balanceId
        },
        data: {
            saldo: {decrement: amount}
        }
    })
}