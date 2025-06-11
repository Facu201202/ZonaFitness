import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const options = ["Destacados", "Precio: Menor a Mayor", "Precio: Mayor a Menor"];

export default function SelectFilterProducts() {
    const [selected, setSelected] = useState(options[0]);

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative w-64">
                <Listbox.Button className="w-full text-left rounded-lg border border-gray-300 px-3 py-1 bg-white flex justify-between items-center hover:cursor-pointer">
                    {selected}
                    <ChevronDownIcon className="w-4 h-4 hover:cursor-pointer"/>
                </Listbox.Button>

                <Listbox.Options className="absolute z-1000 mt-1 w-full rounded-lg bg-white border border-gray-300 shadow-md">
                    {options.map((opt, idx) => (
                        <Listbox.Option
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
