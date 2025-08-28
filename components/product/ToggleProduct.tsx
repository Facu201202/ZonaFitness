import { XMarkIcon } from "@heroicons/react/24/solid"
import { Product, PurchaseData, SuccessPurchaseData } from '@/src/types'
import ProductInfo from './ProductInfo'
import ProductComments from './ProductComments'
import RelatedProducts from './RelatedProducts'
import { useProductStore } from "@/src/stores/productStore"
import PurchaseSummary from "./purchase/PurchaseSummary"
import DeliveryMethod from "./purchase/DeliveryMethod"
import PaymentMethod from "./purchase/PaymentMethod"
import SuccessPurchase from "./successPurchase/SuccessPurchase"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import ErrorPurchase from "./successPurchase/ErrorPurchase"
import Spinner from "../Spinner"
import Receipt from "./successPurchase/Receipt"


type ToggleProductProps = {
    product: Product,
    products: Product[],
    deleteParamsFunction: () => void
}

export default function ToggleProduct({ product, products, deleteParamsFunction }: ToggleProductProps) {
    const activeModal = useProductStore(state => state.activeModal)
    const setsuccessPurchaseData = useProductStore(state => state.setsuccessPurchaseData)
    const [mutateState, setMutateState] = useState({
        error: false,
        success: false,
        loading: false
    })
    const { currentPurchase } = useProductStore(state => state)
    const fetchPurchase = async (data: PurchaseData) => {
        setMutateState({ ...mutateState, loading: true })
        setTimeout(() => {

        }, 3000)
        const res = await fetch("/tienda/inicio/api/purchase", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const response = await res.json()
        if (!res.ok) {
            console.log("error:", response)
            throw new Error(response.message || "Error en la compra")
        }
        setMutateState({ ...mutateState, loading: false })
        return response
    }

    const mutation = useMutation({
        mutationKey: ["purchase", [currentPurchase.id_publicacion, currentPurchase.id_usuario]],
        mutationFn: (data: PurchaseData) => fetchPurchase(data),
        onError: () => {
            setMutateState({ ...mutateState, error: true })
        },
        onSuccess: (data) => {
            setMutateState({ ...mutateState, success: true })
            setsuccessPurchaseData(data.venta)
        }
    })

    return (
        <div className="h-full">
            {activeModal === "Product" && (
                <div>
                    <div className='flex justify-end mb-5'>
                        <XMarkIcon className='w-5 h-5 hover:cursor-pointer' onClick={() => deleteParamsFunction()} />
                    </div>
                    <div className='lg:p-3'>
                        <ProductInfo product={product} />
                        <ProductComments />
                        <RelatedProducts products={products} />
                    </div>
                </div>
            )}
            {activeModal === "Purchase" && (
                <div className="lg:p-4">
                    <p className="text-2xl font-medium">Opciones de Compra</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-6">
                        <div className="flex flex-col gap-7">
                            <DeliveryMethod />
                            <PaymentMethod />
                        </div>
                        <div>{<PurchaseSummary mutate={mutation.mutate} image={product.producto.foto} productName={product.producto.nombre} price={product.precio} category={product.producto.categoria.nombre} publicationId={product.id_publicacion} />}</div>
                    </div>
                </div>
            )}

            {activeModal === "SuccessPurchase" && (
                <div className="lg:p-2 h-full">
                    {mutateState.loading && <Spinner />}
                    {mutateState.error && <ErrorPurchase deleteParamsFunction={deleteParamsFunction} />}
                    {mutateState.success &&
                        (<div>
                            <div className='flex justify-end'>
                                <XMarkIcon className='w-5 h-5 hover:cursor-pointer' onClick={() => deleteParamsFunction()} />
                            </div>
                            <SuccessPurchase />
                        </div>
                        )}
                </div>
            )}
        </div>
    )
}
