import { createAccount } from "@/services/userService"
import { registerClientSchema, registerUserSchema } from "@/src/schema"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body = await req.json()
    const resultUser = registerUserSchema.safeParse({...body, rol: "usuario"})
    const resultClient = registerClientSchema.safeParse(body)
    try {
        if (!resultUser.success) {
            console.log(resultUser.error)
            return
        }
        if (!resultClient.success) {
            console.log(resultClient.error)
            return
        }
        const res = await createAccount(resultUser.data, resultClient.data)

        if("message" in res){
            console.log(res.message)
            return NextResponse.json({errors: res.message}, {status: 400})
        }
         
        return NextResponse.json({ message: "Usuario registrado exitosamente" }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ errors: error }, { status: 400 })
    }


    
}