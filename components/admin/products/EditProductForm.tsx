
import ErrorMessage from "@/components/ErrorMessage";
import { EditProductFormData, ProductDataEdit } from "@/src/types"
import { FieldError, useForm } from "react-hook-form"
import Image from "next/image";
import { findUrlPath } from "@/src/utils";
import ChangeImageButton from "./ChangeImageButton";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useState } from "react";

export default function EditProductForm({ product }: { product: ProductDataEdit }) {
    const [MutateLoading, setMutateLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, setError, setValue } = useForm<EditProductFormData>()
    const stockErrors = errors.stock as Record<string, FieldError>;
    const mutation = useMutation({
        mutationKey: ["updateProduct", product.id_producto],
        mutationFn: async (data: EditProductFormData) => {
            setMutateLoading(true)
            const res = await fetch(`/admin/products/editProduct/api/updateProduct`, {
                method: "POST",
                body: JSON.stringify(data)
            })
            if (!res.ok) throw new Error("Error al editar el producto")
            setMutateLoading(false)
            return res.json()
        },
        onError: () => {
            toast.error("Error al actualizar el producto")
            setTimeout(() => {
                window.location.href = "/admin/products"
            }, 2500);
        },
        onSuccess: () => {
            toast.success("Producto actualizado correctamente")
            setTimeout(() => {
                window.location.href = "/admin/products"
            }, 2500);
        }
    })

    const updateProduct = (data: EditProductFormData) => {
        mutation.mutate(data)
    }

    return (
        <div className='py-10'>

            <form className="mx-auto max-w-3xl border border-gray-200 bg-white px-3 py-6 shadow flex flex-col gap-2" onSubmit={handleSubmit(updateProduct)}>
                <div className="flex flex-col gap-2 font-semibold">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" className="border border-gray-300 p-2 rounded-lg" placeholder="Nombre del producto" defaultValue={product.nombre} {...register("nombre", {
                        required: "El nombre del producto es obligatorio"
                    })} />
                    {errors.nombre && (
                        <ErrorMessage>{errors.nombre.message?.toString()}</ErrorMessage>
                    )}
                </div>
                <div className="flex flex-col gap-2 font-semibold">
                    <label htmlFor="precio">Precio</label>
                    <input type="number" id="precio" className="border border-gray-300 p-2 rounded-lg" placeholder={`20000 (sin puntos ni comas)`} maxLength={20}
                        defaultValue={product.precio} {...register("precio", {
                            required: "El precio es obligatorio",
                            min: {
                                value: 1,
                                message: "El precio debe ser mayor a 0"
                            }
                        })} />
                    {errors.precio && (
                        <ErrorMessage>{errors.precio.message?.toString()}</ErrorMessage>
                    )}
                </div>
                <div className="space-y-2 font-semibold">
                    <label

                        htmlFor="genero"
                    >Genero:</label>
                    <select
                        className="block w-full p-3 bg-slate-100"
                        id="genero"
                        defaultValue={product.genero}
                        {...register("genero", {
                            required: "La categoria es obligatoria",
                        }
                        )}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                        <option value="Unisex">Unisex</option>
                    </select>
                    {errors.genero && (
                        <ErrorMessage>{errors.genero.message?.toString()}</ErrorMessage>
                    )}
                </div>
                <div className="flex flex-col gap-2 font-semibold">
                    <label htmlFor="name">Categoría</label>
                    <p className="px-2 py-1 text-white font-semibold bg-indigo-500 w-fit rounded-lg">{product.categoria.nombre}</p>
                </div>
                <div className="flex flex-col gap-2 font-semibold">
                    <label htmlFor="color">Color</label>
                    <input type="text" id="color" className="border border-gray-300 p-2 rounded-lg" placeholder="color del producto" defaultValue={product.color} {...register("color", {
                        required: "El color del producto es obligatorio"
                    })} />
                    {errors.color && (
                        <ErrorMessage>{errors.color.message?.toString()}</ErrorMessage>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {product.stocks.map(size => (
                        <div className="flex gap-3 items-center font-semibold" key={size.id_stock}>
                            <label className="w-10" htmlFor={size.id_stock.toString()}>{size.talle.talle}</label>
                            <input
                                type="number"
                                id={`${size.id_stock.toString()}`}
                                className="border border-gray-300 p-2 rounded-lg max-w-24"
                                placeholder="20"
                                defaultValue={size.cantidad}
                                {...register(`stock.${size.id_stock}_${size.talle.talle}`, {
                                    required: " ",
                                    min: {
                                        value: 0,
                                        message: "Valor incorrecto"
                                    }
                                })} />
                            {stockErrors?.[`${size.id_stock}_${size.talle}`]?.message && (
                                <ErrorMessage>
                                    {stockErrors[`${size.id_stock}_${size.talle}`].message}
                                </ErrorMessage>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 w-full justify-between items-center">
                    <div className="w-1/3">
                        <p className="font-semibold mb-6 text-center">Imagen actual del Producto</p>
                        <div className='relative w-auto h-[200px] px-4 py-4' >
                            <Image
                                src={findUrlPath(product.foto, product.categoria.nombre)}
                                fill
                                alt='imangen del producto'
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain rounded"
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <ChangeImageButton errors={errors} register={register} setValue={setValue} originalImage={product.foto} />
                    </div>

                </div>
                <button
                    disabled={MutateLoading}
                    className={`bg-[#2D5DA2] text-white px-4 py-2 w-full rounded text-center font-semibold hover:bg-[#2d52a2] hover:cursor-pointer ${MutateLoading && "pointer-events-none bg-[#243761]"}`}
                > Actualizar Producto
                </button>
                <input id="validateError" type="hidden"{...register("validateError")} />
                <input id="id_producto" value={product.id_producto} type="hidden"{...register("id_producto")} />
                {errors.validateError && (<ErrorMessage>{errors.validateError.message?.toString()}</ErrorMessage>)}
            </form>
        </div>
    )
}
