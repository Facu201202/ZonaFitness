import { useProductStore } from "@/src/stores/productStore"
import { PurchaseData } from "@/src/types"


export default function SuccessPurchase() {
    const {currentPurchase} = useProductStore(state => state)

    console.log(currentPurchase)
    /*
    const fetchPurchase = async (data: PurchaseData) => {
        const res = await fetch("/tienda/inicio/api/purchase", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const response = await res.json()

        if (!res.ok) {
            console.log("error:", response)
        }
        return response
    }*/
    return (
        <div>SuccessPurchase</div>
    )
}
