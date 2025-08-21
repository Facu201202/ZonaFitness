import { useSearchParams } from 'next/navigation'
import { ClockIcon } from "@heroicons/react/24/outline"
import Image from 'next/image'
import { formatCurrency, translateCategory } from '@/src/utils'
import { Categoria, PurchaseData } from '@/src/types'
import { useState } from 'react'
import Error from '@/components/Error'
import { useProductStore } from '@/src/stores/productStore'
import { useUserStore } from '@/src/stores/userStore'

type PurchaseSummaryProps = {
    image: string,
    productName: string,
    category: string,
    price: number,
    publicationId: number
}

export default function PurchaseSummary({ image, productName, category, price, publicationId }: PurchaseSummaryProps) {
    const [error, setError] = useState(false)
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())
    const size = params.get("ModalTalle")
    const quantity = Number(params.get("cantidad")) || 1
    const deliveryMethod = params.get("entrega")
    const paymentMethod = params.get("pago")
    const setCurrentTotalPurchase = useProductStore(state => state.setCurrentTotalPurchase)
    const setCurrentPurchase = useProductStore(state => state.setCurrentPurchase)
    const setActiveModal = useProductStore(state => state.setActiveModal)
    const userId = useUserStore(state => state.userId)
    const total = (price * quantity) + 3000 + 1100
    setCurrentTotalPurchase(total)
    
    const handlePurchaseButton = async() => {
        if (!deliveryMethod || !paymentMethod) {
            setError(true)
            return
        }
        const purchaseData: PurchaseData = {
            cantidad: quantity,
            precio_total: total,
            talle: size!,
            id_publicacion: publicationId,
            id_usuario: +userId!,
            entrega: deliveryMethod,
            pago: paymentMethod
        }

        setCurrentPurchase(purchaseData)
        setActiveModal("SuccessPurchase")

    }

    return (
        <div className='shadow border border-gray-300 rounded-2xl p-4'>
            <p className='font-medium text-lg mb-3'>Resumen de la compra</p>
            <div className='border-b border-gray-300 py-5 flex flex-col sm:flex-row sm:justify-between gap-3'>
                <div className='flex gap-3'>
                    <Image
                        src={`/products/${translateCategory(category as Categoria)}/` + image}
                        width={50}
                        height={50}
                        alt='imangen del producto'
                        className="object-contain rounded"
                    />
                    <div className='flex-1'>
                        <p className='font-medium'>{productName}</p>
                        <p className='text-gray-500'>Talle: {size}</p>
                        <p className='text-gray-500'>Cantidad: {quantity}</p>
                    </div>
                </div>
                <p className='font-medium text-lg'>{formatCurrency(price)}</p>
            </div>
            <div className='border-b border-gray-300 py-5 font-medium text-sm sm:text-base'>
                <div className='flex justify-between'>
                    <p>Subtotal: ({quantity})</p>
                    <p>{formatCurrency(price * quantity)}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Envío</p>
                    <p>{formatCurrency(3000)}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Impuestos</p>
                    <p>Incluidos</p>
                </div>

            </div>
            <div className='py-5 flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <p className='font-bold text-xl'>Total</p>
                    <p className='font-bold text-xl'>{formatCurrency(total)}</p>
                </div>
                {deliveryMethod === "home" && (
                    <div className='bg-blue-50 text-blue-600 p-3 rounded-lg flex gap-2 items-center font-semibold'>
                        <ClockIcon className='w-5 h-5' />
                        Entrega estimada: 1-3 días hábiles
                    </div>
                )}
                {error && (
                    <Error>Seleecione un método de pago y de envio</Error>
                )}

                <button
                    onClick={() => handlePurchaseButton()}
                    className="text-white bg-green-600 py-2 w-full rounded-lg text-center font-semibold hover:bg-green-700 hover:cursor-pointer"
                > Confirmar Compra
                </button>
                <p className='text-center text-gray-500 text-sm'>Al confirmar tu compra, aceptas nuestros términos y condiciones</p>
            </div>
        </div>
    )
}
