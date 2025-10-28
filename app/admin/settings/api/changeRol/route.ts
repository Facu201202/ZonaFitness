import { prisma } from "@/src/lib/prisma";
import {UserRolBgColorKey, UserRols } from "@/src/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body: {newRol: UserRolBgColorKey, userId: number} = await req.json()
    try {
        if(!UserRols.includes(body.newRol.toLowerCase())){
            return NextResponse.json({message: "Error de validación"}, {status: 422})
        }
        
        const user = await prisma.usuarios.update({
            where: {
                id_usuario: body.userId
            },
            data: {
                rol: body.newRol.toLowerCase()
            }
        })

        if(!user) {
            return NextResponse.json({message: "Error al actualizar el rol"}, {status: 500})
        }

        return NextResponse.json({message: "Rol actualizado correctamente"}, {status: 200})

    } catch (error) {
        return NextResponse.json({ message: "Error de servidor", error}, { status: 500 })
    }
}