import {SaleDataTable } from "@/src/types";
import { formatCurrency } from "@/src/utils";
import StateOptions from "./StateOptions";
import { useState } from "react";

type TableRowProps = {
    i: number
    sale: SaleDataTable
}

export default function TableRow({i, sale}: TableRowProps) {
    console.log(sale)
    const [isChanging, setIsChanging] = useState(false)
    return (
        <tr key={i} className={`px-4 py-4 ${(i % 2 === 0) ? "bg-white" : "bg-gray-100"} ${isChanging && "opacity-30 pointer-events-none select-none"}`}>
            <td className="px-2 py-4 font-medium">
                <p>
                    {sale.usuario.cliente.nombre} {sale.usuario.cliente.apellido}
                </p>
            </td>
            <td className="px-2 py-4 font-medium">{sale.publicacion.producto.nombre}</td>
            <td className="px-2 py-4 font-medium">{formatCurrency(sale.precio_total)}</td>
            <td className="px-2 py-4 font-medium">
                <p>{sale.cantidad}</p>
            </td>
            <td className="px-2 py-4 font-medium">
                <p>{sale.talle}</p>
            </td>
             <td className={`px-2 py-4 font-medium`}>
                    <StateOptions  state={sale.estado} saleId={sale.id_venta} setIsChanging={setIsChanging}/>
            </td>
            <td className="px-2 py-4">
                <p>{new Date(sale.fecha).toLocaleDateString("es-AR")}</p>
            </td>
            <td className="px-2 py-4 text-sm ">
                <p>{sale.n_comprobante.toUpperCase()}</p>
            </td>
            <td className="px-2 py-4">
                <button
                    className={`px-2 py-1 font-semibold text-sm border rounded-lg border-gray-200 shadow hover:cursor-pointer hover:bg-gray-100`}
                >
                    + Más info
                </button>
            </td>
        </tr>
    )
}
