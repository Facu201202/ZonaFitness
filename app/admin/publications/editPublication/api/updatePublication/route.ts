import { prisma } from "@/src/lib/prisma"
import { EditPublicationFormData } from "@/src/types"
import { featuresToString } from "@/src/utils"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body: EditPublicationFormData = await req.json()
    const text = featuresToString(body.features)
    console.log(body, text)
    try {
        /*
        const updatedPublication = prisma.publicaciones.update({
            where: {
                id_publicacion: Number(body.publicationId)
            },
            data: {
                id_producto: Number(body.productId),
                precio: body.price,
                descuento: Number(body.discount),
                caracteristicas: text,

            }
        })*/
    } catch (error) {
        return NextResponse.json({error: "Error de servidor"}, {status: 500})
    }
}