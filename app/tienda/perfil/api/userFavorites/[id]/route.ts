import {getUserFavorites } from "@/services/userService";
import {Product } from "@/src/types";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const userId = Number(params.id)
    const UserFavorites: {publicacion: Product}[] | null = await getUserFavorites(userId)
    
    return NextResponse.json(UserFavorites.map(fav => fav.publicacion))
}