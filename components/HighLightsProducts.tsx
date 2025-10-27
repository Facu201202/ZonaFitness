import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Product } from '@/src/types'
import { useQuery } from '@tanstack/react-query'
import CardCarousel from './product/CardCarousel'

export default function HighLightsProducts() {

    const { data, isLoading, isError } = useQuery({
        queryKey: ["highlights_products"],
        queryFn: async (): Promise<Product[]> => {
            const res = await fetch("/tienda/inicio/api/products/highlights")
            if (!res.ok) throw new Error("Error al mostrar los productos destacados")
            return res.json()
        }
    })

    return (
        <div className="pt-12 pb-7 my-5">
            <div className="flex justify-between px-4 lg:px-10">
                <h2 className="text-xl lg:text-2xl font-bold">Productos más vendidos</h2>
                <Link
                    href={"/tienda/search?filter=mas_vendido"}
                    className="text-[#2D5DA2] flex items-center gap-1"
                >Ver todos
                    <ArrowRightIcon
                        className="w-4 h-4"
                    />
                </Link>
            </div>
            <div className="px-6 lg:px-32 py-6  " >
                {isLoading && <p className="text-center font-bold py-10">Cargando...</p>}
                {isError && <p className="text-center font-bold py-10">Productos no disponibles en este momento</p>}
                {data && <CardCarousel
                    products={data}
                />}
                {(!data && !isLoading) && <p className="text-center font-bold py-10">No hay productos disponibles</p>}
            </div>
        </div>
    )
}
