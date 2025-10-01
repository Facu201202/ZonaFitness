import { prisma } from "@/src/lib/prisma"
import { EditProductFormData } from "@/src/types"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body: EditProductFormData = await req.json()
    try {
        const data = await prisma.$transaction(async (tx) => {
            const product = await tx.productos.update({
                where: {
                    id_producto: Number(body.id_producto)
                },
                data: {
                    nombre: body.nombre,
                    precio: Number(body.precio),
                    foto: body.foto,
                    color: body.color,
                    genero: body.genero,
                }
            })

            const stockArray = Object.entries(body.stock).map(([talleId, cantidad]) => ({
                id_stock: Number(talleId.split("_")[0]),
                cantidad: Number(cantidad),
            }))

            await Promise.all(
                stockArray.map((stock) =>
                    tx.stock.update({
                        where: { id_stock: stock.id_stock },
                        data: { cantidad: stock.cantidad }
                    })
                )
            )

            return product
        }
        )

        return NextResponse.json({ message: "Producto actualizado exitosamente" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ errors: "Error de servidor" }, { status: 500 })
    }
}