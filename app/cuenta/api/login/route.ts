import { findUser } from "@/services/userService";
import { loginUserSchema } from "@/src/schema";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcrypt"
import { generateJwt } from "@/src/lib/auth";

export async function POST(req: NextRequest) {
    const body = await req.json()
    const resultUSerData = loginUserSchema.safeParse(body)
    try {
        if (!resultUSerData.success) {
            return NextResponse.json({ errors: "Usuario o contraseña incorrectos" }, { status: 401 })
        }

        const userExists = await findUser(resultUSerData.data)
        if (!userExists) {
            return NextResponse.json({ errors: "Usuario o contraseña incorrectos" }, { status: 401 })
        }

        const validateUser = await bcrypt.compare(resultUSerData.data.contraseña, userExists.contraseña)
        if (!validateUser) {
            return NextResponse.json({ errors: "Usuario o contraseña incorrectos" }, { status: 401 })
        }

        const token = generateJwt(userExists.id_usuario, userExists.rol)
        if (!token) {
            throw new Error("Error al crear el token")
        }

        const cookiesStore = await cookies()
        cookiesStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: userExists.rol === 'administrador'
                ? 60 * 60 * 3
                : 60 * 60 * 24 * 7,
            path: "/"
        })


        return NextResponse.json({ message: "Login exitoso" }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ errors: "Error de servidor" }, { status: 500 })
    }
}