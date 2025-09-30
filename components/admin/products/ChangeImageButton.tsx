import { CldUploadWidget } from "next-cloudinary"
import { UseFormSetValue, FieldErrors, UseFormRegister } from "react-hook-form"
import { PhotoIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import Image from "next/image"
import ErrorMessage from "@/components/ErrorMessage"
import { CreateProductFormData } from "@/src/types"



type ChangeImageButtonProps = {
    errors: FieldErrors<CreateProductFormData>,
    register: UseFormRegister<CreateProductFormData>,
    setValue: UseFormSetValue<CreateProductFormData>
    originalImage: string
}


export default function ChangeImageButton({ errors, register, setValue, originalImage }: ChangeImageButtonProps) {
    const [imageUrl, setImageUrl] = useState("")
    return (
        <CldUploadWidget
            uploadPreset="unsigned_preset"
            options={{
                maxFiles: 1
            }}
            onSuccess={(result, { widget }) => {
                if (result.event === "success") {
                    widget.close()
                    //@ts-ignore
                    const url = result.info.secure_url
                    setImageUrl(url)
                    setValue("image", url, { shouldValidate: true })
                }
            }}
        >
            {({ open }) => (
                <>
                        {imageUrl ? (
                            <div className="relative w-auto h-[200px] px-4 py-4">
                                <Image
                                    src={imageUrl}
                                    style={{ objectFit: "contain" }}
                                    fill
                                    alt="Imagen del Producto"
                                />
                            </div>
                        ): (
                        <button onClick={() => open()} className='p-2 mx-auto bg-slate-300 text-slate-800 font-semibold flex gap-2 items-center rounded hover:cursor-pointer hover:bg-slate-400'>
                            <PhotoIcon className="w-8 h-8" />
                            Cambiar Imagen
                        </button>
                        )}
                    <input
                        type="hidden"
                        defaultValue={imageUrl ? imageUrl : originalImage}
                        {...register(`image`, {
                            required: "La imagen es obligatoria"
                        })}
                    />
                    {errors.image && (
                        <ErrorMessage>{errors.image.message?.toString()}</ErrorMessage>
                    )}
                </>

            )
            }
        </CldUploadWidget >

    )
}
