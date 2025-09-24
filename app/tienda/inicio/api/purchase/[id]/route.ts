import { getPurchase } from "@/services/purchaseService"
import { NextResponse, NextRequest } from "next/server"
import { homeDeliveryPrice, taxes } from "@/src/utils"
import { MetodoEnvio } from "@/src/generated/prisma"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const idNum = Number(id);
    const purchaseInfo = await getPurchase(idNum)

    if (!purchaseInfo) {
        return NextResponse.json({ error: "Error al traer la venta" }, { status: 404 })
    }

    const deliveryPrice = purchaseInfo.metodo_entrega === MetodoEnvio["DOMICILIO"] ? homeDeliveryPrice : 0

    return NextResponse.json({ ...purchaseInfo, taxes, deliveryPrice })
}

