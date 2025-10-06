import { prisma } from "@/src/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body: { productId: string, newState: boolean } = await req.json()
    console.log(body)

    const product = await prisma.productos.findUnique({
        where: {
            id_producto: Number(body.productId)
        },
        select: {
            activa: true,
            publicaciones: {
                select: {
                    id_publicacion: true,
                    activa: true
                }
            }
        }
    })
    try {
        if (!product) {
            return NextResponse.json({ message: "Producto no encontrado" }, { status: 404 })
        }
        if (product.activa === body.newState) {
            return NextResponse.json({ message: "El estado solicitado ya coincide con el actual" }, { status: 409 })
        }

        const data = await prisma.$transaction(async (tx) => {
            const productUpdated = await tx.productos.update({
                where: {
                    id_producto: Number(body.productId)
                },
                data: {
                    activa: body.newState
                }
            })

            if (!body.newState && product.publicaciones.length > 0) {
                await Promise.all(
                    product.publicaciones.map(publicacion =>
                        tx.publicaciones.update({
                            where: {
                                id_publicacion: publicacion.id_publicacion
                            },
                            data: {
                                activa: false
                            }
                        })
                    )
                )
            }

            return productUpdated
        })

        return NextResponse.json({ message: "Estado actualizado correctamente" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ errors: "Error de servidor" }, { status: 500 })
    }
}