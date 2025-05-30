import {prisma} from "@/src/lib/prisma"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = Number(params.id)
    const product = await prisma.publicaciones.findUnique({
        where: {
            id_publicacion: id,
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

    if(!product) {
        return NextResponse.json({error: "Producto no encontrado"}, {status: 404})
    }
    return NextResponse.json(product)
}

