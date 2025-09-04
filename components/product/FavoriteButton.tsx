import { HeartIcon } from "@heroicons/react/24/solid"
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline"
import { useState } from 'react'
import { Product } from "@/src/types"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useUserStore } from '@/src/stores/userStore'

type FavoriteButtonProps = {
    product: Product,
    iscarrusel: boolean
}

export default function FavoriteButton({ product, iscarrusel }: FavoriteButtonProps) {
    const userId = useUserStore(state => state.userId)
    const [isClicked, setIsClicked] = useState(product.favoritos[0]?.id_publicacion ? true : false)
    const QueryClient = useQueryClient()
    const mutate = useMutation({
        mutationKey: ["favoriteProduct", [product.id_publicacion, userId]],
        mutationFn: async () => {
            const data = {
                userId: +userId!,
                publicationId: product.id_publicacion
            }
            const res = await fetch('/tienda/inicio/api/favorites', {
                method: "POST",
                body: JSON.stringify(data)
            })

            return res.json()
        },
        onSuccess: (data) => { setIsClicked(data.added), QueryClient.invalidateQueries({ queryKey: ["favorites_products", userId] }), QueryClient.invalidateQueries({ queryKey: ["Producto", product.id_publicacion] }) },
        onSettled: () => {
            QueryClient.invalidateQueries({ queryKey: ["favoriteProduct", [product.id_publicacion, userId]] })
        }
    })
    const handleClick = () => {
        if (userId && product) {
            mutate.mutate()
        }
    }
    return (
        <>
            {isClicked ? (
                <HeartIcon
                    className={`${iscarrusel ? "absolute h-6 w-6 z-10 " : " h-8 w-8 lg:h-10 lg:w-10 "} right-1.5 hover:text-[#2D5DA2] hover:cursor-pointer ${!userId || mutate.isPending && "pointer-events-none"}`}
                    onClick={handleClick}
                />
            ) : (
                <HeartIconOutline
                    className={`${iscarrusel ? "absolute h-6 w-6 z-10 " : " h-8 w-8 lg:h-10 lg:w-10 "} right-1.5 hover:text-[#2D5DA2] hover:cursor-pointer ${!userId || mutate.isPending  && "pointer-events-none"}`}
                    onClick={handleClick} />
            )}
        </>
    )
}
