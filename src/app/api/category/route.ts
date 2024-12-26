import { NextResponse } from "next/server";

const baseURL = "https://trial-period-server.vercel.app/"

export const GET = async () => {
    const response = await fetch(`${baseURL}/category`, {
        cache: "no-cache",
    });
    const categories = await response.json();
    return NextResponse.json(categories);
};