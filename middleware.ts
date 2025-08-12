import { NextRequest, NextResponse } from "next/server"
import {jwtVerify} from "jose"

export async function middleware(req: NextRequest) {

    const token = req.cookies.get("token")?.value
    const authRoutes = ["/admin", "/perfil"]
    const pathname = req.nextUrl.pathname

    if (!token && authRoutes.some(route => pathname.startsWith(route))) {
        console.log(req.url)
        return NextResponse.redirect(new URL("/cuenta", req.url))
    }

    if (!token) return NextResponse.next()
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        const {payload} = await jwtVerify(token, secret) 
        const response = NextResponse.next()
        response.headers.set("x-user-id", payload.id_usuario as string)
        return response
    } catch (error) {
        console.log(error)
    }
}