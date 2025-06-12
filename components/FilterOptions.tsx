import { useState } from "react"

export default function FilterOptions() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="border-b border-gray-400 py-3">
                <p className="font-medium" onClick={() => setOpen(!open)}>Precio</p>
                {open && (
                    <form>
                        <input type="range" name="" id="" className="w-full" />
                        <div className="flex justify-between">
                            <p>$0</p>
                            <p>$200.000</p>
                        </div>

                    </form>
                )}
            </div>
            <div className="border-b border-gray-400 py-3">
                <p className="font-medium mb-2">Categoria</p>
                <form>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">Remeras</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">Pantalones</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">Gorras</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">Zapatillas</label>
                        <input type="checkbox" />
                    </div>

                </form>
            </div>
            <div className="border-b border-gray-400 py-3">
                <p className="font-medium mb-2">Talle</p>
                <form className="grid grid-cols-3">
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">XS</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">S</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">M</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">L</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">XL</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">XXL</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">36</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">36.5</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">37</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">37.5</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">38</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">38.5</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">39</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">39.5</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">40</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">40.5</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">41</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">41.5</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">42</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">42.5</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">43</label>
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">Único</label>
                        <input type="checkbox" />
                    </div>
                </form>
            </div>
            <div className="border-b border-gray-400 py-3">
                <p className="font-medium mb-2">Descuento</p>
                <form>
                    <div className="flex flex-row-reverse items-center justify-end gap-2">
                        <label htmlFor="">Activar</label>
                        <input type="checkbox" />
                    </div>
                </form>
            </div>
        </div>
    )
}