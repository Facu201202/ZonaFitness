import { prisma } from "@/src/lib/prisma";
import { Product } from "@/src/types";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
    try {
        const newComers: Product[] = await prisma.publicaciones.findMany({
            take: 10,
            where: {
                activa: true
            },
            orderBy: {
                fecha: "desc"
            },
            select: {
                id_publicacion: true,
                activa: true,
                caracteristicas: true,
                descuento: true,
                precio: true,
                id_producto: true,
                fecha: true,
                producto: {
                    select: {
                        id_producto: true,
                        nombre: true,
                        foto: true,
                        genero: true,
                        color: true,
                        categoria: {
                            select: {
                                nombre: true
                            }
                        },
                        stocks: {
                            select: {
                                cantidad: true,
                                talle: true
                            }
                        }
                    }
                },
                favoritos: true,
                ventas: {
                    select: {
                        opinion: {
                            select: {
                                calificacion: true
                            }
                        }
                    }
                }

            }
        })

        if (!newComers) {
            return NextResponse.json({ message: "Error al traer los nuevos productos" }, { status: 404 })
        }

        return NextResponse.json(newComers, { status: 200 })

    } catch (error) {
        return NextResponse.json({ message: "Error de servidor" }, { status: 500 })
    }
}