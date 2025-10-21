import { prisma } from "@/src/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body: { publicationId: string, newState: boolean } = await req.json()

    const publication = await prisma.publicaciones.findUnique({
        where: {
            id_publicacion: Number(body.publicationId)
        },
        select: {
            id_publicacion: true,
            activa: true,
            producto: {
                select: {
                    activa: true
                }
            }
        }
    })
    try {

        if (!publication) {
            return NextResponse.json({ message: "Publicación no encontrado" }, { status: 404 })
        }

        if (publication.producto.activa === false && body.newState === true) {
            return NextResponse.json({ message: "Debe activar el producto primero" }, { status: 409 })
        }

        if (publication.activa === body.newState) {
            return NextResponse.json({ message: "El estado solicitado ya coincide con el actual" }, { status: 409 })
        }

        const data = await prisma.publicaciones.update({
            where: {
                id_publicacion: Number(body.publicationId)
            },
            data: {
                activa: body.newState
            }
        })

        if(!data){
            return NextResponse.json({ message: "No se pudo actualizar el estado" }, { status: 500 })
        }

        return NextResponse.json({ message: "Estado actualizado correctamente" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ errors: "Error de servidor" }, { status: 500 })
    }
}