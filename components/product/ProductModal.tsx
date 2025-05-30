import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { Product } from '@/src/types'
import ProductInfo from './ProductInfo'
import ProductComments from './ProductComments'
import RelatedProducts from './RelatedProducts'
import { XMarkIcon } from "@heroicons/react/24/solid"


type ProductModalProps = {
  productId: number,
  products: Product[]
}

export default function ProductModal({ productId, products }: ProductModalProps) {
  const pathname = usePathname()
  const router = useRouter()
  let productExist = productId ? true : false

  const fetchProducto = async (id: number): Promise<Product> => {
    const res = await fetch(`/tienda/inicio/api/${id}`)
    if (!res.ok) throw new Error('Error al traer productos')
    return res.json()
  }

  const { data } = useQuery({
    queryKey: ["producto", productId],
    queryFn: () => fetchProducto(productId)
  })


  return (
    <Transition show={productExist} as={Fragment}>
      <Dialog onClose={() => router.replace(`${pathname}`, { scroll: false })} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-6xl h-full space-y-4 border bg-white p-4 overflow-y-auto">
            {data ?
              (
                <div>
                  <div className='flex justify-end mb-5'>
                    <XMarkIcon className='w-5 h-5 hover:cursor-pointer' onClick={() => router.replace(`${pathname}`, { scroll: false })} />
                  </div>
                  <div className='lg:p-3'>
                    <ProductInfo product={data} pathname={pathname} />
                    <ProductComments />
                    <RelatedProducts products={products} />
                  </div>
                </div>
              ) : (<p className='font-bold text-center'>Cargando...</p>)
            }
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  )
}