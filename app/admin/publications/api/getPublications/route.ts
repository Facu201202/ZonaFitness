import { getPublications, getSearchedPublicationsCount } from "@/services/admin/adminService"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const filter = searchParams.get("filter") 

    const filters = {
        search: searchParams.get("search") || "",
        skip: Number(searchParams.get("skipPage")) || 0,
        filter: filter ? filter === "Estado" ? "activa" : filter.toLowerCase() : null,
        lowStock: searchParams.get("lowStock"),
        RelatedPublications: searchParams.get("relatedProduct"),
    }

    const [publications, countPublications] = await Promise.all([getPublications(filters), getSearchedPublicationsCount(filters)])
    return NextResponse.json({publications, countPublications})
}