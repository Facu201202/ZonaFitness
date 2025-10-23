import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline"
import React from 'react'

export default function LogoutAdminButton({ isOpen }: { isOpen: boolean }) {
    const logout = async () => {
        await fetch("/cuenta/api/logout", {
            method: "POST",
            credentials: "include"
        })

        redirect("/cuenta")
    }

    return (

        <Link
            href={"/cuenta"}
            className={`bg-[#2D5DA2] hover:bg-[#275ca2d3] text-white rounded-full flex justify-center items-center gap-2 ${isOpen ? "px-5 py-2 font-semibold " : "p-2"}`}
            onClick={() => logout()}
        ><ArrowRightEndOnRectangleIcon className="h-5 w-5"/>{isOpen && "Cerrar Sesion"}</Link>
    )
}
