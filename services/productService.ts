import {prisma} from "@/src/lib/prisma"

export async function getProducts() {
        return await prisma.publicaciones.findMany({
            take: 10,
            where: {
                activa: true
            },
            orderBy: {
                fecha: "desc"
            },
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
                }
            }
        })
}