import { useProductStore } from "@/src/stores/productStore"
import { formatCurrency } from "@/src/utils"
import { CheckCircleIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline"
import html2pdf from "html2pdf.js"
import { useLayoutEffect, useRef, useState } from "react"
import Receipt from "./Receipt"

export default function SuccessPurchase() {
    const successPurchaseData = useProductStore(state => state.successPurchaseData)
    const isReceiptSuccess = useProductStore(state => state.isReceiptSuccess)
    const [isReceiptActive, setIsReceiptActive] = useState(false)
    const receiptRef = useRef<HTMLDivElement>(null)
    const createPDF = () => {
        if (!receiptRef.current) return
        const opt = {
            margin: 0.2,
            filename: `Recibo_${successPurchaseData.n_comprobante}`,
            image: { type: "jpeg", quality: 1 },
            html2canvas: {
                scale: 2,
            },
            jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
        }
        html2pdf().set(opt).from(receiptRef.current).save()
    }

    useLayoutEffect(() => {
        console.log("hola desde el effect")
        if (isReceiptActive && receiptRef.current && isReceiptSuccess) {
            console.log("si paso")
            setTimeout(() => {
                createPDF()
            }, 1000);
        }
    }, [isReceiptActive, isReceiptSuccess])

    return (
        <div className="max-w-lg select-none h-full">
            {isReceiptActive ? <Receipt receiptRef={receiptRef} purchaseId={successPurchaseData.id_venta} /> : (
                <div>
                    <p className="font-bold text-lg lg:text-xl mb-1">¡Compra Confirmada!</p>
                    <div className="flex flex-col gap-2">
                        <div className="text-center">
                            <CheckCircleIcon className="mx-auto mb-1 w-22 h-22 text-green-500 lg:w-25 lg:h-25" />
                            <p className="text-xl lg:text-2xl font-bold">Tu compra fue exitosa</p>
                            <p className="text-gray-700 font-semibold text-sm lg:text-base">Comprobante <span className="uppercase">{" " + (successPurchaseData.n_comprobante || "Ven-vdpja321ds")}</span></p>
                        </div>
                        <div className="border border-gray-300 flex flex-col gap-2 rounded-xl shadow p-3 lg:p-5 text-sm lg:text-base">
                            <div className="flex justify-between gap-1">
                                <p className="font-medium">Producto:</p>
                                <p className="font-semibold text-right">{successPurchaseData.publicacion?.producto?.nombre || "Remera Negra Deportiva"}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-medium">Total pagado:</p>
                                <p className="font-bold text-green-600">{formatCurrency(successPurchaseData.precio_total || 20000)}</p>
                            </div>
                            <div className="flex justify-between font-medium">
                                <p>Entrega:</p>
                                <p>{successPurchaseData.metodo_entrega || "a domicilio"}</p>
                            </div>
                        </div>
                        <div className="border border-yellow-500 bg-yellow-50 rounded-xl p-2 text-sm lg:text-base text-center text-yellow-700 font-semibold">
                            <p>¡Importante!</p>
                            <p>Descarga tu comprobante ahora. La aplicación no cuenta con un almacenamiento de los mismo y se perderá si cierras esta ventana sin descargarlo.</p>
                        </div>
                        <div>
                            <button
                                onClick={() => setIsReceiptActive(true)}
                                className="p-2 mb-1 flex gap-2 justify-center items-center border border-gray-400 rounded-xl font-semibold w-full hover:cursor-pointer hover:border-gray-600"
                            >
                                <DocumentArrowDownIcon className="h-5 w-5" /> Descargar Comprobante
                            </button>
                            <button className="p-2 text-center bg-black text-white rounded-xl font-semibold w-full hover:cursor-pointer hover:bg-gray-950">
                                Continuar Comprando
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}
