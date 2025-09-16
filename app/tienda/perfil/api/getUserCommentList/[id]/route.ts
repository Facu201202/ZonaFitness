import {getuserCommentList} from "@/services/userService";
import {UserCommentList } from "@/src/types";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;
    const userId = Number(id);
    const userComment: UserCommentList[] | null = await getuserCommentList(userId);
    return NextResponse.json(userComment)
}