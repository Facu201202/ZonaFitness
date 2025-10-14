import {PublicationAdmin } from "@/src/types";
import TableRow from "./TableRow";

type TableProps = {
    publications: PublicationAdmin[]
}

export default function Table({ publications }: TableProps) {
    return (
        <table className="w-full text-base">
            <thead className="font-medium bg-gray-100">
                <tr>
                    <th className="px-2 py-4 w-[80px]">Estado</th>
                    <th className="px-2 py-4 text-left">Producto Relacionado</th>
                    <th className="px-2 py-4 text-left">Precio</th>
                    <th className="px-2 py-4 text-left">Descuento</th>
                    <th className="px-2 py-4 text-left">Características</th>
                    <th className="px-2 py-4 text-left">Fecha de Alta</th>
                    <th className="px-2 py-4 text-left">Ventas</th>
                    <th className="px-2 py-4 text-left">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {publications.map((publication, i) => (
                    <TableRow key={publication.id_publicacion} publications={publication} i={i}/>
                ))}
        
            </tbody>
        </table>
    )
}
