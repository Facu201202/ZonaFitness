import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export default function LogoutButton() {
    const logout = async () => {
       await fetch("/cuenta/api/logout",{
        method: "POST",
        credentials: "include"
       })

       redirect("/cuenta")
    }

  return (
    <Link href={"/cuenta"} className="hover:text-[#275DA2]" onClick={() => logout()}>Cerrar Sesion</Link>
  )
}
