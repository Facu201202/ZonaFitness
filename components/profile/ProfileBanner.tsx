import Image from "next/image"
import Link from "next/link"
import { useSearchParams, usePathname } from 'next/navigation'
import { PencilSquareIcon } from "@heroicons/react/24/outline"
import { ProfileUserData } from "@/src/types"

export default function ProfileBanner({userData}: {userData: ProfileUserData}) {
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const fullUrl = pathname + '?' + searchParams.toString();
  const editUser = +searchParams.get('editUser')!
  let editUserActive = editUser === 1 ? true : false

  return (
    <div className="bg-white rounded-2xl p-5 shadow sm:flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Image src={"/user.png"} alt="" height={100} width={100} className="rounded-full" />
        <div>
          <p className="text-3xl font-bold">{userData.usuario}</p>
          <p className="text-gray-600 font-medium">{userData.cliente.nombre + " " + userData.cliente.apellido}</p>
          <p className="text-gray-500 font-medium text-sm">{userData.cliente.correo}</p>
        </div>
      </div>
      <div>
        <Link
          href={`${editUserActive ? `${pathname}` : `${fullUrl}&editUser=${1}`}`}
          className={`flex gap-2 mt-3 sm:mt-0 font-semibold shadow rounded-xl p-2 ${editUserActive ? "bg-[#222a3b] text-white hover:cursor-pointer hover:bg-[#19202e]" : " border border-gray-200  hover:cursor-pointer hover:bg-gray-50"}`}
        >
          <PencilSquareIcon className="h-5 w-5" />
          {editUserActive ? "Guardar" : "Editar Perfil"}
        </Link>
      </div>
    </div>
  )
}
