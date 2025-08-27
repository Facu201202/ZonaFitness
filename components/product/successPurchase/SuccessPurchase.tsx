import { useProductStore } from "@/src/stores/productStore"

export default function SuccessPurchase() {
     const successPurchaseData = useProductStore(state => state.successPurchaseData)
     console.log(successPurchaseData)
    return (
        <div>
            <p className="text-center font-bold text-green-600">Compra realizada con éxito</p>
        </div>

    )
}
