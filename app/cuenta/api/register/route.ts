import { createAccount } from "@/services/userService"
import { registerClientSchema, registerUserSchema } from "@/src/schema"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body = await req.json()
    console.log(body)
    const resultUser = registerUserSchema.safeParse({...body, rol: "usuario"})
    const resultClient = registerClientSchema.safeParse(body)
    try {
        if (!resultUser.success) {
            return NextResponse.json({errors: "Error de validación"}, {status: 400})
        }
        if (!resultClient.success) {
            return NextResponse.json({errors: "Error de validación"}, {status: 400})
        }
        const res = await createAccount(resultUser.data, resultClient.data)

        if("message" in res){
            return NextResponse.json({errors: res.message}, {status: 409})
        }
         
        return NextResponse.json({ message: "Usuario registrado exitosamente" }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ errors: "Error de servidor" }, { status: 500 })
    }
}