import ErrorMessage from '@/components/ErrorMessage'
import { NewPublicationFormData } from '@/src/types'
import React, { useState } from 'react'
import { FieldErrors, UseFormRegister, useFieldArray, Control } from 'react-hook-form'
import { TrashIcon } from "@heroicons/react/24/outline"

type FeacturesFormProps = {
    register: UseFormRegister<NewPublicationFormData>,
    errors: FieldErrors<NewPublicationFormData>,
    control: Control<any, any, any>
}

export default function FeacturesForm({ register, errors, control }: FeacturesFormProps) {

    const { fields, append, remove } = useFieldArray({
        control,
        name: "features"
    })

    const [feactures, setFeactures] = useState([{ key: "", value: "" }])
    const handleChange = (index: number, field: 'key' | 'value', value: string) => {
        const newFeactures = [...feactures]
        newFeactures[index][field] = value
        setFeactures(newFeactures)
    }
    return (
        <div className='space-y-3 font-semibold'>
            <div className='flex justify-between items-center'>
                <p >Características</p>
                <button
                    type="button"
                    onClick={() => append({ key: '', value: '' })}
                    className="border border-gray-200 shadow px-3 py-1 rounded-lg hover:bg-gray-100 hover:cursor-pointer"
                >
                    <span className='text-xl'>+</span> Agregar
                </button>
            </div>
            {
                fields.map(((field, index) => (
                    <div className='flex gap-3 items-start' key={field.id}>
                        <div className='w-80'>
                            <input
                                type="text"
                                placeholder='Ej: Tipo de cierre'
                                className="border border-gray-300 p-2 rounded-lg w-full"
                                {...register(`features.${index}.key`, {
                                    required: "El nombre de la característica es obligatorio"
                                })} />
                            {errors.features?.[index]?.key && (
                                <ErrorMessage>
                                    {errors.features[index]?.key?.message?.toString()}
                                </ErrorMessage>
                            )}
                        </div>
                        <div className='w-80'>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Ej: Ajustable'
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                    {...register(`features.${index}.value`, {
                                        required: "El valor de la característica es obligatorio"
                                    })} />
                                    
                            </div>

                            {errors.features?.[index]?.value && (
                                <ErrorMessage>
                                    {errors.features[index]?.value?.message?.toString()}
                                </ErrorMessage>
                            )}
                        </div>
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="hover:cursor-pointer hover:text-red-500 hover:bg-red-100 p-2 rounded-lg"
                        >
                            <TrashIcon className='w-5 h-5' />
                        </button>
                    </div>
                )))
            }
        </div>


    )
}
