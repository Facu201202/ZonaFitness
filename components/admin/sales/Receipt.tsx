import { formatCurrency, homeDeliveryPrice, taxes } from "@/src/utils"
import { RefObject } from "react"
import { SaleDataTable } from "@/src/types"
import { MetodoEnvio } from "@/src/generated/prisma"

type ReceiptProps = {
    sale: SaleDataTable
}

export default function Receipt({ sale }: ReceiptProps) {
    const deliveryPrice = sale.metodo_entrega === MetodoEnvio["DOMICILIO"] ? homeDeliveryPrice : 0

    return (
        <div  className="flex items-center justify-center">
            <div className="w-lg p-2">
                <p className="font-bold text-xl uppercase text-center">Comprobante de compra</p>
                <p className="text-center">=============================</p>
                <div className="py-4 flex flex-col gap-2 border-b border-[#D1D5DC]">
                    <div className="flex justify-between">
                        <p className="text-[#364153] font-bold">ID:</p>
                        <p className="text-[#3a4658] font-semibold uppercase">{sale.n_comprobante}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[#364153] font-bold">Fecha:</p>
                        <p className="text-[#3a4658] font-semibold uppercase">{new Date(sale.fecha).toLocaleDateString("es-AR")}</p>
                    </div>
                </div>
                <div className="py-4 flex flex-col gap-2 border-b border-[#D1D5DC]">
                    <p className="text-[#364153] font-bold uppercase mb-3">Producto:</p>
                    <div className="px-4 flex flex-col gap-2 bg-[#F9FAFB] py-3 rounded-xl">
                        <p className="text-[#364153] font-bold">{sale.publicacion.producto.nombre}</p>
                        <div className="flex justify-between">
                            <p className="text-[#474e72]  font-medium">Talle:</p>
                            <p className="text-[#364153] font-semibold uppercase">{sale.talle}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#474e72] font-medium">Cantidad:</p>
                            <p className="text-[#364153] font-semibold uppercase">{sale.cantidad}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#474e72]  font-medium">Precio:</p>
                            <p className="text-[#00A63E] font-bold uppercase">{formatCurrency((sale.precio_total - (taxes + deliveryPrice)))}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#474e72] font-medium">Impuestos:</p>
                            <p className="text-[#364153] font-semibold uppercase">Incluidos</p>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col gap-2 border-b border-[#D1D5DC]">
                    <p className="text-[#364153] font-bold uppercase mb-3">Entrega:</p>
                    <div className="px-4 flex flex-col gap-2 bg-[#EFF6FF] py-3 rounded-xl">
                        <div className="flex justify-between">
                            <p className="text-[#474e72] font-medium">Método:</p>
                            <p className="text-[#364153] font-semibold">{sale.metodo_pago}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#474e72]font-medium">Costo:</p>
                            <p className="text-[#155DFC] font-bold uppercase">{formatCurrency(deliveryPrice)}</p>
                        </div>
                    </div>

                </div>
                <div className="py-4 flex flex-col gap-2 border-b border-[#D1D5DC]">
                    <p className="text-[#364153] font-bold uppercase mb-3">Pago:</p>
                    <div className="px-4 flex flex-col gap-2 bg-[#FDF4FF] py-3 rounded-xl">
                        <div className="flex justify-between">
                            <p className="text-[#474e72] font-medium">Método:</p>
                            <p className="text-[#364153] font-semibold">{sale.metodo_pago.replace(/_/g, " ")}</p>
                        </div>
                    </div>

                </div>
                <div className="flex justify-between text-[#FFFFFF] font-bold bg-[#101828] p-4 rounded-xl text-xl">
                    <p className="font-medium uppercase ">Total:</p>
                    <p className="">{formatCurrency(sale.precio_total)}</p>
                </div>
                <div className="text-center pt-5 text-[#3a4658]">
                    <p>=============================</p>
                    <p>Gracias por su compra <br />
                        Conserve este comprobante para futuras referencias</p>
                </div>
            </div>
        </div>

    )
}
