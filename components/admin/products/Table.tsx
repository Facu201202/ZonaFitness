import { ProductAdmin } from "@/src/types";
import TableRow from "./TableRow";

type TableProps = {
    products: ProductAdmin[]
}

export default function Table({ products }: TableProps) {
    return (
        <table className="w-full table-fixed text-base">
            <thead className="font-medium bg-gray-100">
                <tr>
                    <th className="px-2 py-4 w-[80px]">Estado</th>
                    <th className="px-2 py-4">Foto</th>
                    <th className="px-2 py-4 text-left w-1/4">Nombre</th>
                    <th className="px-2 py-4 text-left">Precio</th>
                    <th className="px-2 py-4 text-left">Categoría</th>
                    <th className="px-2 py-4 text-left">Stock</th>
                    <th className="px-2 py-4 text-left">Publicación</th>
                    <th className="px-2 py-4 text-left">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, i) => (
                    <TableRow key={product.id_producto} i={i} product={product} />
                ))}
            </tbody>
        </table>
    )
}
