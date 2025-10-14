import { PublicationAdmin } from "@/src/types";
import { findUrlPath, formatCurrency, formatFeatures } from "@/src/utils";
import { PencilSquareIcon, PowerIcon, TagIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"
import Image from "next/image";
import { usePathname, useSearchParams, redirect, useRouter } from "next/navigation";
import { useAdminStore } from "@/src/stores/adminStore";


type TableRowProps = {
    i: number,
    publications: PublicationAdmin
}

export default function TableRow({ i, publications }: TableRowProps) {
    const setfeacturesPublication = useAdminStore(state => state.setfeacturesPublication)
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const fullUrl = pathname + '?' + searchParams.toString();
    const feacturesParsed = formatFeatures(publications.caracteristicas)

    const handleStateProductModal = (active: boolean) => {
        const params = new URLSearchParams(searchParams.toString())
        active ? params.set("state", `${publications.id_producto}_${active}`) : params.set("state", `${publications.id_producto}_${active}`)
        router.push(`?${params.toString()}`, { scroll: false })
    }

    const handleFeacturesModal = () => {
        setfeacturesPublication(feacturesParsed)
        const params = new URLSearchParams(searchParams.toString())
        params.set("feactures", `${true}`)
        router.push(`?${params.toString()}`, { scroll: false })
    }

    return (
        <>
            <tr key={i} className={`px-4 py-4 ${(i % 2 === 0) ? "bg-white" : "bg-gray-100"}`}>
                <td className={`px-2 py-4`}>
                    <p className={`py-1 mx-auto px-3 rounded-lg text-sm font-semibold w-fit ${publications.activa ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-600"}`}>
                        {publications.activa ? "Activa" : "Pausada"}
                    </p>
                </td>
                <td
                    onClick={() => window.open(`/admin/products?related=${publications.id_producto}`, '_blank')}
                    className="px-2 py-4 font-medium flex gap-2 items-center hover:cursor-pointer hover:border">
                    {<TagIcon className="w-5 h-5" />} {publications.producto.nombre}
                </td>
                <td className="px-2 py-4 font-bold">{formatCurrency(publications.precio)}</td>
                <td className="px-2 py-4">
                    {publications.descuento > 0 ? (
                        <div className="px-2 text-red-700 font-semibold bg-red-100 w-fit rounded-lg border border-red-300">
                            -{publications.descuento}%
                        </div>
                    ) : (
                        <p>Sin descuento</p>
                    )}

                </td>
                <td className="px-2 py-4 font-bold">
                    <button
                        className={`px-2 py-1 font-semibold text-sm border rounded-lg border-gray-200 shadow hover:cursor-pointer hover:bg-gray-100`}
                        onClick={() => handleFeacturesModal()}
                    >
                        Características
                    </button>
                </td>
                <td className="px-2 py-4">{new Date(publications.fecha).toLocaleDateString("es-AR")}</td>
                <td className="px-2 py-4 font-bold flex gap-2 items-center">{<ArrowTrendingUpIcon className="w-5 h-5 text-green-600" />}{publications.ventas.length}</td>
                <td className="px-2 py-4">
                    <div className="flex gap-2">
                        <button
                            className="p-1 border rounded-lg border-gray-200 shadow hover:cursor-pointer hover:bg-gray-100"
                            onClick={() => window.location.href = `/admin/products/editProduct?product=${publications.id_publicacion}`}
                        >
                            <PencilSquareIcon className="w-5 h-5" />
                        </button>
                        {publications.activa ? (
                            <button
                                title="Desactivar Producto"
                                className="p-1 border rounded-lg border-gray-200 shadow text-orange-400 hover:text-white hover:cursor-pointer hover:bg-orange-500 "
                                onClick={() => handleStateProductModal(true)}
                            >
                                <PowerIcon className="w-5 h-5 " />
                            </button>
                        ) : (
                            <button
                                title="Activar Producto"
                                className="p-1 border rounded-lg border-gray-200 shadow hover:cursor-pointer hover:bg-emerald-600 text-emerald-500 hover:text-white"
                                onClick={() => handleStateProductModal(false)}
                            >
                                <PowerIcon className="w-5 h-5" />
                            </button>
                        )}

                    </div>
                </td>
            </tr>

        </>
    )
}
