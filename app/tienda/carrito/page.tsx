"use client"

import { useUserStore } from "@/src/stores/userStore"
import { CartItem } from "@/src/types"
import { useQuery } from "@tanstack/react-query"

export default function page() {
    const userId = useUserStore(state => state.userId)
    const localStorageCart = localStorage.getItem(`cart_${userId}`)
    const parsedlocalStorageCart: CartItem[] = localStorageCart ? JSON.parse(localStorageCart) : []

    const cartFecth = async () => {
        const res = await fetch(`/tienda/carrito/api/${localStorageCart}`)
        if (!res.ok) throw new Error("Error al traer los prodcuctos del carrito")
        return res.json()
    }

    const {data, isLoading, isError} = useQuery({
        queryKey: ['cart', userId],
        queryFn: () => cartFecth(),
        enabled: localStorageCart !== null
    })

    console.log(data)

    return (
        <div>
            {parsedlocalStorageCart.length === 0 }
        </div>
    )
}
