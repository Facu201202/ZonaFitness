import { getProducts } from "@/services/admin/adminService"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
     const products= await getProducts()
    return NextResponse.json(products)
}