import Image from "next/image"
import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/outline"
import FilterMenu from "./FIlterMenu"
import { UserForSettings } from "@/src/types"
import { UserRolBgColor, UserRolBgColorKey } from "@/src/utils"
import { useState } from "react"

type UserCardProps = {
    user: UserForSettings
}

export default function UserCard({ user }: UserCardProps) {
    const [isChanging, setIsChanging] = useState(false)
    const [bgColor, textColor, borderColor] = UserRolBgColor[user.rol as UserRolBgColorKey]
    return (
        <div className={`p-4 border border-gray-200 shadow rounded-2xl flex justify-between ${isChanging && "opacity-30 pointer-events-none select-none"}`}>
            <div className="space-y-2">
                <div className="flex gap-2">
                    <Image src="/user.png" alt="User" width={40} height={40} className="rounded-full" />
                    <div>
                        <p className="font-semibold">{user.cliente.nombre} {user.cliente.apellido}</p>
                        <p className="text-sm text-gray-800 flex gap-1 items-center"><EnvelopeIcon className="w-3 h-3" /> {user.cliente.correo}</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <p className="text-sm text-gray-800 flex gap-1 items-center"><UserIcon className="w-3 h-3" /> Nombre de usuario: {user.usuario}</p>
                    <p className={`px-2 rounded w-fit text-xs border ${bgColor} ${textColor} ${borderColor}`}>{user.rol}</p>
                </div>
            </div>
            <div className="space-y-2">
                <p className="font-medium">Cambiar Rol</p>
                <FilterMenu rol={user.rol as UserRolBgColorKey} userId={user.id_usuario} setIsChanging={setIsChanging}/>
            </div>
        </div>
    )
}
