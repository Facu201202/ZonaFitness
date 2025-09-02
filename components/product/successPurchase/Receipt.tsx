import { formatCurrency } from "@/src/utils"
import { RefObject, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import Spinner from "@/components/Spinner"
import { PurchaseInfo } from "@/src/types"
import { useProductStore } from "@/src/stores/productStore"

type ReceiptProps = {
  receiptRef: RefObject<HTMLDivElement | null>,
  purchaseId: number
}

export default function Receipt({ receiptRef, purchaseId }: ReceiptProps) {
  const setIsReceiptSuccess = useProductStore(state => state.setIsReceiptSuccess)
  const fecthCurrentPurchase = async (): Promise<PurchaseInfo> => {
    const res = await fetch(`/tienda/inicio/api/purchase/${purchaseId}`)
    if (!res.ok) throw new Error("Error al generar el comprobante")
    return res.json()
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ["currentPurchase", purchaseId],
    queryFn: () => fecthCurrentPurchase(),
  })

  useEffect(() => {
    if (data) {
      setIsReceiptSuccess(true)
    }
  }, [data])

  if (isLoading) return <Spinner />
  if (isError) return <p>Error en generar el comprobante</p>
  if (data) return (
    <div ref={receiptRef} className="flex items-center justify-center">
      <div className="w-lg p-2">
        <p className="font-bold text-xl uppercase text-center">Comprobante de compra</p>
        <p className="text-center">=============================</p>
        <div className="py-4 flex flex-col gap-2 border-b border-[#D1D5DC]">
          <div className="flex justify-between">
            <p className="text-[#364153] font-bold">ID:</p>
            <p className="text-[#3a4658] font-semibold uppercase">{data.n_comprobante}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#364153] font-bold">Fecha:</p>
            <p className="text-[#3a4658] font-semibold uppercase">{new Date(data.fecha).toLocaleDateString("es-AR")}</p>
          </div>
        </div>
        <div className="py-4 flex flex-col gap-2 border-b border-[#D1D5DC]">
          <p className="text-[#364153] font-bold uppercase mb-3">Producto:</p>
          <div className="px-4 flex flex-col gap-2 bg-[#F9FAFB] py-3 rounded-xl">
            <p className="text-[#364153] font-bold">{data.publicacion.producto.nombre}</p>
            <div className="flex justify-between">
              <p className="text-[#474e72]  font-medium">Talle:</p>
              <p className="text-[#364153] font-semibold uppercase">{data.talle}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#474e72] font-medium">Cantidad:</p>
              <p className="text-[#364153] font-semibold uppercase">{data.cantidad}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#474e72]  font-medium">Precio:</p>
              <p className="text-[#00A63E] font-bold uppercase">{formatCurrency((data.precio_total - (data.taxes + data.deliveryPrice)))}</p>
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
              <p className="text-[#364153] font-semibold">{data.metodo_entrega}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#474e72]font-medium">Costo:</p>
              <p className="text-[#155DFC] font-bold uppercase">{formatCurrency(data.deliveryPrice)}</p>
            </div>
          </div>

        </div>
        <div className="py-4 flex flex-col gap-2 border-b border-[#D1D5DC]">
          <p className="text-[#364153] font-bold uppercase mb-3">Pago:</p>
          <div className="px-4 flex flex-col gap-2 bg-[#FDF4FF] py-3 rounded-xl">
            <div className="flex justify-between">
              <p className="text-[#474e72] font-medium">Método:</p>
              <p className="text-[#364153] font-semibold">{data.metodo_pago.replace(/_/g, " ")}</p>
            </div>
          </div>

        </div>
        <div className="flex justify-between text-[#FFFFFF] font-bold bg-[#101828] p-4 rounded-xl text-xl">
          <p className="font-medium uppercase ">Total:</p>
          <p className="">{formatCurrency(data.precio_total)}</p>
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
