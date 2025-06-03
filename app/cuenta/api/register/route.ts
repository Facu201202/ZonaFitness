import { registerUserSchema } from "@/src/schema"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body = await req.json()
    const resultUser = registerUserSchema.safeParse(body)
    const resultClient = registerUserSchema.safeParse(body)

    if (!resultUser.success) {
        console.log(resultUser.error)
        return
    }

    if (!resultClient.success) {
        console.log(resultClient.error)
        return
    }
    return NextResponse.json({ message: "Usuario registrado exitosamente" }, { status: 201 })
}