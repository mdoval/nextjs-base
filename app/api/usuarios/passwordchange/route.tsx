import { NextResponse } from "next/server";
import prisma from "@/db/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function PUT(req: Request) {
  const data = await req.json();
  //console.log(data)

  try {
    const newUsuario = await prisma.usuario.update({
      where: {id: data.id},
      data: { password: data.password },
    });
    return NextResponse.json(newUsuario);
  } catch (error) {
    console.log(error)
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        //console.log('Este correo ya se encuentra registrado')
        throw (new Error(
          `Error en la Actualizacion Cambio de contraseña:`
        ).name = "Cambio de Contraseña");
      }
    }
  }
}
