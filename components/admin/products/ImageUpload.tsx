import { CldUploadWidget } from "next-cloudinary"
import { UseFormSetValue, FieldErrors, UseFormRegister } from "react-hook-form"
import { PhotoIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import Image from "next/image"
import ErrorMessage from "@/components/ErrorMessage"
import { CreateProductFormData } from "@/src/types"

type ImageUploadProps = {
    errors: FieldErrors<CreateProductFormData>,
    register: UseFormRegister<CreateProductFormData>,
    setValue: UseFormSetValue<CreateProductFormData>

}

export default function ImageUpload({ errors, register, setValue }: ImageUploadProps) {
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
                    <div className="space-y-2">
                        <div
                            onClick={() => open()}
                            className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
                        >
                            <PhotoIcon className="w-40 h-40" />
                            <p className="text-lg font-semibold">Agregar Imagen</p>
                            {imageUrl && (
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={imageUrl}
                                        style={{ objectFit: "contain" }}
                                        fill
                                        alt="Imagen del Producto"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <input
                        type="hidden"
                        value={imageUrl}
                        {...register(`image`, {
                            required: "La imagen es obligatoria"
                        })}
                    />
                    {errors.image && (
                        <ErrorMessage>{errors.image.message?.toString()}</ErrorMessage>
                    )}
                </>
            )}
        </CldUploadWidget>
    )
}
