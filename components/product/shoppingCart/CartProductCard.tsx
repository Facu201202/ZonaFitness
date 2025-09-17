import { CartFullItem, Categoria } from '@/src/types'
import { formatCurrency, translateCategory } from '@/src/utils'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function CartProductCard({ product }: { product: CartFullItem }) {
    const searchParams = useSearchParams()
        const router = useRouter()
        const params = new URLSearchParams(searchParams.toString())
     const [quantity, setQuantity] = useState(Number(params.get("cantidad")) || 1)
    const handleQuantityIncrease = () => {
        const quantityValue = (quantity + 1) > 10 ? 10 : quantity + 1
        params.set("cantidad", quantityValue.toString())
        params.delete("ModalTalle")
        router.replace(`?${params.toString()}`, { scroll: false })
        setQuantity(quantityValue)
    }

    const handleQuantityDecrease = () => {
        const quantityValue = (quantity - 1) < 1 ? 1 : quantity - 1
        params.set("cantidad", quantityValue.toString())
        params.delete("ModalTalle")
        router.replace(`?${params.toString()}`, { scroll: false })
        setQuantity(quantityValue)
    }
    return (
        <div className="bg-white px-5 py-8 rounded-2xl shadow flex flex-col gap-4">
            <div className="flex justify-between">
                <div>
                    <p className="text-xl font-semibold uppercase">comprobante</p>
                    <p className="text-gray-600">Fecha</p>
                </div>
                <div className="text-right">
                    <p className="text-xl font-semibold">{formatCurrency(product.precio * product.cantidadUsuario)}</p>
                </div>
            </div>
            <div className="md:flex md:justify-between bg-gray-100 p-4 items-center">
                <div className="flex gap-2 items-center">
                    <div className="relative w-30 h-30">
                        <Image
                            src={`/products/${translateCategory(product.producto.categoria.nombre as Categoria)}/` + product.producto.foto}
                            alt={product.producto.nombre}
                            className="object-contain mx-auto"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>

                    <p className="font-semibold">{product.producto.nombre}</p>
                </div>
                <div className="flex gap-2">
                    <div className='inline-flex gap-2 items-center px-2 py-1 border border-gray-300 rounded '>
                        <p className='text-2xl px-2 hover:cursor-pointer select-none' onClick={() => handleQuantityDecrease()}>-</p>
                        <p className='text-2xl px-2 select-none'>{quantity}</p>
                        <p className='text-2xl px-2 hover:cursor-pointer select-none' onClick={() => handleQuantityIncrease()}>+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
