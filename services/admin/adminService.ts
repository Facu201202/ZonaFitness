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

export async function getPublications(filters: { search: string, skip: number, filter: string | null, RelatedPublications: string | null }) {
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
            ...(filters.RelatedPublications ? { id_producto: Number(filters.RelatedPublications) } : {})
        },
        orderBy: {
            ...(filters.filter ?
                filters.filter === "ventas" ? { ventas: { _count: "desc" } }
                    : { [filters.filter]: "desc" }
                : {})
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

export async function getSearchedPublicationsCount(filters: { search: string, skip: number, filter: string | null, RelatedPublications: string | null }) {
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
            ...(filters.RelatedPublications ? { id_producto: Number(filters.RelatedPublications) } : {})
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

export async function getSales() {
    return await prisma.ventas.findMany({
        select: {
            id_venta: true,
            fecha: true,
            precio_total: true,
            cantidad: true,
            talle: true,
            estado: true,
            n_comprobante: true,
            metodo_entrega: true,
            metodo_pago: true,
            usuario: {
                select: {
                    id_usuario: true,
                    cliente: {
                        select: {
                            nombre: true,
                            apellido: true
                        }
                    }
                }
            },
            publicacion: {
                select: {
                    id_publicacion: true,
                    producto: {
                        select: {
                            nombre: true
                        }
                    }
                }
            }
        }
    })
}

export async function getSalesInformation() {

    const [sales, products] = await Promise.all([prisma.ventas.aggregate({
        _sum: {
            precio_total: true
        },
        _count: {
            id_venta: true
        }
    }), prisma.productos.aggregate({
        _sum: {
            precio: true
        }
    })])



    return {
        sales: {
            salesCount: sales._count.id_venta,
            salesTotalPrice: sales._sum.precio_total || 0,
        },
        products: {
            productsTotalPrice: products._sum.precio || 0
        }
    }
}