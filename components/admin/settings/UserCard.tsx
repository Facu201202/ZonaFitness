import Image from "next/image"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

type UserCardProps = {
    user: any
}

export default function UserCard({ user }: UserCardProps) {
    return (
        <div className='p-4 border border-gray-200 shadow rounded-2xl'>
            <div className="flex gap-2">
                <Image src="/user.png" alt="User" width={40} height={40} className="rounded-full" />
                <div>
                    <p className="font-semibold">Nombre</p>
                    <p className="text-sm text-gray-800 flex gap-2 items-center"><EnvelopeIcon className="w-3 h-3"/> correo@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
