import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/prisma";

export async function POST(req: Request) {
  const data = await req.formData();

  const userId = data.get("id") as unknown as string
  const usuarioBuscado = await prisma.usuario.findUnique({where: {id: parseInt(userId)}})
  const file: File | null = data.get("file") as unknown as File;
  let fileName: string = usuarioBuscado?.id.toString() as string

  if (!file) {
    return NextResponse.json({ success: false });
  }

  if (file && file.type !== 'image/png' && file.type !== 'image/jpeg') {
    return NextResponse.json({ success: false, message: "Archivo no valido" });
  } else {
    fileName = fileName+".jpg"
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

//  const path = `public/images/${file.name}`
  const path = `public/images/${fileName}`
  await writeFile(path, buffer)
//  console.log(`open ${path} to see the uploaded file`)  
  try {
    const newUsuario = await prisma.usuario.update({
      where: { id: parseInt(userId) },
      data: { avatar: `http://localhost:3000/images/${fileName}`},
    });
    return NextResponse.json(newUsuario);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
