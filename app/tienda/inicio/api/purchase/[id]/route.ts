import { getPurchase } from "@/services/purchaseService"
import { NextResponse, NextRequest } from "next/server"
import { taxes, homeDeliveryPrice } from "@/src/utils"
import { MetodoEnvio } from "@/src/generated/prisma"

export const dynamic = "force-dynamic"



export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = Number(params.id)
    const purchaseInfo = await getPurchase(id)

    if(!purchaseInfo) {
        return NextResponse.json({error: "Error al traer la venta"}, {status: 404})
    }

    const deliveryPrice = purchaseInfo.metodo_entrega === MetodoEnvio["DOMICILIO"] ? 3000 : 0

    return NextResponse.json({...purchaseInfo, taxes, deliveryPrice})
}

