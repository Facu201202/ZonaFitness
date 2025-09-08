import { getUserBalance } from "@/services/userService"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = Number(params.id)
    const balance = await getUserBalance(id)
    if(!balance) {
        return NextResponse.json({error: "Error al encontrar el saldo"}, {status: 404})
    }
    return NextResponse.json(balance)
}
