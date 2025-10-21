"use client"
import AdminSpinner from '@/components/admin/AdminSpinner'
import EditProductForm from '@/components/admin/products/EditProductForm'
import EditPublicationForm from '@/components/admin/publications/EditPublicationForm'
import { ProductDataEdit } from '@/src/types'
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"

export default function () {
    const searchParams = useSearchParams()
    const publicationId = searchParams.get('publication')
    if (!publicationId) window.location.href = "/admin/publications"

    const { data, isLoading, isError } = useQuery({
        queryKey: ["Publication", publicationId],
        queryFn: async (): Promise<any> => {
            const res = await fetch(`/admin/publications/editPublication/api/${publicationId}`)
            if (!res.ok) throw new Error("Error al traer la publicación")
            return res.json()
        },
        enabled: publicationId ? true : false
    })
    return (
        <div className='w-full bg-gray-200'>
            <div className="p-6 border-b border-gray-300 bg-white">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Editar Publicación</h2>
                    <p className="text-gray-800">Realice los cambios necesarios y confirmelos</p>
                </div>

            </div>
            {isLoading && <AdminSpinner />}
            {isError && <p className="text-center font-semibold text-gray-800 p-3">Error al traer la publicación</p>}
            {data && <EditPublicationForm publication={data} />}

        </div>
    )
}
