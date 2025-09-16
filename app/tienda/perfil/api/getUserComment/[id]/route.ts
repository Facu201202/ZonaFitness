import { getUserComment} from "@/services/userService";
import { UserComment } from "@/src/types";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const userId = Number(id);
    const userComment: UserComment | null = await getUserComment(userId);
    return NextResponse.json(userComment)
}