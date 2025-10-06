import { prisma } from "@/src/lib/prisma"
import { whereFilterAdminProducts } from "@/src/utils"

export async function getProducts(filters: { search: string, skip: number, category: string | null, lowStock: string | null }) {
    const searchedWords = filters.search.split(" ").filter(Boolean)
    return await prisma.productos.findMany({
        take: 10,
        skip: filters.skip,
        where: {
            AND: searchedWords.map(word => ({
                nombre: {
                    contains: word,
                    mode: "insensitive"
                }
            })),
            ...(filters.category
                ?
                { categoria: { nombre: filters.category } }
                : {}
            ),
            ...(filters.lowStock
                ?
                {
                    stocks: {
                        some: {
                            cantidad: {
                                lt: 5
                            }
                        }
                    }
                }
                : {}
            )
        },
        select: {
            id_producto: true,
            nombre: true,
            precio: true,
            foto: true,
            activa: true,
            categoria: {
                select: {
                    nombre: true
                }
            },
            stocks: {
                select: {
                    cantidad: true,
                    id_talle: true,
                    talle: {
                        select: {
                            talle: true
                        }
                    }
                }
            },
            publicaciones: true
        }
    })
}

export async function getSearchedProductsCount(filters: { search: string, skip: number, category: string | null, lowStock: string | null }) {
    const searchedWords = filters.search.split(" ").filter(Boolean)
    return await prisma.productos.count({
        where: {
            AND: searchedWords.map(word => ({
                nombre: {
                    contains: word,
                    mode: "insensitive"
                }
            })),

            ...(filters.category
                ?
                { categoria: { nombre: filters.category } }
                : {}
            ),
            ...(filters.lowStock
                ?
                {
                    stocks: {
                        some: {
                            cantidad: {
                                lt: 5
                            }
                        }
                    }
                }
                : {}
            )
        },
    })
}
