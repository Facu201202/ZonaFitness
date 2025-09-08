import {getUserPurchase } from "@/services/userService";
import {UserPurchase } from "@/src/types";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const userId = Number(id);
    const UserPurchases: UserPurchase[] | null = await getUserPurchase(userId)
    return NextResponse.json(UserPurchases)
}