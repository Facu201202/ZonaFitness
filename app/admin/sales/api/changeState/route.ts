
import { EstadoEnvio } from "@/src/generated/prisma";
import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const body: { newState: EstadoEnvio, saleId: number } = await req.json()
    try {
        const sale = await prisma.ventas.findFirst({
            where: {
                id_venta: Number(body.saleId)
            }
        })

        if (!sale) {
            return NextResponse.json({ message: "Venta no encontrada" }, { status: 404 })
        }

        if (sale.estado === body.newState) {
            return NextResponse.json({ message: "El estado actual es igual al original" }, { status: 401 })
        }

        const update = await prisma.ventas.update({
            where: {
                id_venta: Number(body.saleId)
            },
            data: {
                estado: EstadoEnvio[body.newState]
            }
        })

        if (!update) {
            return NextResponse.json({ message: "Erro al actualizar el estado" }, { status: 500 })
        }


        return NextResponse.json({ message: "Estado actualizado correctamente" }, { status: 201 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error de servidor al cambiar el estado" }, { status: 500 })
    }
}