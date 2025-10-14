import { getPublications, getSearchedPublicationsCount } from "@/services/admin/adminService"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const filters = {
        search: searchParams.get("search") || "",
        skip: Number(searchParams.get("skipPage")) || 0,
        category: searchParams.get("category"),
        lowStock: searchParams.get("lowStock")
    }

    console.log(filters)

    const [publications, countPublications] = await Promise.all([getPublications(filters), getSearchedPublicationsCount(filters)])
    return NextResponse.json({publications, countPublications})
}