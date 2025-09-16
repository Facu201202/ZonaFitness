import { getProductComments } from "@/services/productService"
import {RelatedCommentsProduct } from "@/src/types"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, context: { params: Promise<{ publicationId: string, page: string }> }) {
    const { publicationId, page } = await context.params;
    console.log("publicationId:", publicationId, "page:", page)
    const ProductComments: RelatedCommentsProduct[] = await getProductComments(Number(publicationId), Number(page))
    return NextResponse.json(ProductComments)
}