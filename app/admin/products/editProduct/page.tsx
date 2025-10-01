"use client"
import AdminSpinner from '@/components/admin/AdminSpinner'
import EditProductForm from '@/components/admin/products/EditProductForm'
import { ProductDataEdit } from '@/src/types'
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"

export default function () {
    const searchParams = useSearchParams()
    const productId = searchParams.get('product')
    if (!productId) window.location.href = "/admin/products"

    const { data, isLoading, isError } = useQuery({
        queryKey: ["Product", productId],
        queryFn: async (): Promise<ProductDataEdit> => {
            const res = await fetch(`/admin/products/editProduct/api/${productId}`)
            if (!res.ok) throw new Error("Error al traer el producto")
            return res.json()
        },
        enabled: productId ? true : false
    })
    return (
        <div className='w-full bg-gray-200'>
            <div className="p-6 border-b border-gray-300 bg-white">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Editar Producto</h2>
                    <p className="text-gray-800">Realice los cambios necesarios y confirmelos</p>
                </div>
            </div>
            {isLoading && <AdminSpinner />}
            {isError && <p className="text-center font-semibold text-gray-800 p-3">Error al traer el producto</p>}
            {data && <EditProductForm product={data} />}
            
        </div>
    )
}
