import { addToFavorites } from "@/services/userService"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body: {userId: number, publicationId: number} = await req.json()
    try {
        const res = await addToFavorites(body.publicationId, body.userId)

        return NextResponse.json({added: res.added}, { status: 201 })

    } catch (error) {
        return NextResponse.json({ errors: "Error de servidor" }, { status: 500 })
    }
}