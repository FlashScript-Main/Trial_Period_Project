import { NextResponse } from "next/server";

const baseURL = "https://trial-period-server.vercel.app/"

export const GET = async () => {
    const response = await fetch(`${baseURL}/posts`, {
        cache: "no-cache",
    });
    const posts = await response.json();
    return NextResponse.json(posts);
};