import { getProducts } from "@/services/admin/adminService"
import { ProductAdmin } from "@/src/types"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
     const products: ProductAdmin[] = await getProducts()
    return NextResponse.json(products)
}