import { EstadoEnvio } from '@/src/generated/prisma';
import { purchaseStateBgColor } from '@/src/utils';
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'react-toastify';

const options = Object.entries(EstadoEnvio)

type StateOptionsProps = {
    state: EstadoEnvio,
    saleId: number,
    setIsChanging: Dispatch<SetStateAction<boolean>>
}

export default function StateOptions({ state, saleId, setIsChanging }: StateOptionsProps) {
    const [bgColor, textColor] = purchaseStateBgColor[state]

    const [selected, setSelected] = useState(state);

    const mutation = useMutation({
        mutationKey: ["changeState", selected],
        mutationFn: async (data: {newState: EstadoEnvio, saleId: number}) => {
            const res = await fetch("/admin/sales/api/changeState", {
                method: "POST",
                body: JSON.stringify(data)
            })
            const response = await res.json()
            if (!res.ok) throw new Error(response.message)
            setIsChanging(false)
            return response
        },
        onSuccess: (data) => {
            toast.success(data.message)
            setTimeout(() => {
                window.location.reload()
            }, 2500);
        },
        onError: (error) => {
            toast.error(error.message)
            setTimeout(() => {
                window.location.reload()
            }, 2500);
        }
    })

    const handleChange = (e: EstadoEnvio) => {
        const data = {
            newState: e,
            saleId: saleId
        }
        setSelected(e)
        setIsChanging(true)
        console.log(data)
        mutation.mutate(data)
    }

    return (
        <Listbox value={selected} onChange={e => handleChange(e)}>
            <div className="relative w-32 text-xs">
                <Listbox.Button
                    className={`w-full ${bgColor} ${textColor} text-left rounded-lg border px-3 py-1  flex justify-between items-center hover:cursor-pointer`}>
                    {selected}
                    <ChevronDownIcon className="w-4 h-4 hover:cursor-pointer" />
                </Listbox.Button>

                <Listbox.Options className={"absolute z-1000 mt-1 w-full rounded-lg bg-white border border-gray-300 shadow-md"}>
                    {options.map((opt, idx) => (
                        <Listbox.Option
                            key={idx}
                            disabled={selected === opt[0]}
                            value={opt[0]}
                            className={({ active }) =>
                                `cursor-pointer px-4 py-2 ${active ? 'bg-blue-100 text-blue-700' : ''
                                }`
                            }
                        >
                            {opt[1]}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>

    )
}
