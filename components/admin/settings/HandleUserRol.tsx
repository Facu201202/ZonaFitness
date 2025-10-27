import { ShieldCheckIcon } from "@heroicons/react/24/outline"
import FilterOptions from "./FilterOptions"
import UserCard from "./UserCard"

export default function HandleUserRol() {
    return (
        <div className='mx-10 my-5 border border-gray-300 bg-gray-50 rounded-2xl p-5 space-y-4'>
            <div>
                <h2 className="font-bold text-gray-800 flex gap-2"><ShieldCheckIcon className="w-6 h-6" /> Gestión de Roles de Usuario</h2>
                <p className="text-gray-800 text-sm">Busca usuarios por nombre o email y modifica sus roles</p>
            </div>
            <FilterOptions />
            <div>
                <UserCard user={1}/>
            </div>
        </div>
    )
}
