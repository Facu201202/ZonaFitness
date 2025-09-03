import { Product } from "@/src/types"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation";
import CardCarousel from "../product/CardCarousel"
import ProductModal from "../product/ProductModal"

type ProfileFavoritesProps = {
    userId: number
}

export default function ProfileFavorites({userId}: ProfileFavoritesProps) {
    const searchParams = useSearchParams()
    const productId = +searchParams.get('producto')!
    const fetchProductos = async (): Promise<Product[]> => {

        const res = await fetch(`/tienda/perfil/api/userFavorites/${userId}`)
        if (!res.ok) throw new Error('Error al traer productos')
        return res.json()
    }
    const { data, isLoading } = useQuery({
        queryKey: ["favorites_products", userId],
        queryFn: fetchProductos
    })
    return (
        <>
            <h3 className="text-3xl font-medium">Productos Favoritos</h3>
            <div className="py-6 bg-white px-5 rounded-2xl" >

                {isLoading && <p className="text-center font-bold py-10">Cargando...</p>}
                {data && <CardCarousel
                    products={data}
                    isProfile={true}
                />}
                {(!data && !isLoading) && <p className="text-center font-bold py-10">No hay productos disponibles</p>}

            </div>
            {
                (data && productId != null) ? (
                    <ProductModal productId={productId} products={data} />
                ) : null
            }
        </>
    )
}
