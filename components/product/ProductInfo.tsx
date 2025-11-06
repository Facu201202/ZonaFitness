import { CartItem, Product } from '@/src/types'
import { formatFeatures, formatCurrency, sizes, findUrlPath } from '@/src/utils'
import { useProductStore } from '@/src/stores/productStore'
import Image from 'next/image'
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from 'react'
import { CreditCardIcon, ShoppingCartIcon, TruckIcon, ClockIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline"
import SizesButton from '../SizesButton'
import { useUserStore } from '@/src/stores/userStore'
import FavoriteButton from './FavoriteButton'
import ReactStars from 'react-stars'

type ProductInfoProps = {
    product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const userId = useUserStore(state => state.userId)
    const userRol = useUserStore(state => state.userRol)
    const isAdmin = userRol === "admin"
    const searchParams = useSearchParams()
    const router = useRouter()
    const params = new URLSearchParams(searchParams.toString())
    const setActiveModal = useProductStore(state => state.setActiveModal)

    const [isSizeActive, setisSizeActive] = useState(false)
    const [quantity, setQuantity] = useState(Number(params.get("cantidad")) || 1)

    const category = product.producto.categoria.nombre as keyof typeof sizes
    const currentSizes = params.get("ModalTalle")
    const isCalificated = product.ventas && product.ventas.filter(star => star.opinion.length > 0 && star)
    const total = (product.ventas && isCalificated && isCalificated?.length > 0) ? isCalificated.reduce((acc, star) => { return acc + star.opinion[0].calificacion }, 0) : 0
    const opinionCant = isCalificated ? isCalificated.length : 0

    if (currentSizes && !sizes[category].includes(currentSizes)) {
        params.delete("ModalTalle")
        router.replace(`?${params.toString()}`)
    }



    useEffect(() => {
        setQuantity(Number(params.get("cantidad")) || 1)
    }, [searchParams])


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

    const handlePurchaseButton = () => {
        if (!userId) window.location.href = "/cuenta"
        if (!params.get("ModalTalle")) {
            setisSizeActive(true)
            return
        }
        setActiveModal("Purchase")
    }

    const handleShoppingCartButton = () => {
        if (!userId) window.location.href = "/cuenta"
        const talle = params.get("ModalTalle")
        if (!talle) {
            setisSizeActive(true)
            return
        }
        const localStorageCart = localStorage.getItem(`cart_${userId}`)
        const itemInfo: CartItem = {
            id_publicacion: product.id_publicacion,
            cantidad: quantity,
            talle: talle
        }
        const parsedlocalStorageCart: CartItem[] = localStorageCart ? JSON.parse(localStorageCart) : []
        const index = parsedlocalStorageCart.findIndex(
            (item) => item.id_publicacion === itemInfo.id_publicacion && item.talle === itemInfo.talle
        )
        if (index !== -1) {
            parsedlocalStorageCart[index].cantidad += quantity
            if (parsedlocalStorageCart[index].cantidad > 5) parsedlocalStorageCart[index].cantidad = 5
        } else {
            parsedlocalStorageCart.push(itemInfo)
        }

        localStorage.setItem(`cart_${userId}`, JSON.stringify(parsedlocalStorageCart))
    }

    const feactures = formatFeatures(product.caracteristicas)
    return (
        <div className='lg:flex pb-15'>
            <div className='lg:w-1/2 lg:px-8'>
                <div className='relative w-auto h-[500px] lg:mb-12'>
                    <Image
                        src={findUrlPath(product.producto.foto, product.producto.categoria.nombre)}
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
                    <FavoriteButton product={product} iscarrusel={false} />
                </div>
                <div className="flex gap-2 items-center">
                    <ReactStars
                        count={5}
                        value={opinionCant > 0 ? total / opinionCant : 0}
                        size={25}
                        half={true}
                        color2={"#ffd700"}
                        edit={false}
                    />
                    <p className="lg:text-xl text-gray-600">({product.ventas ? product.ventas.length : 0})</p>
                </div>
                <div>
                    {product.descuento > 0 && (
                        <p className='font-medium text-gray-500 text-lg line-through'>{formatCurrency(product.precio)}</p>
                    )}
                    <div className='flex gap-2'>
                        <p className='font-bold text-3xl lg:text-4xl'>{formatCurrency(product.precio - ((product.descuento / 100) * product.precio))}</p>
                        {product.descuento > 0 && (
                            <p className='text-green-600 font-semibold text-xl'>{product.descuento}% OFF</p>
                        )}
                    </div>

                    <p className='text-gray-600 font-semibold text-sm lg:text-base'>Incluye impuestos. Envío calculado al finalizar la compra</p>
                </div>
                <div>
                    <p className='font-semibold mb-2 text-xl'>Cantidad:</p>
                    <div className='inline-flex gap-2 items-center px-2 py-1 border border-gray-300 rounded '>
                        <p className='text-2xl px-2 hover:cursor-pointer select-none' onClick={() => handleQuantityDecrease()}>-</p>
                        <p className='text-2xl px-2 select-none'>{quantity}</p>
                        <p className='text-2xl px-2 hover:cursor-pointer select-none' onClick={() => handleQuantityIncrease()}>+</p>
                    </div>
                </div>
                <div>
                    <p className='font-semibold mb-2 text-xl'>Talles disponibles: </p>
                    <p className={`font-semibold text-amber-600 ${isSizeActive ? "inline" : "hidden"}`}>Seleccione un talle</p>
                    <div className='flex flex-wrap gap-2 mt-2'>
                        {product.producto.stocks.map((stock) => (

                            <SizesButton key={stock.talle.talle} size={stock.talle.talle} stock={stock.cantidad} currentQuantity={quantity} />
                        ))}
                    </div>
                </div>
                <div>
                    <p className='font-semibold mb-2 text-xl'>Características principales: </p>

                    {Object.entries(feactures).map(([key, value]) => (
                        <div className='flex items-center' key={key}>
                            <p className='text-[#2D5DA2] bg-[#EAEEF6] rounded-2xl p-1 mr-2'>✓</p>
                            <p className='font-semibold w-1/2 my-2 mr-4 text-sm lg:text-base' key={key}>{key}:</p>
                            <p className='text-sm lg:text-base'>{value}</p>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-2'>
                    <button
                        onClick={() => handleShoppingCartButton()}
                        disabled={true}
                        className=" bg-[#2D5DA2] text-white px-4 py-3 rounded text-center font-semibold hover:bg-[#2d52a2] hover:cursor-pointer flex justify-center items-center gap-3 pointer-events-none opacity-40 line-through"
                    >{<ShoppingCartIcon className='h-5 w-5' />}  Añadir al carrito
                    </button>
                    <button
                        disabled={isAdmin}
                        className={`border border-[#2D5DA2] text-[#2D5DA2] px-4 py-3 rounded text-center font-semibold hover:bg-[#2D5DA2] hover:text-white flex justify-center items-center gap-3 ${isAdmin && "pointer-events-none opacity-40 line-through"}`}
                        onClick={() => handlePurchaseButton()}
                    >{<CreditCardIcon className='h-5 w-5' />} Comprar ahora
                    </button>
                </div>

            </div>

        </div>
    )
}
