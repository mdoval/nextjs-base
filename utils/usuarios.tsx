const registrarUsuario = async (usuario: IUsuario|undefined) => {
  const url = `http://localhost:3000/api/usuarios/registro`;
  const nuevoUsuario = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });
  return nuevoUsuario;
};

export default registrarUsuario;
