import Image from "next/image"
import Link from "next/link"
import { useSearchParams, usePathname } from 'next/navigation'
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { ProfileUserData } from "@/src/types"

export default function ProfileBanner({userData, section}: {userData: ProfileUserData, section: number}) {
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const fullUrl = pathname + '?' + searchParams.toString();
  const editUser = +searchParams.get('editUser')!
  let editUserActive = editUser === 1 ? true : false

  return (
    <div className="bg-[#0F172B] rounded-2xl px-5 py-8 shadow sm:flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Image src={"/user.png"} alt="" height={100} width={100} className="rounded-full border border-4 border-[#45556C]" />
        <div>
          <p className="text-3xl text-white font-bold">{userData.usuario}</p>
          <p className="text-gray-400 font-medium">{userData.cliente.nombre + " " + userData.cliente.apellido}</p>
          <p className="text-gray-400 font-medium text-sm">{userData.cliente.correo}</p>
        </div>
      </div>
      <div>
        <Link
          
          href={`${editUserActive ? `${pathname}` : `${fullUrl}&editUser=${1}`}`}
          className={`flex gap-2 items-center mt-3 sm:mt-0 font-semibold shadow rounded-xl p-2 ${section !== 1 && "hidden"}  ${editUserActive ? "bg-gray-50 hover:cursor-pointer hover:bg-gray-100" : "bg-gray-50 border border-gray-200  hover:cursor-pointer hover:bg-gray-100"}`}
        >
          {editUserActive ? (<XCircleIcon className="h-5 w-5" />) : (<PencilSquareIcon className="h-5 w-5" />)}
          {editUserActive ? "Cancelar" : "Editar Perfil"}
        </Link>
      </div>
    </div>
  )
}
