import { getUsers } from "@/services/admin/adminService";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url)
    const filters = {
        search: searchParams.get("search") || ""
    }
    try {
        const users = await getUsers(filters)
        if(!users){
            return NextResponse.json({message: "Error al encontrar el usuario"}, {status: 404})

        }

        return NextResponse.json(users, {status: 200})

    } catch (error) {
        return NextResponse.json({message: "Error de servidor"}, {status: 500})
    }
}