import { prisma } from "@/src/lib/prisma"
import { EditPublicationFormData } from "@/src/types"
import { featuresToString } from "@/src/utils"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body: EditPublicationFormData = await req.json()
    const text = featuresToString(body.features)
    try {
        const updatedPublication = await prisma.publicaciones.update({
            where: {
                id_publicacion: Number(body.publicationId)
            },
            data: {
                precio: Number(body.price),
                descuento: Number(body.discount),
                caracteristicas: text,

            }
        })
        if(!updatedPublication) {
            return NextResponse.json({ error: "No se pudo actualizar la publicación" }, { status: 400 })
        }


        return NextResponse.json({message: "Publicación actualizada correctamente"}, {status: 200})

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Error de servidor" }, { status: 500 })
    }
}