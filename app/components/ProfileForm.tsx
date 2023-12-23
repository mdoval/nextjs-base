"use client";

import { Usuario } from "@prisma/client";
import React, { FC, useState } from "react";

interface Props {
  user: any;
}

const ProfileForm: FC<Props> = ({ user }) => {
  const [nombre, setNombre] = useState<string>(user.name)

  const handleUpdate = async () => {
    alert('Usuario Actualizado')
  }

  return (
    <div className="w-full h-full flex flex-col bg-white border shadow-lg p-5">
      <h1>Perfil</h1>
      <br />
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={user.avatar} />
        </div>
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
            onChange={(e) => setNombre(e.target.value) }
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
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
        <button className="btn btn-primary w-1/4">Guardar</button>
      </div>
    </div>
  );
};

export default ProfileForm;
