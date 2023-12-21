import { NextResponse } from "next/server"
import prisma from "@/db/prisma";

export async function POST(req: Request) {
    const data = await req.json()
    console.log(data)
    
    try {
        const newEmpresa = await prisma.empresa.create({data: {nombre: data.empresa}})
        const newUsuario = await prisma.usuario.create({data: {email: data.email, name: data.nombre, empresaId: newEmpresa.id, password: data.password}})
        return NextResponse.json(newUsuario)
    } catch( error ) {
        console.log(error)
        return NextResponse.json({message: "No se pudo crear el usuario"})
    }
}