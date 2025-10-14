import { prisma } from "@/src/lib/prisma"

export async function getProducts(filters: { search: string, skip: number, category: string | null, lowStock: string | null, relatedProduct: string | null }) {
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
            ),
            ...(filters.relatedProduct ? { id_producto: Number(filters.relatedProduct) }
                : {})
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

export async function getSearchedProductsCount(filters: { search: string, skip: number, category: string | null, lowStock: string | null, relatedProduct: string | null }) {
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
            ),
            ...(filters.relatedProduct ? { id_producto: Number(filters.relatedProduct) }
                : {})
        },
    })
}

export async function getPublications(filters: { search: string, skip: number, category: string | null }) {
    const searchedWords = filters.search.split(" ").filter(Boolean)
    return await prisma.publicaciones.findMany({
        take: 10,
        skip: filters.skip,
        where: {
            AND: searchedWords.map(word => ({
                producto: {
                    nombre: {
                        contains: word,
                        mode: "insensitive"
                    }
                }
            })),
            ...(filters.category
                ?
                {
                    producto: {
                        categoria: {
                            nombre: filters.category
                        }
                    }
                }
                : {}
            ),
        },
        select: {
            id_publicacion: true,
            id_producto: true,
            producto: {
                select: {
                    nombre: true
                }
            },
            precio: true,
            activa: true,
            caracteristicas: true,
            descuento: true,
            fecha: true,
            ventas: true
        }
    })
}

export async function getSearchedPublicationsCount(filters: { search: string, skip: number, category: string | null }) {
    const searchedWords = filters.search.split(" ").filter(Boolean)
    return await prisma.publicaciones.count({
        where: {
            AND: searchedWords.map(word => ({
                producto: {
                    nombre: {
                        contains: word,
                        mode: "insensitive"
                    }
                }
            })),

            ...(filters.category
                ?
                {
                    producto: {
                        categoria: {
                            nombre: filters.category
                        }
                    }
                }
                : {}
            ),
        },
    })
}

export async function getProductsToLink(search: string) {
    const searchedWords = search.split(" ").filter(Boolean)
    return await prisma.productos.findMany({
        where: {
            AND: searchedWords.map(word => ({
                nombre: {
                    contains: word,
                    mode: "insensitive"
                }
            })),
            activa: true
        },
        select: {
            id_producto: true,
            nombre: true,
            precio: true,
            categoria: {
                select: {
                    nombre: true
                }
            }
        }
    })
}