import {getUserFavorites } from "@/services/userService";
import {Product, UserPurchase } from "@/src/types";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const userId = Number(params.id)
    const UserPurchases: {publicacion: Product}[] | null = await getUserFavorites(userId)
    return NextResponse.json(UserPurchases)
}