import {
  connectToDatabase,
  disconnectFromDatabase,
} from "@/helpers/server-helpers";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();
    if (!email || !password)
      return NextResponse.json({ message: "Wrong request" }, { status: 422 });
    await connectToDatabase();
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, hashedpassword },
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  } finally {
    await disconnectFromDatabase;
  }
};
