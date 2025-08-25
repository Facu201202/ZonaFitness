import { useProductStore } from "@/src/stores/productStore"
import { PurchaseData } from "@/src/types"
import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"
import ErrorPurchase from "./ErrorPurchase"


export default function SuccessPurchase() {
    const {currentPurchase} = useProductStore(state => state)

    

    const fetchPurchase = async (data: PurchaseData) => {
        const res = await fetch("/tienda/inicio/api/purchase", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const response = await res.json()
        console.log("funcion")
        if (!res.ok) {
            console.log("error:", response)
        }
        return response
    }

    const {mutate ,isPending, isError, isSuccess} = useMutation({
        mutationKey: ["purchase", [currentPurchase.id_publicacion, currentPurchase.id_usuario]],
        mutationFn: () => fetchPurchase(currentPurchase)
    })

    useEffect(() => {
        if(currentPurchase.id_publicacion && currentPurchase.id_usuario){
            mutate()
        }
    }, [currentPurchase.id_publicacion, currentPurchase.id_usuario])

    if(isPending) return <p>Cargando...</p>
    if(isError) return <ErrorPurchase publication={currentPurchase.id_publicacion}/>

    isSuccess && (
        <div>SuccessPurchase</div>
    )
}
