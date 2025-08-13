"use client"
import ProfileBanner from "@/components/profile/ProfileBanner"
import ProfilePurchases from "@/components/profile/ProfilePurchases"
import ProfileUserForm from "@/components/profile/ProfileUserForm"
import { useState } from "react"

export default function page() {
  const [section, setSection] = useState(1)
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="flex flex-col gap-6 max-w-5xl mx-auto">
        <ProfileBanner />
        <div className="bg-white flex mb-2 rounded-lg shadow">
          <button className={`rounded-lg text-center w-1/2 py-2 hover:cursor-pointer  font-semibold ${section === 1 && "bg-[#111827] text-white"}`} onClick={() => setSection(1)}>Datos Personales</button>
          <button className={`rounded-lg text-center w-1/2 hover:cursor-pointer font-semibold ${section === 2 && "bg-[#111827] text-white"}`} onClick={() => setSection(2)}>Mis Compras</button>
          <button className={`rounded-lg text-center w-1/2 hover:cursor-pointer font-semibold ${section === 3 && "bg-[#111827] text-white"}`} onClick={() => setSection(3)}>Favoritos</button>
          <button className={`rounded-lg text-center w-1/2 hover:cursor-pointer font-semibold ${section === 4 && "bg-[#111827] text-white"}`} onClick={() => setSection(4)}>Mis Reseñas</button>
          <button className={`rounded-lg text-center w-1/2 hover:cursor-pointer font-semibold ${section === 5 && "bg-[#111827] text-white"}`} onClick={() => setSection(5)}>Saldo</button>
        </div>
        {section === 1 && <ProfileUserForm/>}
        {section === 2 && <ProfilePurchases/>}
      </div>
    </div>
  )
}
