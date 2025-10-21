import { FunnelIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { redirect, useSearchParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"


export default function FilterOptions() {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())
    const router = useRouter()
    const searchedValue = params.get("searchSales")
    const filter = params.get("filter")
    const { handleSubmit, register } = useForm<{ search: string }>()
    const searchProduct = (data: { search: string }) => {
        redirect(`/admin/sales?searchSales=${data.search}`)
    }

    const handleDeleteFilter = () => {
        params.delete("filter")
        router.push(`?${params.toString()}`)
    }

    return (
        <>
            <div className="p-3 border border-gray-300 rounded text-gray-800 shadow">
                <div className="flex gap-2 font-semibold items-center w-full mb-3">
                    <FunnelIcon className="w-5 h-5" />
                    <p className="text-lg">Filtros</p>
                    {filter && (
                        <div className="text-xs">
                            <div className="bg-gray-200 px-2 py-1 rounded shadow flex gap-2 items-center">
                                <p >
                                    {filter}
                                </p>
                                <p onClick={() => handleDeleteFilter()} className="hover:cursor-pointer">x</p>
                            </div>
                        </div>
                    )}

                </div>
                <div className="flex gap-2">
                    <form className="relative flex-1" onSubmit={handleSubmit(searchProduct)}>
                        <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 hover:cursor-pointer" onClick={handleSubmit(searchProduct)} />
                        <input
                            className="border border-gray-300 rounded-lg px-3 py-1 focus:border-[#275DA2] w-full"
                            placeholder="Buscar Productos..."
                            defaultValue={""}
                            type="text"
                            id="search"
                            {...register("search")}
                        />
                    </form>
                </div>
            </div>
            {searchedValue && (
                <div className="p-3 border border-gray-400 rounded flex gap-2 text-gray-800 text-sm items-center shadow bg-gray-200">
                    <MagnifyingGlassIcon className="w-6 h-6" />
                    <p><span className="font-semibold">Resultado: </span>"{searchedValue}" </p>
                </div>
            )}

        </>

    )
}
