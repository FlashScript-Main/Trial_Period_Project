import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// http://localhost:3000/api/auth-token?auth=token
export const GET = async (request: NextRequest) => {

    const searchParams = request.nextUrl.searchParams;

    const authToken = searchParams.get("auth");

    cookies().set("auth-token", `${authToken}`);
    
    return NextResponse.json(
        { message: "User Credentials Securely Stored" },
        { status: 201 }
    );
}