import {NextResponse } from "next/server"
import { cookies } from "next/headers";

export async function POST() {
    const cookiesStore = await cookies()
    cookiesStore.set("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0,
        path: "/"
    })

    return NextResponse.json({message: "Sesión cerrada"}, {status: 200})
}