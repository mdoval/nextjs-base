"use client";

import updateUsuario from "@/utils/updateUsuario";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import Modal from "./Modal";
import passwordChange from "@/utils/passwordChange";

interface Props {
  user: any;
}

const ProfileForm: FC<Props> = ({ user }) => {
  const router = useRouter();
  const [nombre, setNombre] = useState<string>(user.name);
  const [hidden, setHidden] = useState<boolean>(true);
  const [pass1, setPass1] = useState<string>("");
  const [pass2, setPass2] = useState<string>("");
  const [errorPass, setErrorPass] = useState<string>("");

  const handleUpdate = async () => {
    try {
      const usuario: IUsuario = {
        id: user.id,
        nombre: nombre,
      };
      const res = await updateUsuario(usuario);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePassword = async () => {
    if (!pass1 || !pass2) {
      setErrorPass("Debe cargar contraseña");
    } else {
      if (pass1 != pass2) {
        setErrorPass("Las contraseñas no coinciden");
      } else {
        try {
          const usuario: IUsuario = {
            id: user.id,
            password: pass1,
          };
          const res = await passwordChange(usuario);
          router.push("/dashboard");
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white border shadow-lg p-5">
      <h1>Perfil</h1>
      <br />
      <div className="avatar m-auto flex flex-col">
        <div className="w-24 rounded-full">
          <img src={user.avatar} />
        </div>
        <button className="text-blue-600">Cambiar Foto</button>
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            value={user.email}
            disabled={true}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Nombre</span>
          </div>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </div>
      <div>
        <button className="m-4 text-blue-600" onClick={() => setHidden(false)}>
          Cambiar Contraseña
        </button>
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Empresa</span>
          </div>
          <input
            value={user.empresa.nombre}
            disabled={true}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </div>
      <div className="m-2 flex flex-row-reverse">
        <button className="btn btn-primary w-1/4" onClick={handleUpdate}>
          Guardar
        </button>
      </div>
      <Modal hidden={hidden}>
        <div className="flex flex-col">
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Nueva Contraseña</span>
              </div>
              <input
                value={pass1}
                onChange={(e) => setPass1(e.target.value)}
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Repetir Contraseña</span>
              </div>
              <input
                value={pass2}
                onChange={(e) => setPass2(e.target.value)}
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="flex space-x-2 w-full mt-4">
            <button
              className="btn btn-primary w-1/3"
              onClick={handleUpdatePassword}
            >
              Guardar
            </button>
            <button
              className="btn btn-error w-1/3"
              onClick={() => setHidden(true)}
            >
              Cancelar
            </button>
          </div>
          <div className="mt-4">
            {errorPass === "" ? (
              ""
            ) : (
              <span className="text-red-600">{errorPass}</span>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileForm;
