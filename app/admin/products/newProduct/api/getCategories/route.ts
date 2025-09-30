import { prisma } from "@/src/lib/prisma"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
    const res = await prisma.categorias.findMany()
    return NextResponse.json(res)
}