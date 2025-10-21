import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
    const body = await req.json()
    console.log(body)
    try {
        
    } catch (error) {
        return NextResponse.json({message: "Error de servidor al cambiar el estado"}, {status: 500})
    }
}