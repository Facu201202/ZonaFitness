import { createUserComment, getOneUserPurchase } from "@/services/userService"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body = await req.json()
    try {
        const purchaseExist = await getOneUserPurchase(body.purchaseId, body.userId)
        if (!purchaseExist) {
            return NextResponse.json({ errors: "Compra no encontrada" }, { status: 404 })
        }

        await createUserComment(body)

        return NextResponse.json({ message: "Comentario registrado correctamente" }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ errors: "Error de servidor" }, { status: 500 })
    }
}