import { EstadoEnvio } from '@/src/generated/prisma';
import { purchaseStateBgColor } from '@/src/utils';
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const options = Object.entries(EstadoEnvio) 
console.log(options)

type StateOptionsProps = {
    state: EstadoEnvio
}

export default function StateOptions({state}: StateOptionsProps) {
    const [bgColor, textColor] = purchaseStateBgColor[state]
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())
    const router = useRouter()

    const [selected, setSelected] = useState(state);

    return (
        <Listbox value={selected} >
            <div className="relative w-32 text-xs">
                <Listbox.Button 
                className={`w-full ${bgColor} ${textColor} text-left rounded-lg border px-3 py-1  flex justify-between items-center hover:cursor-pointer`}>
                    {selected}
                    <ChevronDownIcon className="w-4 h-4 hover:cursor-pointer" />
                </Listbox.Button>

                <Listbox.Options className={"absolute z-1000 mt-1 w-full rounded-lg bg-white border border-gray-300 shadow-md"}>
                    {options.map((opt, idx) => (
                        <Listbox.Option
                            disabled={idx === 0}
                            key={idx}
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
