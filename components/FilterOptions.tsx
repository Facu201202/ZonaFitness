import { useState } from "react"
import {useSearchParams, useRouter} from "next/navigation"
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { formatCurrency } from "@/src/utils";

export default function FilterOptions() {
    const [open, setOpen] = useState({
        price: false,
        category: false,
        size: false,
        discount: false
    })
    const [price, setPrice] = useState(200000)
    const searchParams = useSearchParams()
    const router = useRouter()
    const categories = ["Remeras", "Pantalones", "Gorras", "Zapatillas"]
    const sizes = ["XS", "S", "M", "L", "XL", "XXL", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41", "41.5", "42", "42.5", "43", "Único"]

    const handleClick = (name: string, filterName: string) => {
        const params = new URLSearchParams(searchParams.toString())
        const items = params.getAll(filterName)

        if(items.includes(name)){
            const newParams = items.filter(i => i !== name)
            params.delete(filterName)
            newParams.forEach(param => params.append(filterName, param))
        }else{
            params.append(filterName, name)
        }
        router.push(`?${params.toString()}`)
    }
    const handleRangeChange = (value: number) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("precioMax", value.toString())
        router.push(`?${params.toString()}`)
        setPrice(value)
    }

    return (
        <div>
            <div className="border-b border-gray-400 py-3">
                <div className="flex justify-between hover:cursor-pointer" onClick={() => setOpen((state) => ({ ...state, price: !state.price }))}>
                    <p className="font-medium ">Precio</p>
                    <ChevronDownIcon className="w-4 h-4 hover:cursor-pointer" />
                </div>

                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${open.price ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <form className="mt-3">
                        <input 
                            type="range" 
                            className="w-full accent-[#2D5DA2]" 
                            min="0" 
                            max="200000" 
                            value={price} 
                            step="20000" 
                            onChange={e => handleRangeChange(Number(e.target.value))}
                        />
                        <div className="flex justify-between text-sm">
                            <p>{formatCurrency(0)}</p>
                            <p>{formatCurrency(price)}</p>
                        </div>
                    </form>
                </div>

            </div>
            <div className="border-b border-gray-400 py-3">
                <div className="flex justify-between hover:cursor-pointer" onClick={() => setOpen((state) => ({ ...state, category: !state.category }))}>
                    <p className="font-medium mb-2">Categoria</p>
                    <ChevronDownIcon className="w-4 h-4 hover:cursor-pointer" />
                </div>
                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${open.category ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <form>
                        {categories.map(c => (
                            <div className="flex flex-row-reverse items-center justify-end gap-2" key={c}>
                                <label htmlFor={`${c}`}>{c}</label>
                                <input type="checkbox" id={`${c}`} onClick={() => handleClick(c, "categoria")} />
                            </div>
                        ))}
                    </form>
                </div>
            </div>
            <div className="border-b border-gray-400 py-3">
                <div className="flex justify-between hover:cursor-pointer" onClick={() => setOpen((state) => ({ ...state, size: !state.size }))}>
                    <p className="font-medium mb-2">Talle</p>
                    <ChevronDownIcon className="w-4 h-4 hover:cursor-pointer" />
                </div>
                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${open.size ? "max-h-50 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <form className="grid grid-cols-3">
                        {sizes.map(size => (
                            <div className="flex flex-row-reverse items-center justify-end gap-2" key={size}>
                                <label htmlFor={`${size}`}>{size}</label>
                                <input type="checkbox" id={`${size}`} onClick={() => handleClick(size, "talle")}/>
                            </div>
                        ))}
                    </form>
                </div>
            </div>
            <div className="border-b border-gray-400 py-3">
                <div className="flex justify-between hover:cursor-pointer" onClick={() => setOpen((state) => ({ ...state, discount: !state.discount }))}>
                    <p className="font-medium mb-2">Descuento</p>
                    <ChevronDownIcon className="w-4 h-4 hover:cursor-pointer" />
                </div>
                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${open.discount ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <form>
                        <div className="flex flex-row-reverse items-center justify-end gap-2">
                            <label htmlFor="active">Activar</label>
                            <input type="checkbox" id={`active`} onClick={() => handleClick("true", "descuento")}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}