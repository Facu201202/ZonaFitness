import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { Product } from '@/src/types'
import ToggleProduct from './ToggleProduct'
import { useProductStore } from "@/src/stores/productStore"

type ProductModalProps = {
  productId: number,
  products: Product[]
}

export default function ProductModal({ productId, products }: ProductModalProps) {
  const searchParams = useSearchParams();
  const router = useRouter()
  let productExist = productId !== 0 ? true : false

  const setActiveModal = useProductStore(state => state.setActiveModal)

  const fetchProducto = async (id: number): Promise<Product> => {
    const res = await fetch(`/tienda/inicio/api/${id}`)
    if (!res.ok) throw new Error('Error al traer productos')
    return res.json()
  }

  const handleCloseModal = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete("producto")
    params.delete("cantidad")
    params.delete("ModalTalle")
    router.replace(`?${params.toString()}`, { scroll: false })
    setTimeout(() => {
      setActiveModal("Product")
    }, 2000);

  }

  const { data } = useQuery({
    queryKey: ["producto", productId],
    queryFn: () => fetchProducto(productId),
    enabled: productExist
  })


  return (
    <Transition show={productExist} as={Fragment}>
      <Dialog onClose={() => handleCloseModal()} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-6xl h-full space-y-4 border bg-white p-4 overflow-y-auto">
            {data ?
              (
                <ToggleProduct product={data} products={products} deleteParamsFunction={handleCloseModal} />
              ) : (<p className='font-bold text-center'>Cargando...</p>)
            }
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  )
}