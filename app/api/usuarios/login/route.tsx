import { NextResponse } from "next/server"
import prisma from "@/db/prisma";

export async function POST(req: Request) {
    const data = await req.json()
    const usuario = await prisma.usuario.findUnique({
        where: {
          email: data.email,
          password: data.password,  // Compara la contraseña también
        },
        include: {
          empresa: true,
        },
      });

      if(usuario) return NextResponse.json({ id: usuario.id, name: usuario.name, email: usuario.email })
      else return NextResponse.json(null)
    
}