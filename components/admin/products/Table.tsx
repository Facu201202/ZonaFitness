import { Categoria, ProductAdmin } from "@/src/types";
import { formatCurrency, translateCategory } from "@/src/utils";
import Image from "next/image";
import { useState } from "react";

type TableProps = {
    products: ProductAdmin[]
}

export default function Table({ products }: TableProps) {
    const [isWhite, setIsWhite] = useState(true)
    return (
        <table className="w-full table-fixed">
            <thead className="font-medium bg-gray-100">
                <tr>
                    <th className="px-2 py-4">Foto</th>
                    <th className="px-2 py-4 text-left w-1/3">Nombre</th>
                    <th className="px-2 py-4 text-left">Precio</th>
                    <th className="px-2 py-4 text-left">Categoría</th>
                    <th className="px-2 py-4 text-left">Stock</th>
                    <th className="px-2 py-4 text-left">Publicación</th>
                    <th className="px-2 py-4 text-left">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, i) => (
                    <tr key={i} className={`px-4 py-4 ${(i % 2 === 0) ? "bg-white" : "bg-gray-100"}`}>
                        <td className="px-2 py-4">
                            <div className='relative w-auto h-[60px] px-4 py-4' >
                                <Image
                                    src={`/products/${translateCategory(product.categoria.nombre as Categoria)}/` + product.foto}
                                    fill
                                    alt='imangen del producto'
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain rounded"
                                />
                            </div>
                        </td>
                        <td className="px-2 py-4 font-bold">{product.nombre}</td>
                        <td className="px-2 py-4 font-bold">{formatCurrency(product.precio)}</td>
                        <td className="px-2 py-4">{product.categoria.nombre}</td>
                        <td className="px-2 py-4">stock</td>
                        <td className="px-2 py-4">Publicación</td>
                        <td className="px-2 py-4">Acciones</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
