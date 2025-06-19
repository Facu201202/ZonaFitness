import { prisma } from "@/src/lib/prisma"
import { FiltersData } from "@/src/types";

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

export async function getSearchedProducts(filters: FiltersData) {
    const where: any = {
        producto: {
            ...(filters.categories.length > 0 && {
                categoria: { nombre: { in: filters.categories } }
            }),
            ...(filters.search && {
                nombre: {
                    contains: filters.search,
                    mode: 'insensitive'
                }
            }),
            ...(filters.sizes.length > 0 && {
                stocks: {
                    some: {
                        talle: { talle: { in: filters.sizes } },
                        cantidad: { gt: 0 }
                    }
                }
            })
        },
        precio: { lte: filters.price }
    }
    return await prisma.publicaciones.findMany({
        where,
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
    });

}