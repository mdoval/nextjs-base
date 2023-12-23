import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/prisma";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const userId: number = data.get("id") as unknown as number
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const path = `/public/images/${file.name}`
  await writeFile(path, buffer)
  console.log(`open ${path} to see the uploaded file`)
    
  try {
    const newUsuario = await prisma.usuario.update({
      where: { id: userId },
      data: { avatar: path },
    });
    return NextResponse.json(newUsuario);
  } catch (error) {
    console.log(error);
/*    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        //console.log('Este correo ya se encuentra registrado')
        throw (new Error(`Error en la Actualizacion del usuario:`).name =
          "Email Duplicado");
      }
    }
*/
  }
}
