import { NextResponse } from "next/server"
import prisma from "@/db/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function POST(req: Request) {
    const data = await req.json()
   
    try {
        const newEmpresa = await prisma.empresa.create({data: {nombre: data.empresa}})
        const newUsuario = await prisma.usuario.create({data: {email: data.email, name: data.nombre, empresaId: newEmpresa.id, password: data.password}})
        return NextResponse.json(newUsuario)
    } catch( error ) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
              //console.log('Este correo ya se encuentra registrado')
              throw new Error(`Error en la creacion del usuario: Correo Duplicado`).name = "Email Duplicado";
            }
        }
    }
}   