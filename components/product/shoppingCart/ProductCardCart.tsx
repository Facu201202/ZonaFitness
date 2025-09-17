import React from 'react'

export default function ProductCardCart() {
    return (
        <div className="bg-white px-5 py-8 rounded-2xl shadow flex flex-col gap-4">
            <div className="flex justify-between">
                <div>
                    <p className="text-xl font-semibold uppercase">{userPurchase.n_comprobante}</p>
                    <p className="text-gray-600">{new Date(userPurchase.fecha).toLocaleDateString("es-AR")}</p>
                </div>
                <div className="text-right">
                    <p className="text-xl font-semibold">{formatCurrency(userPurchase.precio_total)}</p>
                    <p className={`${bgState} ${textState} font-medium py-1 px-3 rounded-xl text-sm`}>{userPurchase.estado}</p>
                </div>
            </div>
            <div className="md:flex md:justify-between bg-gray-100 p-4 items-center">
                <div className="flex gap-2 items-center">
                    <div className="relative w-30 h-30">
                        <Image
                            src={`/products/${translateCategory(userPurchase.publicacion.producto.categoria.nombre as Categoria)}/` + userPurchase.publicacion.producto.foto}
                            alt={userPurchase.publicacion.producto.nombre}
                            className="object-contain mx-auto"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>

                    <p className="font-semibold">{userPurchase.publicacion.producto.nombre}</p>
                </div>
                <div className="flex gap-2">
                    {commentExist && (
                        <button
                            onClick={() => handleClick()}
                            className={`mt-3 md:mt-0 h-fit font-semibold shadow border  rounded-xl p-2 hover:cursor-pointer border-gray-200 bg-white hover:bg-gray-50`}>
                            <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
                        </button>
                    )
                    }
                    <button
                        onClick={() => handleClick()}
                        className={`flex mt-3 md:mt-0 gap-2 h-fit  font-semibold shadow border  rounded-xl p-2 hover:cursor-pointer border-gray-200 ${userPurchase.estado === EstadoEnvio.ENTREGADO ? "bg-white hover:bg-gray-50" : "select-none pointer-events-none text-gray-500"}  ${commentExist && "select-none pointer-events-none text-gray-500"}`}>
                        <StarIcon className="h-5 w-5" />
                        Reseña
                    </button>
                </div>
            </div>
        </div>
    )
}
