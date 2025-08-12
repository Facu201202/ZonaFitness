import { getProducts } from "@/services/productService"
import { Product } from "@/src/types"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
    const products: Product[] = await getProducts()
    return NextResponse.json(products)
}