import { getSales } from "@/services/admin/adminService";
import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    try {
        

        const [sales, salesCount] = await Promise.all([getSales(), prisma.ventas.count()]);

        if(!sales) {
            return NextResponse.json({message: "No se encontraron ventas"}, {status: 404})
        }

        return NextResponse.json({sales, salesCount}, {status: 200})

    } catch (error) {

        NextResponse.json({message: "Error al obtener las ventas"}, {status: 500})
    }
}