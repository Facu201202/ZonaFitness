import { deleteUserComment } from "@/services/userService"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(req: NextRequest) {
    const body = await req.json()
    try {
        await deleteUserComment(Number(body))
        return NextResponse.json({ message: "Comentario eliminado correctamente" }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ errors: "Error de servidor" }, { status: 500 })
    }
}