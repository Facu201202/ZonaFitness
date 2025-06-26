"use client"
import { Product } from "@/src/types";
import ProductModal from "@/components/product/ProductModal";
import GridProduct from "@/components/product/GridProduct";
import SelectFilterProduct from "@/components/product/SelectFilterProduct";
import FilterOptions from "@/components/FilterOptions";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query"
import { createQueryFilter } from "@/src/utils";
import Pagination from "@/components/Pagination";


export default function page() {
    const searchParams = useSearchParams()
    const productId = +searchParams.get('producto')!
    const urlQueryFilter = createQueryFilter(searchParams)
    const params = new URLSearchParams(searchParams.toString())

    const fetchSearchProductos = async (): Promise<{products: Product[], countProducts: number}> => {
        const res = await fetch(`/tienda/search/api?${urlQueryFilter.toString()}`)
        if (!res.ok) throw new Error('Error al traer productos')
        return res.json()
    }

    const { data, isLoading } = useQuery({
        queryKey: ['SearchProductos', urlQueryFilter.toString()],
        queryFn: () => fetchSearchProductos(),
        staleTime: 0,
        gcTime: 0,
    });

    const totalPages = data && Math.ceil(data.countProducts / 9)
    const page = Number(searchParams.get("page")) || 1

    return (
        <div className="lg:w-7xl m-auto py-5 flex flex-col lg:flex-row gap-6 px-3 lg:px-0">
            <div className="lg:basis-1/5">
                <p className="text-2xl font-bold mb-5">Filtros</p>
                <FilterOptions />
            </div>
            <div className="lg:flex-1 ">
                <div className="flex flex-col lg:flex-row gap-3 lg:justify-between mb-5">
                    <h3 className="text-2xl font-bold">Productos</h3>
                    <div className="flex gap-2 items-center">
                        <p className="text-sm text-gray-500">Ordenar por:</p>
                        <SelectFilterProduct />
                    </div>

                </div>
                {isLoading && <p className="text-center font-bold py-10">Cargando...</p>}
                {(data && totalPages) &&
                    <>
                        <GridProduct
                            products={data.products}
                        />
                        <Pagination totalPages={totalPages} page={page} params={params}/>
                    </>}
                {(!data && !isLoading) && <p className="text-center font-bold py-10">No hay productos disponibles</p>}

            </div>
            {
                (data && productId != null) ? (
                    <ProductModal productId={productId} products={data.products} />
                ) : null
            }
        </div>
    )
}
