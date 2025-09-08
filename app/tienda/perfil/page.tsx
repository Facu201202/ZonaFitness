"use client"
import ProfileBanner from "@/components/profile/ProfileBanner"
import ProfileComments from "@/components/profile/ProfileComments"
import ProfileFavorites from "@/components/profile/ProfileFavorites"
import ProfilePurchases from "@/components/profile/ProfilePurchases"
import ProfileUserForm from "@/components/profile/ProfileUserForm"
import ProfileUserPasswordForm from "@/components/profile/ProfileUserPasswordForm"
import ProfileWallet from "@/components/profile/ProfileWallet"
import { useUserStore } from "@/src/stores/userStore"
import { ProfileUserData } from "@/src/types"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

export default function Page() {
  const userId = useUserStore(state => state.userId);

  const [section, setSection] = useState(1)

  const fetchUserData = async (): Promise<ProfileUserData> => {
    const res = await fetch(`/tienda/perfil/api/${userId}`)
    if (!res.ok) throw new Error("Error al acceder al perfil")
    return res.json()
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["UserData", userId],
    queryFn: fetchUserData,
    enabled: !!userId
  })

  if (isLoading) return <div className="min-h-screen"></div>
  if (isError) return <p>Error al cargar datos</p>;
  if (!data) return null;
  const userBalance = data.saldo[0].saldo
  
  return (
    <div className="bg-gray-200 min-h-screen py-12 px-3">
      <div className="flex flex-col gap-6 max-w-5xl mx-auto">
        <ProfileBanner userData={data} section={section}/>
        <div className="bg-white flex flex-col lg:flex-row mb-2 rounded-lg shadow">
          <button className={`rounded-lg flex-1 text-center py-2 hover:cursor-pointer  font-semibold ${section === 1 && "bg-[#111827] text-white"}`} onClick={() => setSection(1)}>Datos Personales</button>
          <button className={`rounded-lg flex-1 text-center py-2 hover:cursor-pointer font-semibold ${section === 2 && "bg-[#111827] text-white"}`} onClick={() => setSection(2)}>Mis Compras</button>
          <button className={`rounded-lg flex-1 text-center py-2 hover:cursor-pointer font-semibold ${section === 3 && "bg-[#111827] text-white"}`} onClick={() => setSection(3)}>Favoritos</button>
          <button className={`rounded-lg flex-1 text-center py-2 hover:cursor-pointer font-semibold ${section === 4 && "bg-[#111827] text-white"}`} onClick={() => setSection(4)}>Mis Reseñas</button>
          <button className={`rounded-lg flex-1 text-center py-2 hover:cursor-pointer font-semibold ${section === 5 && "bg-[#111827] text-white"}`} onClick={() => setSection(5)}>Saldo</button>
          <button className={`rounded-lg flex-1 text-center py-2 hover:cursor-pointer font-semibold ${section === 6 && "bg-[#111827] text-white"}`} onClick={() => setSection(6)}>Cambiar Contraseña</button>
        </div>
        {section === 1 && <ProfileUserForm userData={data}/>}
        {section === 2 && <ProfilePurchases userId={data.id_usuario}/>}
        {section === 3 && <ProfileFavorites userId={+userId!}/>}
        {section === 4 && <ProfileComments />}
        {section === 5 && <ProfileWallet userBalance={userBalance}/>}
        {section === 6 && <ProfileUserPasswordForm userId={data.id_usuario}/>}
      </div>
    </div>
  )
}
