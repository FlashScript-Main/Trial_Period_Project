// import { NextResponse } from "next/server";

// const baseURL = "https://trial-period-server.vercel.app/"

// export async function POST(request: Request) {
//     const body = await request.json();

//     await fetch(`${baseURL}/users`, {
//         method: "POST",
//         body: JSON.stringify(body),
//     });
  
//     return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
// }