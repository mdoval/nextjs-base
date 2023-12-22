"use client";

import { registrarUsuario } from "@/utils/registrarUsuario";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const RegisterForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nombre, setNombre] = useState<string>("");
  const [empresa, setEmpresa] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [errorNombre, setErrorNombre] = useState<string>("");
  const [errorEmpresa, setErrorEmpresa] = useState<string>("");

  const handleClickRegister = async () => {
    if (!email) setErrorEmail("Debe colocar un Email");
    else setErrorEmail("");
    if (!password) setErrorPassword("Debe colocar una Contraseña");
    else setErrorPassword("");
    if (!nombre) setErrorNombre("Debe colocar un nombre");
    else setErrorNombre("");
    if (!empresa) setErrorEmpresa("Debe colocar una empresa");
    else setErrorEmpresa("");
    if (email && password && nombre && empresa) {
      //console.log("Registrando Cliente")
      try {
        const usuario: IUsuario = {
          email: email,
          password: password,
          nombre: nombre,
          empresa: empresa
        }
          const res = await registrarUsuario(usuario)      
        router.push("/registrado")
      } catch(error) {
        console.log(`Error capturado desde el formulario: ${error}`)        
      }
    }
  };

  return (
    <div className="w-1/4 border shadow p-5 m-10">
      <div className="w-full font-bold text-2xl text-center">
        Formulario de Login
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">Email</span>
          </div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail( e.target.value)}
            placeholder="juan@ejemplo.com"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            {errorEmail === "" ? (
              ""
            ) : (
              <span className="label-text-alt text-red-600">{errorEmail}</span>
            )}
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">Contraseña</span>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese Contraseña"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            {errorPassword === "" ? (
              ""
            ) : (
              <span className="label-text-alt text-red-600">
                {errorPassword}
              </span>
            )}
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">Nombre</span>
          </div>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Juan Perez"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            {errorNombre === "" ? (
              ""
            ) : (
              <span className="label-text-alt text-red-600">{errorNombre}</span>
            )}
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">Empresa</span>
          </div>
          <input
            type="text"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            placeholder="Nombre empresa"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            {errorEmpresa === "" ? (
              ""
            ) : (
              <span className="label-text-alt text-red-600">
                {errorEmpresa}
              </span>
            )}
          </div>
        </label>
      </div>
      <div className="w-full text-center">
        <button className="btn btn-primary w-1/3" onClick={handleClickRegister}>
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
