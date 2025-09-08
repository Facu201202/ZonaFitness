import { getUserFavorites } from "@/services/userService";
import { Product } from "@/src/types";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const userId = Number(id);
    const UserFavorites: { publicacion: Product }[] | null = await getUserFavorites(userId)

    return NextResponse.json(UserFavorites.map(fav => fav.publicacion))
}