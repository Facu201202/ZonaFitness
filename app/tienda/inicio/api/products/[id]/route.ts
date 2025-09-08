import { getProducts } from "@/services/productService"
import { Product } from "@/src/types"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const idNum = id ? Number(id) : 0;
    const products: Product[] = await getProducts(idNum)
    return NextResponse.json(products)
}