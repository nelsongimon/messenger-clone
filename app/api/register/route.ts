import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;
  
    if (!email || !name || !password) {
      return new NextResponse("Missing info", { status: 400 });
    }
  
    const hashedPassword = await bcrypt.hash(password, 12);
  
    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name
      }
    });
  
    return NextResponse.json(user);
    
  } catch (error: any) {
    console.log(error, 'REGISTRATION_ERROR');
    return new NextResponse("Internal Error", { status: 500 });
  }
}