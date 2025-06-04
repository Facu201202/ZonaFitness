import { RegisterClient, RegisterUser } from "@/src/schema";
import { prisma } from "@/src/lib/prisma"
import bcrypt from "bcrypt"

export async function createAccount(userData: RegisterUser, client: RegisterClient) {

    const validateErrors = await validateNewUSer(userData.usuario, client.correo, client.dni)

     if (Object.keys(validateErrors).length > 0) {
        return {message: validateErrors}
       
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
        return {message: "No se pudo crear el cliente"}
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
        prisma.usuarios.findFirst({
            where: { usuario: username }
        }),
        prisma.clientes.findFirst({
            where: { correo: email }
        }),
        prisma.clientes.findFirst({
            where: { dni: Number(dni) }
        })
    ])

    const errores: Record<string, string> = {}

    if (usernameExists) errores.usuario = "El nombre de usuario ya existe"
    if (emailExists) errores.correo = "El correo electrónico ya existe"
    if (dniExists) errores.dni = "El DNI ya existe"

    return errores
}