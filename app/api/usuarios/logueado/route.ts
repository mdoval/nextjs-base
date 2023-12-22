import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  console.log(session)
  try {
    const usuario = prisma.usuario.findUnique({
      where: {
        email: "martindoval@gmail.com",
      },
    });
    console.log(usuario)
    return NextResponse.json(usuario);
  } catch (error) {
    console.log(error);
  }
}