import { createAccount, updateUserInfo } from "@/services/userService"
import { editClientSchema, editUserSchema } from "@/src/schema"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body = await req.json()
    console.log(body)

    const resultUser = editUserSchema.safeParse({...body, rol: "usuario"})
    const resultClient = editClientSchema.safeParse(body)
    try {
        if (!resultUser.success) {
            return NextResponse.json({errors: "Error de validación"}, {status: 400})
        }
        if (!resultClient.success) {
            return NextResponse.json({errors: "Error de validación"}, {status: 400})
        }

        const res = await updateUserInfo(resultUser.data, resultClient.data)

        if("message" in res){
            return NextResponse.json({errors: res.message}, {status: res.status})
        }
         
        return NextResponse.json({ message: "Usuario actulizado correctamente" }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ errors: "Error de servidor" }, { status: 500 })
    }
}