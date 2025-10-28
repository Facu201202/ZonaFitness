import { UserRolBgColorKey } from '@/src/utils';
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'react-toastify';

const options = ["Usuario", "Admin"];

type FilterMenuProps = {
    rol: UserRolBgColorKey,
    userId: number,
    setIsChanging: Dispatch<SetStateAction<boolean>>
}

export default function FilterMenu({ rol, userId, setIsChanging }: FilterMenuProps) {
    const [selected, setSelected] = useState(rol);

    const mutation = useMutation({
        mutationKey: ["change_rol", userId],
        mutationFn: async (data: { newRol: UserRolBgColorKey, userId: number }) => {
            const res = await fetch("/admin/settings/api/changeRol", {
                method: "POST",
                body: JSON.stringify(data)
            })
            if (!res.ok) throw new Error("Error al cambiar el rol")
            return res.json()
        },
        onError: (res) => {
            toast.error(res.message)
            setTimeout(() => {
                setIsChanging(false)
                window.location.reload()
            }, 1500)
        },
        onSuccess: (res) => {
            toast.success(res.message)
            setTimeout(() => {
                setIsChanging(false)
                window.location.reload()
            }, 1500)
        }
    })

    const handleChange = (e: UserRolBgColorKey) => {
        setIsChanging(true)
        setSelected(e)
        mutation.mutate({ newRol: e, userId })
    }
    return (
        <Listbox value={selected} onChange={e => handleChange(e)}>
            <div className="relative w-64">
                <Listbox.Button className="w-full text-left rounded-lg border border-gray-300 px-3 py-1 bg-white flex justify-between items-center hover:cursor-pointer">
                    {selected[0].toUpperCase() + selected.slice(1)}
                    <ChevronDownIcon className="w-4 h-4 hover:cursor-pointer" />
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
