import { useProductStore } from "@/src/stores/productStore"
import { formatCurrency } from "@/src/utils"
import { CheckCircleIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline"

export default function SuccessPurchase() {
    const successPurchaseData = useProductStore(state => state.successPurchaseData)
    console.log(successPurchaseData)
    return (
        <div className="max-w-xl select-none">
            <p className="font-bold text-lg lg:text-xl mb-2">¡Compra Confirmada!</p>
            <div className="flex flex-col gap-3">
                <div className="text-center">
                    <CheckCircleIcon className="mx-auto mb-1 w-22 h-22 text-green-500 lg:w-25 lg:h-25" />
                    <p className="text-xl lg:text-2xl font-bold">Tu compra fue exitosa</p>
                    <p className="text-gray-700 font-semibold text-sm lg:text-base">Comprobante <span className="uppercase">{" " + successPurchaseData.n_comprobante}</span></p>
                </div>
                <div className="border border-gray-300 flex flex-col gap-2 rounded-xl shadow p-3 lg:p-5 text-sm lg:text-base">
                    <div className="flex justify-between gap-1">
                        <p className="font-medium">Producto:</p>
                        <p className="font-semibold text-right">{successPurchaseData.publicacion.producto.nombre}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-medium">Total pagado:</p>
                        <p className="font-bold text-green-600">{formatCurrency(successPurchaseData.precio_total)}</p>
                    </div>
                    <div className="flex justify-between font-medium">
                        <p>Entrega:</p>
                        <p>{successPurchaseData.metodo_entrega}</p>
                    </div>
                </div>
                <div className="border border-yellow-500 bg-yellow-50 rounded-xl p-2 text-sm lg:text-base text-center text-yellow-700 font-semibold">
                    <p>¡Importante!</p>
                    <p>Descarga tu comprobante ahora. La aplicación no cuenta con un almacenamiento de los mismo y se perderá si cierras esta ventana sin descargarlo.</p>
                </div>
                <div>
                    <button className="p-2 mb-1 flex gap-2 justify-center items-center border border-gray-400 rounded-xl font-semibold w-full hover:cursor-pointer hover:border-gray-600">
                        <DocumentArrowDownIcon className="h-5 w-5"/> Descargar Comprobante
                    </button>
                    <button className="p-2 text-center bg-black text-white rounded-xl font-semibold w-full hover:cursor-pointer hover:bg-gray-950">
                        Continuar Comprando
                    </button>
                </div>
            </div>

        </div>

    )
}
