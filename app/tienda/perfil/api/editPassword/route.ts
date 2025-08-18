import {updatePassword } from "@/services/userService"
import { ChangePasswordData } from "@/src/types"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body: ChangePasswordData = await req.json()

    try {
        const res = await updatePassword(body)

        if("message" in res){
            return NextResponse.json({errors: res.message}, {status: res.status})
        }
         
        return NextResponse.json({ message: "Contraseña actulizada" }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ errors: "Error de servidor" }, { status: 500 })
    }
}