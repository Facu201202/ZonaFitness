import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const options = ["Todas las Categorías", "Gorras", "Pantalones", "Remeras", "Zapatillas"];

export default function FilterMenu() {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())
    const router = useRouter()
    const defaultFilter = searchParams.get("category") || "Todas las Categorías"
    const [selected, setSelected] = useState(defaultFilter);
    const handleChange = (e: string) => {
        setSelected(e)
        params.delete("page")
        params.delete("category")
        params.append("category", e)
        router.push(`?${params.toString()}`)
        return
    }
    
    useEffect(() => {
        setSelected(defaultFilter)
    }, [defaultFilter])
    return (
        <Listbox value={selected} onChange={e => handleChange(e)}>
            <div className="relative w-64">
                <Listbox.Button className="w-full text-left rounded-lg border border-gray-300 px-3 py-1 bg-white flex justify-between items-center hover:cursor-pointer">
                    {selected}
                    <ChevronDownIcon className="w-4 h-4 hover:cursor-pointer" />
                </Listbox.Button>

                <Listbox.Options className="absolute z-1000 mt-1 w-full rounded-lg bg-white border border-gray-300 shadow-md">
                    {options.map((opt, idx) => (
                        <Listbox.Option
                            disabled={idx === 0}
                            key={idx}
                            value={opt}
                            className={({ active }) =>
                                `cursor-pointer px-4 py-2 ${active ? 'bg-blue-100 text-blue-700' : ''
                                }`
                            }
                        >
                            {opt}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>

    )
}
