import { SaleDataTable } from "@/src/types";
import TableRow from "./TableRow";
type TableProps = {
    sales: SaleDataTable[]
}

export default function Table({ sales }: TableProps) {
    return (
        <table className="w-full text-base">
            <thead className="font-medium bg-gray-100">
                <tr>
                    <th className="px-2 py-4 text-left">Usuario</th>
                    <th className="px-2 py-4 text-left">Producto</th>
                    <th className="px-2 py-4 text-left">Precio Total</th>
                    <th className="px-2 py-4 text-left">Cantidad</th>
                    <th className="px-2 py-4 text-left">Talle</th>
                    <th className="px-2 py-4 text-left">Estado</th>
                    <th className="px-2 py-4 text-left">Fecha</th>
                    <th className="px-2 py-4 text-left">N° Comprobante</th>
                    <th className="px-2 py-4 text-left">Más información</th>
                </tr>
            </thead>
            <tbody>
                {sales.map((sale, i) => (
                    <TableRow key={sale.id_venta} sale={sale} i={i} />
                ))}
            </tbody>
        </table>
    )
}
