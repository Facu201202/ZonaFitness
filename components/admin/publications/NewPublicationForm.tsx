"use client"
import ErrorMessage from "@/components/ErrorMessage"
import { NewPublicationFormData } from "@/src/types"
import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { set, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import SearchRelatedProduct from "./SearchRelatedProduct"
import { useAdminStore } from "@/src/stores/adminStore"
import FeacturesForm from "./FeacturesForm"
import { ExclamationCircleIcon } from "@heroicons/react/24/outline"
import { formatCurrency } from "@/src/utils"


export default function NewPublicationForm() {
    const clearProductLinkPublication = useAdminStore(state => state.clearProductLinkPublication)
    const productLinkPublication = useAdminStore(state => state.productLinkPublication)
    const [iscustomPrice, setIsCustomPrice] = useState(false)
    useEffect(() => {
        clearProductLinkPublication()
    }, [clearProductLinkPublication])
    const { register, handleSubmit, control, formState: { errors }, setError, setValue } = useForm<NewPublicationFormData>({
        defaultValues: {
            features: [{ key: "", value: "" }]
        }
    })
    const [MutateLoading, setMutateLoading] = useState(false)

    const createPublication = async (data: NewPublicationFormData) => {
        setMutateLoading(true)
        toast.info("Subiendo...")
        const res = await fetch("/admin/publications/newPublication/api/createPublication", {
            method: "POST",
            body: JSON.stringify(data)
        })
        if (!res.ok) throw new Error("Error al crear la publicación")
        setMutateLoading(false)
        return res.json()
    }

    const mutation = useMutation({
        mutationKey: ["NewPublication"],
        mutationFn: (data: NewPublicationFormData) => createPublication(data),
        onError: () => {
            toast.error("Error al crear la publicación")
            setTimeout(() => {
                window.location.href = "/admin/products"
            }, 2500);
        },
        onSuccess: () => {
            toast.success("Publicación Creada correctamente")
            setTimeout(() => {
                window.location.href = "/admin/products"
            }, 2500);
        }
    })

    const info = (data: NewPublicationFormData) => {
        mutation.mutate(data)
    }

    const handleCustomPrice = () => {
        if (productLinkPublication) {
            setIsCustomPrice(!iscustomPrice)
        }
    }

    return (
        <div className='py-10'>
            <form className="mx-auto max-w-3xl border border-gray-200 bg-white px-3 py-6 shadow flex flex-col gap-2 space-y-3" onSubmit={handleSubmit(info)}>
                <SearchRelatedProduct setValue={setValue} register={register} errors={errors}/>
                {productLinkPublication && (
                    <div className="flex flex-col gap-2 font-semibold">
                        <label htmlFor="price">Producto Relacionado</label>
                        <div className="flex justify-between border border-gray-300 p-3 shadow rounded-lg">
                            <p>{productLinkPublication.name}</p>
                            <p className="px-2 py-1 text-white text-xs font-semibold bg-gray-500 w-fit rounded">{productLinkPublication.category}</p>
                        </div>

                    </div>
                )}
                <FeacturesForm register={register} errors={errors} control={control} />
                <div className="space-y-3">
                    <p className="font-semibold">Precio</p>
                    <div className="flex gap-2 border border-blue-400 p-3 bg-blue-50 rounded-lg">
                        <ExclamationCircleIcon className="w-7 h-7 text-blue-600" />
                        <div>
                            <p
                                className="font-semibold text-blue-900"
                            >
                                Precio automático: {productLinkPublication ? formatCurrency(productLinkPublication.precio + (productLinkPublication.precio * 0.5)) : "Seleccione un producto"}
                            </p>
                            <p
                                className="text-sm text-blue-600"
                            >
                                Por defecto se aplica el precio del producto original más un 50% {productLinkPublication && `(${formatCurrency(productLinkPublication.precio)} + 50%)`}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex flex-col gap-2 font-semibold w-80">
                            <div className="flex gap-1 items-center">
                                <label htmlFor="price">Personalizar Precio</label>
                                <input type="checkbox" checked={iscustomPrice} onChange={handleCustomPrice} />
                            </div>
                            <input type="number" id="price" className={`border border-gray-300 p-2 rounded-lg ${!iscustomPrice && "pointer-events-none opacity-55 select-none"}`} placeholder={`Ej: 20000 (sin puntos ni comas)`} maxLength={20} {...register("price", {
                                required: "El precio es obligatorio",
                                min: {
                                    value: 1,
                                    message: "El precio debe ser mayor a 0"
                                }
                            })} />
                            {errors.price && (
                                <ErrorMessage>{errors.price.message?.toString()}</ErrorMessage>
                            )}
                        </div>
                        <div className="flex flex-col gap-2 font-semibold w-80">
                            <label htmlFor="discount">Descuento (%)</label>
                            <input min={0} max={99} type="number" id="discount" className="border border-gray-300 p-2 rounded-lg" placeholder={`Ej: 30 (sin puntos ni comas)`} maxLength={3} {...register("discount", {
                                required: "El descuento es obligatorio",
                                min: {
                                    value: 0,
                                    message: "El descuento debe ser mayor a 0"
                                },
                                max: {
                                    value: 99,
                                    message: "El descuento debe ser menor a 100"
                                }
                            })} />
                            {errors.discount && (
                                <ErrorMessage>{errors.discount.message?.toString()}</ErrorMessage>
                            )}
                        </div>
                    </div>
                </div>
                <button
                    disabled={MutateLoading}
                    className={`bg-[#2D5DA2] text-white px-4 py-2 w-full rounded text-center font-semibold hover:bg-[#2d52a2] hover:cursor-pointer ${MutateLoading && "pointer-events-none bg-[#243761]"}`}
                > Crear Producto
                </button>

                <input id="validateError" type="hidden"{...register("validateError")} />
                {errors.validateError && (<ErrorMessage>{errors.validateError.message?.toString()}</ErrorMessage>)}
            </form>
        </div>
    )
}

