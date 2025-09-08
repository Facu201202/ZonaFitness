import {getUserPurchase } from "@/services/userService";
import {UserPurchase } from "@/src/types";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const userId = Number(params.id)
    const UserPurchases: UserPurchase[] | null = await getUserPurchase(userId)
    return NextResponse.json(UserPurchases)
}