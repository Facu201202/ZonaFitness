import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
    try {
        const comments = await prisma.opiniones.findMany({
            take: 3,
            where: {
                calificacion: {
                    gt: 3.5
                }
            },
            orderBy: {
                fecha: "desc"
            },
            select: {
                id_opinion: true,
                id_usuario: true,
                usuario: {
                    select: {
                        cliente: {
                            select: {
                                nombre: true,
                                apellido: true
                            }
                        }
                    }
                },
                comentario: true,
                calificacion: true
            }
        })

        if(!comments) {
            return NextResponse.json({message: "Erro al traer los comentarios"}, {status: 500})
        }

        return NextResponse.json(comments, {status: 200})

    } catch (error) {
        return NextResponse.json({message: "Error de servidor"}, {status: 500})
    }
}