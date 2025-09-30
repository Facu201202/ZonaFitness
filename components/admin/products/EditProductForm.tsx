
import ErrorMessage from "@/components/ErrorMessage";
import { CreateProductFormData, ProductDataEdit } from "@/src/types"
import { FieldError, useForm } from "react-hook-form"
import Image from "next/image";
import { findUrlPath } from "@/src/utils";
import ChangeImageButton from "./ChangeImageButton";

export default function EditProductForm({ product }: { product: ProductDataEdit }) {
    console.log(product)
    const { register, handleSubmit, formState: { errors }, setError, setValue } = useForm<CreateProductFormData>()
    const stockErrors = errors.stock as Record<string, FieldError>;
    const data = (d: any) => {
        console.log("imagen original:", product.foto)
        console.log(d)
    }

    return (
        <div className='py-10'>
            <form className="mx-auto max-w-3xl border border-gray-200 bg-white px-3 py-6 shadow flex flex-col gap-2" onSubmit={handleSubmit(data)}>
                <div className="flex flex-col gap-2 font-semibold">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" className="border border-gray-300 p-2 rounded-lg" placeholder="Nombre del producto" defaultValue={product.nombre} {...register("name", {
                        required: "El nombre del producto es obligatorio"
                    })} />
                    {errors.name && (
                        <ErrorMessage>{errors.name.message?.toString()}</ErrorMessage>
                    )}
                </div>
                <div className="flex flex-col gap-2 font-semibold">
                    <label htmlFor="price">Precio</label>
                    <input type="number" id="price" className="border border-gray-300 p-2 rounded-lg" placeholder={`20000 (sin puntos ni comas)`} maxLength={20}
                        defaultValue={product.precio} {...register("price", {
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
                <div className="space-y-2">
                    <label
                        className="text-slate-800"
                        htmlFor="gender"
                    >Genero:</label>
                    <select
                        className="block w-full p-3 bg-slate-100"
                        id="gender"
                        defaultValue={product.genero}
                        {...register("gender", {
                            required: "La categoria es obligatoria",
                        }
                        )}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                        <option value="Unisex">Unisex</option>
                    </select>
                    {errors.gender && (
                        <ErrorMessage>{errors.gender.message?.toString()}</ErrorMessage>
                    )}
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
                        <div className="flex gap-2 items-center font-semibold" key={size.id_talle}>
                            <label className="w-8" htmlFor={size.id_talle.toString()}>{size.talle.talle}</label>
                            <input
                                type="number"
                                id={`${size.id_talle.toString()}`}
                                className="border border-gray-300 p-2 rounded-lg max-w-24"
                                placeholder="20"
                                defaultValue={size.cantidad}
                                {...register(`stock.${size.id_talle}_${size.talle.talle}`, {
                                    required: " ",
                                    min: {
                                        value: 0,
                                        message: "Valor incorrecto"
                                    }
                                })} />
                            {stockErrors?.[`${size.id_talle}_${size.talle}`]?.message && (
                                <ErrorMessage>
                                    {stockErrors[`${size.id_talle}_${size.talle}`].message}
                                </ErrorMessage>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 w-full justify-between items-center">
                    <div className="w-1/3">
                    <p className="font-semibold mb-6">Imagen actual del Producto:</p>
                        <div className='relative w-auto h-[200px] px-4 py-4' >
                            <Image
                                src={findUrlPath( product.foto, product.categoria.nombre)}
                                fill
                                alt='imangen del producto'
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain rounded"
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <ChangeImageButton errors={errors} register={register} setValue={setValue} originalImage={product.foto}/>
                    </div>

                </div>
                <button
                    className={`bg-[#2D5DA2] text-white px-4 py-2 w-full rounded text-center font-semibold hover:bg-[#2d52a2] hover:cursor-pointer`}
                > Crear Producto
                </button>

                <input id="validateError" type="hidden"{...register("validateError")} />
                {errors.validateError && (<ErrorMessage>{errors.validateError.message?.toString()}</ErrorMessage>)}
            </form>
        </div>
    )
}
