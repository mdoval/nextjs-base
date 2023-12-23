export const uploadPhoto = async (data: FormData | undefined) => {
    const url = `http://localhost:3000/api/usuarios/uploadphoto`;
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },      
            body: data
          })
      return res;
    } catch (error) {
      console.log("Error en Funcion")
    }
  };
  
  export default uploadPhoto;