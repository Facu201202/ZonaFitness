import ErrorMessage from "@/components/ErrorMessage"
import { Size } from "@/src/types"
import { useQuery } from "@tanstack/react-query"
import { FieldError, FieldErrors, UseFormRegister } from "react-hook-form"

type SizesFormProps = {
    errors: FieldErrors<any>,
    category: string,
    register: UseFormRegister<any>

}

export default function SizesForm({ category, errors, register }: SizesFormProps) {
    const stockErrors = errors.stock as Record<string, FieldError>;
    const getSizes = async (): Promise<Size[]> => {
        const res = await fetch(`/admin/products/newProduct/api/${category}`)
        if (!res.ok) throw new Error("Error al traer los talles")
        return res.json()
    }

    const { data } = useQuery({
        queryKey: ["Sizes", category],
        queryFn: () => getSizes()
    })

    return (
        data && (
            <>
                {data.map(size => (
                    <div className="flex gap-2 items-center font-semibold" key={size.id_talle}>
                        <label className="w-8" htmlFor={size.id_talle.toString()}>{size.talle}</label>
                        <input
                            type="number"
                            id={`${size.id_talle.toString()}`}
                            className="border border-gray-300 p-2 rounded-lg max-w-24"
                            placeholder="20"
                            {...register(`stock.${size.id_talle}_${size.talle}`, {
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
            </>
        )
    )
}
