import Image from "next/image"
import {PencilSquareIcon } from "@heroicons/react/24/outline"
export default function ProfileBanner() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Image src={"/user.png"} alt="" height={100} width={100} className="rounded-full"/>
        <div>
          <p className="text-3xl font-bold">FacuFF</p>
          <p className="text-gray-600 font-medium">Facundo Fernández</p>
          <p className="text-gray-500 font-medium text-sm">facuu201202@gmail.com</p>
        </div>
      </div>
      <div>
        <button className="flex gap-2 font-semibold shadow border border-gray-200 rounded-xl p-2 hover:cursor-pointer hover:bg-gray-50">
          <PencilSquareIcon className="h-5 w-5"/>
          Editar Perfil
        </button>
      </div>
    </div>
  )
}
