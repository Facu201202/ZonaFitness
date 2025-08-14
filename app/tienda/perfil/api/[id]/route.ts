import { getUserData } from "@/services/userService";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const userId = Number(params.id)
    const UserData = await getUserData(userId)
    return NextResponse.json(UserData)
}