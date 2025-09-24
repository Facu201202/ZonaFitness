import { prisma } from "@/src/lib/prisma"

export async function getProducts() {
    return await prisma.productos.findMany({
        take: 10,
        select: {
            nombre: true,
            precio: true,
            foto: true,
            categoria: {
                select: {
                    nombre: true
                }
            },
            stocks: true,
            publicaciones: true
        }
    })
}