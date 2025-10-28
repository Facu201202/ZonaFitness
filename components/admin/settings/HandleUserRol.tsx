import { ShieldCheckIcon } from "@heroicons/react/24/outline"
import FilterOptions from "./FilterOptions"
import UserCard from "./UserCard"
import { useSearchParams } from "next/navigation"
import { queryFilterAdminSettingsRol } from "@/src/utils"
import { useQuery } from "@tanstack/react-query"
import Spinner from "@/components/Spinner"
import { UserForSettings } from "@/src/types"

export default function HandleUserRol() {
    const searchParams = useSearchParams()
    const search = searchParams.get("searchUser") ? true : false
    const urlQueryFilter = queryFilterAdminSettingsRol(searchParams)

    const fetchSales = async (): Promise<UserForSettings[]> => {
        const res = await fetch(`/admin/settings/api/getUsers?${urlQueryFilter.toString()}`)
        if (!res.ok) throw new Error("Error al mostrar los Usuarios")
        return res.json()
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ["Users_settings", urlQueryFilter.toString()],
        queryFn: () => fetchSales(),
        enabled: search
    })

    return (
        <div className='mx-auto my-5 border border-gray-300 bg-gray-50 rounded-2xl p-5 space-y-4 max-w-7xl shadow'>
            <div>
                <h2 className="font-bold text-gray-800 flex gap-2"><ShieldCheckIcon className="w-6 h-6" /> Gestión de Roles de Usuario</h2>
                <p className="text-gray-800 text-sm">Busca usuarios por nombre o email y modifica sus roles</p>
            </div>
            <FilterOptions />
            <div className="py-5">
                {isLoading && <Spinner />}
                {isError && <p className="text-center font-semibold">Hubo un error al buscar los usuarios</p>}
                {(data && data.length < 1) && <p className="text-center font-semibold">No se encontraron resultados</p>}
                {(data && search) && (
                    <div className="space-y-3">
                        {data.map(user => (
                            <UserCard user={user} key={user.id_usuario} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
