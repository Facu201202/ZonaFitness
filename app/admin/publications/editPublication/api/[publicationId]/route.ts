import { prisma } from "@/src/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, context: { params: Promise<{ publicationId: string }> }) {
    const { publicationId } = await context.params;
    const PublicationtData = await prisma.publicaciones.findFirst({
        where: {
            id_publicacion: Number(publicationId)
        },
        select: {
            id_producto: true,
            id_publicacion: true,
            precio: true,
            caracteristicas: true,
            descuento: true,
            producto: {
                select: {
                    nombre: true,
                    categoria: {
                        select: {
                            nombre: true
                        }
                    }
                }
            }
        }
       
    })
    return NextResponse.json(PublicationtData)
}