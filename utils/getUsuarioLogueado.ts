import { cookies } from 'next/headers'

export const getUsuarioLogueado = async () => {
  const url = `http://localhost:3000/api/usuarios/logueado`;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      Cookie: cookies().toString()        
    },
  });
  const usuarioLogueado = await data.json()
  return usuarioLogueado;
};