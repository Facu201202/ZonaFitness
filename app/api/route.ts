import {prisma} from "@/src/lib/prisma"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
    const products = await prisma.publicaciones.findMany({
        take: 10,
        orderBy: {
            fecha: "desc"
        },
        include: {
            producto: {
                include: {
                    categoria: true,
                    stocks: {
                        include: {
                            talle: true
                        }
                    }
                }
            }
        }
    })
    return NextResponse.json(products)
}