import { EditClient, EditUser, LoginUser, RegisterClient, RegisterUser } from "@/src/schema";
import { prisma } from "@/src/lib/prisma"
import bcrypt from "bcrypt"
import { ChangePasswordData, ClientData, OpinionData } from "@/src/types";
import { Prisma, PrismaClient } from "@/src/generated/prisma";
import { createBalance } from "./balanceService";

export async function createAccount(userData: RegisterUser, client: RegisterClient) {

    const validateErrors = await validateNewUSer(userData.usuario, client.correo, client.dni)

    if (Object.keys(validateErrors).length > 0) {
        return { message: validateErrors }
    }

    const clientData: ClientData = {
        nombre: client.nombre!,
        apellido: client.apellido!,
        dni: Number(client.dni),
        correo: client.correo!,
        ciudad: client.ciudad!,
        barrio: client.barrio!,
        calle: client.calle!,
    };

    const hashedPassword = await bcrypt.hash(userData.contraseña, 10)
    const user = { ...userData, contraseña: hashedPassword }
    const { id_cliente } = await prisma.clientes.create({
        data: clientData
    })

    if (!id_cliente) {
        return { message: "No se pudo crear el cliente" }
    }

    const userCreated = await prisma.usuarios.create({
        data: {
            cliente: { connect: { id_cliente } },
            contraseña: user.contraseña,
            usuario: user.usuario!,
            rol: user.rol!,
        }
    })

    if (!userCreated.id_usuario) {
        return { message: "No se pudo crear el usuario" }
    }

    await createBalance(userCreated.id_usuario, 200000)

    return userCreated

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
        where: { id_usuario: data.id_usuario },
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

export async function decrementBalance(amount: number, userId: number, balanceId: number, tx: PrismaClient | Prisma.TransactionClient) {
    return await tx.saldos.update({
        where: {
            id_usuario: userId,
            id_saldo: balanceId
        },
        data: {
            saldo: { decrement: amount }
        }
    })
}

export async function getUserPurchase(id: number) {
    return await prisma.ventas.findMany({
        where: {
            id_usuario: id
        },
        orderBy: { fecha: 'desc' },
        select: {
            id_venta: true,
            n_comprobante: true,
            fecha: true,
            precio_total: true,
            estado: true,
            publicacion: {
                select: {
                    producto: {
                        select: {
                            nombre: true,
                            foto: true,
                            categoria: {
                                select: {
                                    nombre: true
                                }
                            }
                        }
                    }
                }
            },
            opinion: {
                select: {
                    id_opinion: true,
                    comentario: true,
                    calificacion: true,
                    fecha: true
                }
            }
        }
    })
}

export async function addToFavorites(id_publicacion: number, id_usuario: number) {
    const favoritesExists = await prisma.favoritos.findUnique({
        where: { id_usuario_id_publicacion: { id_usuario, id_publicacion } }
    })

    if (favoritesExists) {
        await prisma.favoritos.delete({
            where: { id_favorito: favoritesExists.id_favorito }
        })

        return { added: false }
    } else {
        await prisma.favoritos.create({
            data: {
                id_usuario: id_usuario,
                id_publicacion: id_publicacion
            }
        })
        return { added: true }
    }

}

export async function getUserFavorites(userId: number) {
    return await prisma.favoritos.findMany({
        where: { id_usuario: userId },
        select: {
            publicacion: {
                select: {
                    id_publicacion: true,
                    caracteristicas: true,
                    descuento: true,
                    precio: true,
                    producto: {
                        select: {
                            id_producto: true,
                            nombre: true,
                            foto: true,
                            color: true,
                            genero: true,
                            categoria: {
                                select: {
                                    nombre: true
                                }
                            },
                            stocks: {
                                select: {
                                    cantidad: true,
                                    talle: {
                                        select: {
                                            talle: true
                                        }
                                    }
                                }
                            }
                        }
                    },
                    favoritos: true
                }
            }

        }
    })
}

export async function getOneUserPurchase(purchaseId: number, userId: number) {
    return await prisma.ventas.findFirst({
        where: {
            id_usuario: userId,
            id_venta: purchaseId
        }
    })
}

export async function createUserComment(data: OpinionData) {
    return await prisma.opiniones.create({
        data: {
            calificacion: data.rating,
            comentario: data.comment,
            id_usuario: data.userId,
            id_venta: data.purchaseId
        }
    })
}


export async function getUserComment(commentId: number) {
    return await prisma.opiniones.findFirst({
        where: { id_opinion: commentId },
        select: {
            id_opinion: true,
            calificacion: true,
            comentario: true,
            fecha: true,
            usuario: {
                select: {
                    cliente: {
                        select: {
                            nombre: true
                        }
                    }
                }
            }
        }
    })
}

export async function getuserCommentList(userId: number) {
    return prisma.opiniones.findMany({
        where: { id_usuario: userId },
        select: {
            id_opinion: true,
            calificacion: true,
            comentario: true,
            fecha: true,
            usuario: {
                select: {
                    cliente: {
                        select: {
                            nombre: true
                        }
                    }
                }
            }
        }
    })
}

export async function deleteUserComment(commentId: number) {
    return await prisma.opiniones.delete({
        where: { id_opinion: commentId }
    })
}