import { prisma } from "@/src/lib/prisma"
import { NewPublicationFormData } from "@/src/types"
import { featuresToString } from "@/src/utils"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body: NewPublicationFormData = await req.json()
    const text = featuresToString(body.features)
    try {
        const newPublication = await prisma.publicaciones.create({
            data: {
                caracteristicas: text,
                descuento: Number(body.discount),
                precio: body.price,
                id_producto: body.productId,
                activa: true
            }
        })
        if (!newPublication) {
            return NextResponse.json({ errors: "No se pudo crear la publicación" }, { status: 500 })
        }
        console.log(newPublication)
        return NextResponse.json({ message: "Publicación creada correctamente" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ errors: "Error de servidor" }, { status: 500 })
    }
}