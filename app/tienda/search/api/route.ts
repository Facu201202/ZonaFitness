import { getSearchedProducts, getSearchedProductsCount } from "@/services/productService"
import { Product } from "@/src/types"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const filters = {
        search: searchParams.get("search") || "",
        categories: searchParams.getAll("category"),
        sizes: searchParams.getAll("size"),
        discount: searchParams.get("discount") || false,
        price: Number(searchParams.get("price")) || 200000,
        skipPage: Number(searchParams.get("skipPage")) || 1
    }
    const [products, countProducts]: [Product[], number] = await Promise.all([getSearchedProducts(filters), getSearchedProductsCount(filters)])
    return NextResponse.json({ products, countProducts })
}