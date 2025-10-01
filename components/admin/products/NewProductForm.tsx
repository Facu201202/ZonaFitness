"use client"
import ErrorMessage from "@/components/ErrorMessage"
import { Category, CreateProductFormData } from "@/src/types"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { useForm } from "react-hook-form"
import SizesForm from "./SizesForm"
import ImageUpload from "./ImageUpload"
import { toast } from "react-toastify"

export default function NewProductForm() {

    const { register, handleSubmit, formState: { errors }, setError , setValue} = useForm<CreateProductFormData>()
    const [category, setCategory] = useState("")
    const [MutateLoading, setMutateLoading] = useState(false)
    const getCategories = async (): Promise<Category[]> => {
        const res = await fetch("/admin/products/newProduct/api/getCategories")
        if (!res.ok) { throw new Error("Error al traer las categorias") }
        return res.json()
    }

    const createProduct = async (data: CreateProductFormData) => {
        setMutateLoading(true)
        toast.info("Subiendo...")
        const res = await fetch("/admin/products/newProduct/api/createProduct", {
            method: "POST",
            body: JSON.stringify(data)
        })
        if (!res.ok) throw new Error("Error al crear el producto")
        setMutateLoading(false)
        return res.json()
    }

    const mutation = useMutation({
        mutationKey: ["NewProduct"],
        mutationFn: (data: CreateProductFormData) => createProduct(data),
        onError: () => {
            toast.error("Error al crear el producto")
            setTimeout(() => {
                window.location.href = "/admin/products"
            }, 2500);
        },
        onSuccess: () => {
            toast.success("Producto Creado correctamente")
            setTimeout(() => {
                window.location.href = "/admin/products"
            }, 2500);
        }
    })

    const { data } = useQuery({
        queryKey: ["categories"],
        queryFn: () => getCategories()
    })

    const info = (data: CreateProductFormData) => {
        mutation.mutate(data)
    }

    return (
        data && (
            <div className='py-10'> 
                <form className="mx-auto max-w-3xl border border-gray-200 bg-white px-3 py-6 shadow flex flex-col gap-2" onSubmit={handleSubmit(info)}>
                    <div className="flex flex-col gap-2 font-semibold">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" className="border border-gray-300 p-2 rounded-lg" placeholder="Nombre del producto" {...register("name", {
                            required: "El nombre del producto es obligatorio"
                        })} />
                        {errors.name && (
                            <ErrorMessage>{errors.name.message?.toString()}</ErrorMessage>
                        )}
                    </div>
                    <div className="flex flex-col gap-2 font-semibold">
                        <label htmlFor="price">Precio</label>
                        <input type="number" id="price" className="border border-gray-300 p-2 rounded-lg" placeholder={`20000 (sin puntos ni comas)`} maxLength={20} {...register("price", {
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
                            htmlFor="categoryId"
                        >Categoría:</label>
                        <select
                            className="block w-full p-3 bg-slate-100"
                            id="categoryId"
                            {...register("categoryId", {
                                required: "La categoria es obligatoria",
                                onChange: (e) => {
                                    console.log(setCategory(e.target.options[e.target.selectedIndex].text));
                                }
                            }
                            )}
                        >
                            <option value="">-- Seleccione --</option>
                            {data.map(category => (
                                <option key={category.id_categoria} value={category.id_categoria} >{category.nombre}</option>
                            ))}

                        </select>
                        {errors.categoryId && (
                            <ErrorMessage>{errors.categoryId.message?.toString()}</ErrorMessage>
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
                        <input type="text" id="color" className="border border-gray-300 p-2 rounded-lg" placeholder="color del producto" {...register("color", {
                            required: "El color del producto es obligatorio"
                        })} />
                        {errors.color && (
                            <ErrorMessage>{errors.color.message?.toString()}</ErrorMessage>
                        )}
                    </div>
                    {data.find(cat => cat.nombre === category) && (
                        <div className="py-2">
                            <p className="font-semibold mb-2">Talles:</p>
                            <div className="grid grid-cols-2 gap-3">
                                <SizesForm category={category} errors={errors} register={register} />
                            </div>
                        </div>
                    )}
                    <ImageUpload errors={errors} register={register} setValue={setValue}/>
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
    )
}

