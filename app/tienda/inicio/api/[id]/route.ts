import { prisma } from "@/src/lib/prisma"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    const idNum = Number(id);

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
            favoritos: true,
        },
    });

    if (!product) {
        return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
    }

    return NextResponse.json(product);
}