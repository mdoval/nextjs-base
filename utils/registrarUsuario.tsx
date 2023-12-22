export const registrarUsuario = async (usuario: IUsuario | undefined) => {
  const url = `http://localhost:3000/api/usuarios/registro`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return res;
  } catch (error) {
    console.log("Error en Funcion")
  }
};

export default registrarUsuario;
