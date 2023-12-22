"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [errorLogin, setErrorLogin] = useState<string>("");

  const handleClickLogin = async () => {
    if (!email) setErrorEmail("Debe colocar un Email");
    else setErrorEmail("");
    if (!password) setErrorPassword("Debe colocar una Contraseña");
    else setErrorPassword("");

    if (email && password) {
      try {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
          //callbackUrl: "/dashboard",
        });

//        console.log(`res : ${JSON.stringify(res)}`)

        if (!res?.ok) {
          setErrorLogin("Credenciales Invalidas");
          return;
        } else {
          router.replace("/dashboard")
        }
      } catch (error) {
        console.log(error);
        setErrorLogin("Credenciales Invalidas");
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="juan@ejemplo.com"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            {errorEmail === "" ? (
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
          <div className="label">
            {errorLogin === "" ? (
              ""
            ) : (
              <span className="label-text-alt text-red-600">{errorLogin}</span>
            )}
          </div>
        </label>
      </div>
      <div className="w-full text-center">
        <button className="btn btn-primary w-1/3" onClick={handleClickLogin}>
          Ingresar
        </button>
      </div>

      <div className="w-full text-right m-4 p-2">
        <span>Aun no tiene cuenta ? </span>
        <Link href={"/registro"} className="text-blue-500">
          Registrese
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
