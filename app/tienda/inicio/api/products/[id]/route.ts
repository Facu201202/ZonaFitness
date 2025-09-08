import { getProducts } from "@/services/productService"
import { Product } from "@/src/types"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id: number = params.id ? Number(params.id) : 0
    const products: Product[] = await getProducts(id)
    return NextResponse.json(products)
}