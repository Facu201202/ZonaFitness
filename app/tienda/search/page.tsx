"use client"
import { Product } from "@/src/types";
import ProductModal from "@/components/product/ProductModal";
import GridProduct from "@/components/product/GridProduct";
import SelectFilterProduct from "@/components/product/SelectFilterProduct";
import FilterOptions from "@/components/FilterOptions";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query"
import { createQueryFilter } from "@/src/utils";

export default function page() {
    const searchParams = useSearchParams()
    const productId = +searchParams.get('producto')!
    const searchedProduct = searchParams.get("searchProduct")
    const urlQueryFilter = createQueryFilter(searchParams)


    const fetchSearchProductos = async (): Promise<Product[]> => {
        const res = await fetch(`/tienda/search/api?${urlQueryFilter.toString()}`)
        if (!res.ok) throw new Error('Error al traer productos')
        return res.json()
    }


    const { data, isLoading } = useQuery({
        queryKey: ['SearchProductos', searchedProduct],
        queryFn: () => fetchSearchProductos(),
        staleTime: 0,
        gcTime: 0,
    });



    return (
        <div className="w-7xl m-auto py-5 flex gap-6">
            <div className=" basis-1/5">
                <p className="text-2xl font-bold mb-5">Filtros</p>
                <FilterOptions />
            </div>
            <div className="flex-1">
                <div className="flex justify-between mb-5">
                    <h3 className="text-2xl font-bold">Productos</h3>
                    <div className="flex gap-2 items-center">
                        <p className="text-sm text-gray-500">Ordenar por:</p>
                        <SelectFilterProduct />
                    </div>

                </div>
                {isLoading && <p className="text-center font-bold py-10">Cargando...</p>}
                {data && <GridProduct
                    products={data}
                />}
                {(!data && !isLoading) && <p className="text-center font-bold py-10">No hay productos disponibles</p>}
            </div>
            {
                (data && productId != null) ? (
                    <ProductModal productId={productId} products={data} />
                ) : null
            }

        </div>
    )
}
