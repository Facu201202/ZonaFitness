import { getProductsToLink } from "@/services/admin/adminService"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const searchedProduct = searchParams.get("search") || ""

    const products = await getProductsToLink(searchedProduct)
    console.log(products)
    return NextResponse.json(products)
}