import { Product } from '@/src/types'
import { translateCategory, formatFeatures, formatCurrency } from '@/src/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HeartIcon } from "@heroicons/react/24/solid"
import { HeartIcon as HeartIconOutline, CreditCardIcon, ShoppingCartIcon, TruckIcon, ClockIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline"
import Qualification from '../Qualification'
import SizesButton from '../SizesButton'

type ProductInfoProps = {
    product: Product,
    pathname: string
}

export default function ProductInfo({ product, pathname }: ProductInfoProps) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const feactures = formatFeatures(product.caracteristicas)
    return (
        <div className='lg:flex pb-15'>
            <div className='lg:w-1/2 lg:px-8'>
                <div className='relative w-auto h-[500px] lg:mb-12'>
                    <Image
                        src={`/products/${translateCategory(product.producto.categoria.nombre)}/` + product.producto.foto}
                        fill
                        alt='imangen del producto'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain rounded"
                    />
                </div>
                <div className='border border-gray-300 rounded-2xl p-3 flex flex-col gap-2 mb-12'>
                    <h3 className='lg:text-xl font-semibold'>Información de envío:</h3>
                    <p className='flex gap-2 items-center text-sm lg:text-base'>{<TruckIcon className='h-3 w-3 lg:h-5 lg:w-5 text-green-700' />} Envio gratis en pedidos de $80</p>
                    <p className='flex gap-2 items-center text-sm lg:text-base'>{<ClockIcon className='h-3 w-3 lg:h-5 lg:w-5 text-[#2D5DA2]' />}Entrega en 2 a 5 días</p>
                    <p className='flex gap-2 items-center text-sm lg:text-base'>{<ArrowUturnLeftIcon className='h-3 w-3 lg:h-5 lg:w-5 text-orange-500' />}Devolución gratis en los primeros 15 días</p>
                </div>

            </div>
            <div className='lg:w-1/2 flex flex-col gap-6'>
                <div className='flex justify-between'>
                    <h2 className="text-3xl lg:text-4xl font-bold lg:w-4/5">{product.producto.nombre}</h2>
                    {isClicked ? (
                        <HeartIcon
                            className="h-8 w-8 lg:h-10 lg:w-10 right-1.5 hover:text-[#2D5DA2] hover:cursor-pointer"
                            onClick={handleClick}
                        />
                    ) : (
                        <HeartIconOutline
                            className="h-8 w-8 lg:h-10 lg:w-10 right-1.5 hover:text-[#2D5DA2] hover:cursor-pointer"
                            onClick={handleClick} />
                    )}
                </div>
                <div className="flex gap-2">
                    <Qualification stars={4} width='w-6' height='h-6' />
                    <p className="lg:text-xl text-gray-600">(127)</p>
                </div>
                <div>
                    <p className='font-bold text-3xl lg:text-4xl'>{formatCurrency(product.precio)}</p>
                    <p className='text-gray-600 font-semibold text-sm lg:text-base'>Incluye impuestos. Envío calculado al finalizar la compra</p>
                </div>
                <div>
                    <p className='font-semibold mb-2 text-xl'>Cantidad:</p>
                    <div className='inline-flex gap-2 items-center px-2 py-1 border border-gray-300 rounded '>
                        <p className='text-2xl px-2 hover:cursor-pointer'>-</p>
                        <p className='text-2xl px-2'>1</p>
                        <p className='text-2xl px-2 hover:cursor-pointer'>+</p>
                    </div>
                </div>
                <div>
                    <p className='font-semibold mb-2 text-xl'>Talles disponibles: </p>
                    <div className='flex flex-wrap gap-2'>
                        {product.producto.stocks.map((stock) => (
                            <SizesButton key={stock.talle.talle} size={stock.talle.talle} stock={stock.cantidad} />
                        ))}
                    </div>
                </div>
                <div>
                    <p className='font-semibold mb-2 text-xl'>Características principales: </p>
                    {Object.entries(feactures).map(([key, value]) => (
                        <div className='flex items-center'>
                            <p className='text-[#2D5DA2] bg-[#EAEEF6] rounded-2xl p-1 mr-2'>✓</p>
                            <p className='font-semibold w-1/2 my-2 mr-4 text-sm lg:text-base' key={key}>{key}:</p>
                            <p className='text-sm lg:text-base'>{value}</p>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-2'>
                    <Link
                        href={pathname}
                        scroll={false}
                        className=" bg-[#2D5DA2] text-white px-4 py-3 rounded text-center font-semibold hover:bg-[#2d52a2] flex justify-center items-center gap-3"
                    >{<ShoppingCartIcon className='h-5 w-5' />}  Añadir al carrito
                    </Link>
                    <Link
                        href={pathname}
                        scroll={false}
                        className=" border border-[#2D5DA2] text-[#2D5DA2] px-4 py-3 rounded text-center font-semibold hover:bg-[#2D5DA2] hover:text-white flex justify-center items-center gap-3"
                    >{<CreditCardIcon className='h-5 w-5' />} Comprar ahora
                    </Link>
                </div>

            </div>

        </div>
    )
}
