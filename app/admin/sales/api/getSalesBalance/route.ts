import { getSalesInformation } from "@/services/admin/adminService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        
        const salesbalance = await getSalesInformation()

        return NextResponse.json(salesbalance, {status: 200})

    } catch (error) {
        return NextResponse.json({message: "Error al traer el balance de ventas"}, {status: 500})
    }
}