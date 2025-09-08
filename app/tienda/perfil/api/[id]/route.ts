import { getUserData } from "@/services/userService";
import { ProfileUserData } from "@/src/types";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const userId = Number(id);
    const UserData: ProfileUserData | null = await getUserData(userId)
    return NextResponse.json(UserData)
}