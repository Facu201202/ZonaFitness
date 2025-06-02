"use client"

import LoginForm from "@/components/login-register/LoginForm";
import RegisterForm from "@/components/login-register/RegisterForm";
import LogoBlackBg from "@/components/logos/LogoBlackBg";
import { useState } from "react";

export default function page() {

  const [login, setLogin] = useState(true)

  return (
    <div className="bg-[#111827] min-h-screen flex justify-center items-center">
      <div className="w-2xl">
        <LogoBlackBg />
        <div className="mt-10">
          <div className="bg-white flex mb-2 rounded-lg">
            <button className={`rounded-lg text-center w-1/2 py-2 hover:cursor-pointer  font-semibold ${login ? "bg-white text-black" : "bg-gray-100 text-gray-500"}`}  onClick={() => setLogin(true)}>Iniciar Sesión</button>
            <button className={`rounded-lg text-center w-1/2 hover:cursor-pointer font-semibold ${!login ? "bg-white text-black" : "bg-gray-100 text-gray-500"}`} onClick={() => setLogin(false)}>Registrarse</button>
          </div>
          {login ? (<LoginForm />) : (<RegisterForm />)}

        </div>


      </div>
    </div>
  )
}
