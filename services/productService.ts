import { prisma } from "@/src/lib/prisma"
import { FiltersData } from "@/src/types";
import { createWhereFilter } from "@/src/utils";

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
    const where = createWhereFilter(filters)
    return await prisma.publicaciones.findMany({
        take: 9,
        skip: filters.skipPage,
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

export async function  getSearchedProductsCount(filters: FiltersData) {
    const where = createWhereFilter(filters)
    return await prisma.publicaciones.count({
        where
    })
}