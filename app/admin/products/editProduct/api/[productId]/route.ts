import { prisma } from "@/src/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, context: { params: Promise<{ productId: string }> }) {
    const { productId } = await context.params;
    const ProductData = await prisma.productos.findFirst({
        where: {
            id_producto: Number(productId)
        },
        select: {
            id_producto: true,
            nombre: true,
            precio: true,
            genero: true,
            color: true,
            foto: true,
            categoria: {
                select:{
                    nombre: true
                }
            },
            stocks: {
                select: {
                    id_talle: true,
                    cantidad: true,
                    talle: {
                        select:{
                            talle: true
                        }
                    }
                }
            }
        }
    })
    return NextResponse.json(ProductData)
}