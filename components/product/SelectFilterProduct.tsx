import { Listbox } from '@headlessui/react'
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';


const options = {
    default: "---",
    Precio_Menor_a_Mayor: "Precio: Menor a Mayor",
    Precio_Mayor_a_Menor: "Precio: Mayor a Menor",
    mas_vendido: "Más Vendido"
}

type optionKey = keyof typeof options

const optionsArray = Object.entries(options)


export default function SelectFilterProducts() {
    const isOptionKey = (value: unknown): value is optionKey => {
        return typeof value === "string" && value in options
    }
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())
    const filter = searchParams.get("filter")
    const defaultFilter: optionKey = isOptionKey(filter) ? filter : "default"
    const router = useRouter()
    const [selected, setSelected] = useState<optionKey>(defaultFilter);

    const handleChange = (e: optionKey) => {
        setSelected(e)
        params.delete("page")
        params.delete("filter")
        params.append("filter", e)
        router.push(`?${params.toString()}`)
        return
    }

    useEffect(() => {
        setSelected(defaultFilter)
    }, [defaultFilter])
    return (
        <Listbox value={selected} onChange={(e) => handleChange(e)}>
            <div className="relative w-64">
                <Listbox.Button className="w-full text-left rounded-lg border border-gray-300 px-3 py-1 bg-white flex justify-between items-center hover:cursor-pointer">
                    {options[selected]}
                    <ChevronDownIcon className="w-4 h-4 hover:cursor-pointer" />
                </Listbox.Button>

                <Listbox.Options className="absolute z-1000 mt-1 w-full rounded-lg bg-white border border-gray-300 shadow-md">
                    {optionsArray.map((opt, idx) => (
                        <Listbox.Option
                            key={idx}
                            value={opt[0]}
                            disabled={idx === 0}
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
