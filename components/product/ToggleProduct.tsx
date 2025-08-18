import { XMarkIcon } from "@heroicons/react/24/solid"
import { Product } from '@/src/types'
import ProductInfo from './ProductInfo'
import ProductComments from './ProductComments'
import RelatedProducts from './RelatedProducts'

type ToggleProductProps = {
    product: Product,
    products: Product[],
    deleteParamsFunction: () => void
}

export default function ToggleProduct({ product, products, deleteParamsFunction }: ToggleProductProps) {

    return (
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
    )
}
