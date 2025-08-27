import { Prisma, PrismaClient } from "@/src/generated/prisma";
import { DefaultArgs } from "@/src/generated/prisma/runtime/library";
import { prisma } from "@/src/lib/prisma"
import { FiltersData, SaleData } from "@/src/types";
import { createWhereFilter } from "@/src/utils";
import {nanoid} from "nanoid"

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

export async function getProduct(id: number) {
    return await prisma.publicaciones.findFirst({
        where: {
            id_publicacion: id
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

export async function findProductStock(idProduct: number, size:string){
    return prisma.stock.findFirst({
        where:{
            id_producto: idProduct,
            talle: {
                talle: size
            }
        }
    })
}

export async function decrementProductStock(stockId: number, quantity: number, tx: PrismaClient | Prisma.TransactionClient){
    return tx.stock.update({
        where: {
            id_stock: stockId
        },
        data: {
            cantidad: {decrement: quantity}
        }
    })
}

export async function createSale(saleData: SaleData, tx: PrismaClient | Prisma.TransactionClient){
    return await tx.ventas.create({
        data: {
            cantidad: saleData.cantidad,
            precio_total: saleData.precio_total,
            talle: saleData.talle,
            id_publicacion: saleData.id_publicacion,
            id_usuario: saleData.id_usuario,
            n_comprobante: "VEN-" + nanoid(8),
            metodo_entrega: saleData.metodo_entrega,
            metodo_pago: saleData.metodo_pago
        },
        select: {
            n_comprobante: true,
            precio_total: true,
            metodo_entrega: true,
            publicacion: {
                select: {
                    producto: {
                        select: {
                            nombre:  true
                        }
                    }
                }
            }
        }
    })
}