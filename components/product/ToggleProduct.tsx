import { XMarkIcon } from "@heroicons/react/24/solid"
import { Product } from '@/src/types'
import ProductInfo from './ProductInfo'
import ProductComments from './ProductComments'
import RelatedProducts from './RelatedProducts'
import { useProductStore } from "@/src/stores/productStore"
import PurchaseSummary from "./purchase/PurchaseSummary"
import DeliveryMethod from "./purchase/DeliveryMethod"
import PaymentMethod from "./purchase/PaymentMethod"
import SuccessPurchase from "./successPurchase/SuccessPurchase"

type ToggleProductProps = {
    product: Product,
    products: Product[],
    deleteParamsFunction: () => void
}

export default function ToggleProduct({ product, products, deleteParamsFunction }: ToggleProductProps) {
    const activeModal = useProductStore(state => state.activeModal)
    return (
        <div>
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
                        <div>{<PurchaseSummary image={product.producto.foto} productName={product.producto.nombre} price={product.precio} category={product.producto.categoria.nombre} publicationId={product.id_publicacion} />}</div>
                    </div>
                </div>
            )}
            {activeModal === "SuccessPurchase" && (
                <div className="lg:p-4">
                    <SuccessPurchase deleteParamsFunction={deleteParamsFunction}/>
                </div>
            )}
        </div>
    )
}
