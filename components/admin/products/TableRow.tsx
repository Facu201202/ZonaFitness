import { Categoria, ProductAdmin } from "@/src/types";
import { findUrlPath, formatCurrency, translateCategory } from "@/src/utils";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline"
import Image from "next/image";
import { usePathname, useSearchParams, redirect } from "next/navigation";


type TableRowProps = {
    i: number,
    product: ProductAdmin
}

export default function TableRow({ i, product }: TableRowProps) {
    const searchParams = useSearchParams()
    const productId = +searchParams.get('producto')!
    const pathname = usePathname()
    const fullUrl = pathname + '?' + searchParams.toString();
    const lowStock = product.stocks.filter(stock => {
        if (stock.cantidad < 5) {
            return stock
        }
    })

    const totalStock = product.stocks.reduce((acc, stock) => { return acc + stock.cantidad }, 0)

    return (
        <tr key={i} className={`px-4 py-4 ${(i % 2 === 0) ? "bg-white" : "bg-gray-100"}`}>
            <td className="px-2 py-4">
                <div className='relative w-auto h-[60px] px-4 py-4' >
                    <Image
                        src={findUrlPath(product.foto, product.categoria.nombre)}
                        fill
                        alt='imangen del producto'
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain rounded"
                    />
                </div>
            </td>
            <td className="px-2 py-4 font-bold">{product.nombre}</td>
            <td className="px-2 py-4 font-bold">{formatCurrency(product.precio)}</td>
            <td className="px-2 py-4">
                <div className="px-2 py-1 text-white font-semibold bg-indigo-500 w-fit rounded-lg">
                    {product.categoria.nombre}
                </div>
            </td>
            <td className="px-2 py-4">
                <div className=" font-semibold text-orange-400">
                    <p className="font-bold">Total: {totalStock}</p>
                    {lowStock.length > 0 && (
                        <div className="flex gap-1 text-sm">
                            <p>Stock bajo en:</p>{lowStock.map((stock, i) => (<p key={stock.id_talle}>{stock.talle.talle}{i === lowStock.length ? ", " : "."}</p>))}
                        </div>
                    )}
                </div>
            </td>
            <td className="px-2 py-4">
                <button
                    disabled={product.publicaciones.length === 0}
                    className={`px-2 py-1 font-semibold text-sm border rounded-lg border-gray-200 shadow hover:cursor-pointer hover:bg-gray-100 ${product.publicaciones.length === 0 && "pointer-events-none opacity-70"}`}
                    onClick={() => { redirect(`${fullUrl}&producto=${product.publicaciones[0].id_publicacion}`)}}
                >
                    Ver publicación
                </button>
            </td>
            <td className="px-2 py-4">
                <div className="flex gap-2">
                    <button className="p-1 border rounded-lg border-gray-200 shadow hover:cursor-pointer hover:bg-gray-100">
                        <PencilSquareIcon className="w-5 h-5" />
                    </button>
                    <button className="p-1 border rounded-lg border-gray-200 shadow hover:cursor-pointer hover:bg-gray-100">
                        <TrashIcon className="w-5 h-5 text-red-600" />
                    </button>
                </div>
            </td>
        </tr>
    )
}
