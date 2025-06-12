"use client"
import { useQuery } from "@tanstack/react-query"
import GridProduct from "@/components/product/GridProduct";
import { Product } from "@/src/types";
import SelectFilterProduct from "@/components/product/SelectFilterProduct";
import FilterOptions from "@/components/FilterOptions";

export default function page() {
    const fetchSearchProductos = async (): Promise<Product[]> => {
        const res = await fetch('/tienda/search/api')
        if (!res.ok) throw new Error('Error al traer productos')
        return res.json()
    }
    const { data, isLoading } = useQuery({
        queryKey: ["SearchProductos"],
        queryFn: fetchSearchProductos
    })
    return (
        <div className="w-7xl m-auto py-5 flex gap-6">
            <div className=" basis-1/5">
                <p className="text-2xl font-bold mb-5">Filtros</p>
                <FilterOptions/>
            </div>
            <div className="flex-1">
                <div className="flex justify-between mb-5">
                    <h3 className="text-2xl font-bold">Productos</h3>
                    <div className="flex gap-2 items-center">
                        <p className="text-sm text-gray-500">Ordenar por:</p>
                        <SelectFilterProduct/>
                    </div>

                </div>
                {isLoading && <p className="text-center font-bold py-10">Cargando...</p>}
                {data && <GridProduct
                    products={data}
                />} 
                {(!data && !isLoading) && <p className="text-center font-bold py-10">No hay productos disponibles</p>}
            </div>

        </div>
    )
}
