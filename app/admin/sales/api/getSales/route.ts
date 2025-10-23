import { getSales, getSalesCount } from "@/services/admin/adminService";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {

    const { searchParams } = new URL(req.url)
    

    const filters = {
        search: searchParams.get("search") || "",
        skip: Number(searchParams.get("skipPage")) || 0,
        filter: searchParams.get("filter") || ""
    }

    try {

        const [sales, salesCount] = await Promise.all([getSales(filters), getSalesCount(filters)]);

        if (!sales) {
            return NextResponse.json({ message: "No se encontraron ventas" }, { status: 404 })
        }

        return NextResponse.json({ sales, salesCount }, { status: 200 })

    } catch (error) {

        NextResponse.json({ message: "Error al obtener las ventas" }, { status: 500 })
    }
}