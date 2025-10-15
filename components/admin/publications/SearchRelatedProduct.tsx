"use client"
import { useQuery } from "@tanstack/react-query"
import { MagnifyingGlassIcon, EyeIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { useAdminStore } from "@/src/stores/adminStore"
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form"
import { NewPublicationFormData } from "@/src/types"
import ErrorMessage from "@/components/ErrorMessage"

type SearchRelatedProductProps = {
    setValue: UseFormSetValue<NewPublicationFormData>,
    register: UseFormRegister<NewPublicationFormData>,
    errors: FieldErrors<NewPublicationFormData>
}

export default function SearchRelatedProduct({ setValue, register, errors }: SearchRelatedProductProps) {
    const setproductLinkPublication = useAdminStore(state => state.setproductLinkPublication)
    const productLinkPublication = useAdminStore(state => state.productLinkPublication)
    const [searchValue, setSearchValue] = useState("")
    const [queryValue, setQueryValue] = useState("")
    const { data, isLoading, isError } = useQuery({
        queryKey: ["relatedProduct", queryValue],
        queryFn: async (): Promise<{ id_producto: number, nombre: string, precio: number, categoria: { nombre: string } }[]> => {
            const res = await fetch(`/admin/publications/newPublication/api/getProducts?search=${searchValue || ""}`)
            if (!res.ok) throw new Error("Error al buscar productos")
            return res.json()
        },
        enabled: !!queryValue,
    })

    const handleClick = (name: string, category: string, id_product: number, precio: number) => {
        setproductLinkPublication({ name, category, id_product, precio })
        setValue("price", precio + (precio * 0.5))
        setValue("productId", id_product)
    }

    return (
        <div className="flex gap-3">
            <div className="flex flex-col gap-2 font-semibold w-1/3">
                <label>Buscar Producto</label>
                <div className="relative flex-1 max-h-fit">
                    <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 hover:cursor-pointer"
                        onClick={() => setQueryValue(searchValue)} />
                    <input
                        className="border border-gray-300 rounded-lg p-2 focus:border-[#275DA2] w-full"
                        placeholder="Buscar Productos..."
                        defaultValue={""}
                        type="text"
                        id="search"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <input id="productId" type="hidden"{...register("productId", {
                    required: "El producto es obligatorio"
                })} />
                {errors.productId && (
                    <ErrorMessage>{errors.productId.message?.toString()}</ErrorMessage>
                )}
            </div>
            <div className="shadow border border-gray-300 rounded-lg p-3 flex-1 h-[130px] overflow-y-scroll">
                {isLoading && <p className="text-gray-500 font-semibold text-center">Cargando...</p>}
                {isError && <p className="text-red-500 font-semibold text-center">Error al buscar productos</p>}
                {data && data.length === 0 && <p className="text-gray-500 font-semibold text-center">No se encontraron productos</p>}
                {data && data.length > 0 && (
                    data.map(product => (
                        <div
                            className={`flex gap-3 items-center justify-between border border-gray-200 p-2 hover:border-gray-600 hover:cursor-pointer 
                                ${(productLinkPublication && productLinkPublication.id_product === product.id_producto) && "bg-green-200"}`}
                            key={product.id_producto}
                            onClick={() => handleClick(product.nombre, product.categoria.nombre, product.id_producto, product.precio)}
                        >
                            <p className="font-semibold">{product.nombre}</p>
                            <div className="rounded-full p-1 bg-[#2D5DA2] text-white hover:bg-[#1b3a6d]" onClick={() => window.open(`/admin/products?related=${product.id_producto}`, '_blank')}>
                                <EyeIcon className="w-4 h-4 hover:cursor-pointer" />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
