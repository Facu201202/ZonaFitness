"use client"

import ProductCard from "@/components/product/ProductCard"
import CartProductCard from "@/components/product/shoppingCart/CartProductCard"
import Spinner from "@/components/Spinner"
import { useUserStore } from "@/src/stores/userStore"
import { CartFullItem, CartItem } from "@/src/types"
import { formatCurrency } from "@/src/utils"
import { useQuery } from "@tanstack/react-query"

export default function page() {
    const userId = useUserStore(state => state.userId)
    let total = 0
    const localStorageCart = localStorage.getItem(`cart_${userId}`)
    const parsedlocalStorageCart: CartItem[] = localStorageCart ? JSON.parse(localStorageCart) : []

    const cartFecth = async (): Promise<CartFullItem[]> => {
        const res = await fetch(`/tienda/carrito/api/${localStorageCart}`)
        if (!res.ok) throw new Error("Error al traer los prodcuctos del carrito")
        return res.json()
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ['cart', userId],
        queryFn: () => cartFecth(),
        enabled: localStorageCart !== null
    })

    if(data) {
        data.forEach(product => {
            total += (product.precio * product.cantidadUsuario)
        })
    }

    return (
        <div className="py-5 max-w-5xl min-h-screen mx-auto">
            {isLoading && (<Spinner />)}
            {isError && <p className="text-center font-semibold">Error al traer los productos del carrito.</p>}
            {data && data.length === 0 && <p className="text-center font-semibold">No hay productos en el carrito</p>}
            {data && (
                <div className="flex gap-2">
                    <div className="flex-1 p-3">
                        {data.map(product => (
                            <CartProductCard product={product} />
                        ))}
                    </div>
                    <div className="text-center p-3 font-semibold text-2xl">
                        <p>Total: {formatCurrency(total)}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
