import { useProductStore } from "@/src/stores/productStore"
import { PurchaseData } from "@/src/types"
import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"
import ErrorPurchase from "./ErrorPurchase"

type SuccessPurchaseProps = {
    deleteParamsFunction: () => void
}

export default function SuccessPurchase({deleteParamsFunction}: SuccessPurchaseProps) {
    const {currentPurchase} = useProductStore(state => state)
    const fetchPurchase = async (data: PurchaseData) => {
        const res = await fetch("/tienda/inicio/api/purchase", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const response = await res.json()
        if (!res.ok) {
            console.log("error:", response)
        }
        console.log(response)
        return response
    }

    const mutation = useMutation({
        mutationKey: ["purchase", [currentPurchase.id_publicacion, currentPurchase.id_usuario]],
        mutationFn: () => fetchPurchase(currentPurchase)
    })

    useEffect(() => {
        if(currentPurchase.id_publicacion && currentPurchase.id_usuario){
            mutation.mutate()
        }
    }, [currentPurchase.id_publicacion, currentPurchase.id_usuario])

    if(mutation.isPending) return <p>Cargando...</p>
    if(mutation.isError) return <ErrorPurchase publication={currentPurchase.id_publicacion} deleteParamsFunction={deleteParamsFunction}/>

    return (
        <div>
            {mutation.isSuccess && <p>Success</p>}
        </div>
    )
}
