import { prisma } from "@/src/lib/prisma"
import { CreateProductFormData } from "@/src/types"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body: CreateProductFormData = await req.json()

    try {
        const data = await prisma.$transaction(async (tx) => {
            const product = await tx.productos.create({
                data: {
                    nombre: body.name,
                    precio: Number(body.price),
                    foto: body.image,
                    color: body.color,
                    genero: body.gender,
                    id_categoria: Number(body.categoryId)
                }
            })

            const stockArray = Object.entries(body.stock).map(([talleId, cantidad]) => ({
                id_producto: product.id_producto,
                id_talle: Number(talleId.split("_")[0]),
                cantidad: Number(cantidad),
            }))

            await tx.stock.createMany({
                data: stockArray
            })
            
            return product
        }
        )
        console.log(data)
        return NextResponse.json({ message: "Producto registrado exitosamente" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ errors: "Error de servidor" }, { status: 500 })
    }
}