import { prisma } from "@/src/lib/prisma"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, context: { params: Promise<{ category: string }>}) {
    const { category } = await context.params;
    const res = await prisma.sizes.findMany({
        where: {
            categoria_talle: category
        }
    })
    return NextResponse.json(res)
}