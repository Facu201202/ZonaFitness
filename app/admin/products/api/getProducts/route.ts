import { getProducts, getSearchedProductsCount } from "@/services/admin/adminService"
import { ProductAdmin } from "@/src/types"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const filters = {
        search: searchParams.get("search") || "",
        skip: Number(searchParams.get("skipPage")) || 0,
        category: searchParams.get("category")
    }

    const [products, countProducts]: [ProductAdmin[], number] = await Promise.all([getProducts(filters), getSearchedProductsCount(filters)])
    return NextResponse.json({products, countProducts})
}