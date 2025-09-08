import { getUserBalance } from "@/services/userService"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const idNum = Number(id);
    const balance = await getUserBalance(idNum)
    if (!balance) {
        return NextResponse.json({ error: "Error al encontrar el saldo" }, { status: 404 })
    }
    return NextResponse.json(balance)
}
