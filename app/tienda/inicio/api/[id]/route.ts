import { prisma } from "@/src/lib/prisma"
import { NextResponse, NextRequest } from "next/server"
import { headers } from "next/headers"

export const dynamic = "force-dynamic"

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    const idNum = Number(id);
    const headerList = await headers()
    const userId = headerList.get("x-user-id")

    const product = await prisma.publicaciones.findUnique({
        where: {
            id_publicacion: idNum,
        },
        select: {
            id_publicacion: true,
            caracteristicas: true,
            descuento: true,
            precio: true,
            ventas: {
                select: {
                    opinion: {
                        select: {
                            calificacion: true
                        }
                    }
                }
            },
            producto: {
                select: {
                    id_producto: true,
                    nombre: true,
                    foto: true,
                    color: true,
                    genero: true,
                    categoria: {
                        select: {
                            nombre: true,
                        },
                    },
                    stocks: {
                        select: {
                            cantidad: true,
                            talle: {
                                select: {
                                    talle: true,
                                },
                            },
                        },
                    },
                },
            },
            favoritos: userId
                ? { where: { id_usuario: Number(userId) }, select: { id_usuario: true} }
                : false
        },
    });

    if (!product) {
        return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
    }

    return NextResponse.json(product);
}