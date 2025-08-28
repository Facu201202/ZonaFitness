import { formatCurrency } from "@/src/utils"
import { RefObject } from "react"

type ReceiptProps = {
  receiptRef: RefObject<HTMLDivElement | null>
}

export default function Receipt({ receiptRef }: ReceiptProps) {

  return (
    <div ref={receiptRef} className="flex items-center justify-center">
      <div className="w-lg p-2">
        <p className="font-bold text-xl uppercase text-center">Comprobante de compra</p>
        <p className="text-center">=============================</p>
        <div className="py-5 flex flex-col gap-2 border-b border-[#D1D5DC]">
          <div className="flex justify-between">
            <p className="text-[#364153] font-bold">ID:</p>
            <p className="text-[#3a4658] font-semibold uppercase">Ven-vdpja321ds</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#364153] font-bold">Fecha:</p>
            <p className="text-[#3a4658] font-semibold uppercase">19/08/2025</p>
          </div>
        </div>
        <div className="py-5 flex flex-col gap-2 border-b border-[#D1D5DC]">
          <p className="text-[#364153] font-bold uppercase mb-3">Producto:</p>
          <div className="px-4 flex flex-col gap-2 bg-[#F9FAFB] py-3 rounded-xl">
            <p className="text-[#364153] font-bold">MIER Camisetas atléticas para correr</p>
            <div className="flex justify-between">
              <p className="text-[#474e72]  font-medium">Talle:</p>
              <p className="text-[#364153] font-semibold uppercase">M</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#474e72] font-medium">Cantidad:</p>
              <p className="text-[#364153] font-semibold uppercase">1</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#474e72]  font-medium">Precio:</p>
              <p className="text-[#00A63E] font-bold uppercase">{formatCurrency(20000)}</p>
            </div>
          </div>
        </div>
        <div className="py-5 flex flex-col gap-2 border-b border-[#D1D5DC]">
          <p className="text-[#364153] font-bold uppercase mb-3">Entrega:</p>
          <div className="px-4 flex flex-col gap-2 bg-[#EFF6FF] py-3 rounded-xl">
            <div className="flex justify-between">
              <p className="text-[#474e72] font-medium">Método:</p>
              <p className="text-[#364153] font-semibold">a domicilio</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#474e72]font-medium">Costo:</p>
              <p className="text-[#155DFC] font-bold uppercase">{formatCurrency(2500)}</p>
            </div>
          </div>

        </div>
        <div className="py-5 flex flex-col gap-2 border-b border-[#D1D5DC]">
          <p className="text-[#364153] font-bold uppercase mb-3">Pago:</p>
          <div className="px-4 flex flex-col gap-2 bg-[#FDF4FF] py-3 rounded-xl">
            <div className="flex justify-between">
              <p className="text-[#474e72] font-medium">Método:</p>
              <p className="text-[#364153] font-semibold">dinero en cuenta</p>
            </div>
          </div>

        </div>
        <div className="flex justify-between text-[#FFFFFF] font-bold bg-[#101828] p-4 rounded-xl text-xl">
          <p className="font-medium uppercase ">Total:</p>
          <p className="">{formatCurrency(22000)}</p>
        </div>
        <div className="text-center py-6 text-[#3a4658]">
          <p>=============================</p>
          <p>Gracias por su compra <br />
            Conserve este comprobante para futuras referencias</p>
        </div>
      </div>
    </div>

  )
}
