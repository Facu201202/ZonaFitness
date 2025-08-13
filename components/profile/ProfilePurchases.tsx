import PurchaseInfoCard from "./PurchaseInfoCard";

export default function ProfilePurchases () {
    return(
        <>
            <h3 className="text-3xl font-medium">Historial de Compras</h3>
            <PurchaseInfoCard/>
            <PurchaseInfoCard/>
            <PurchaseInfoCard/>
            <PurchaseInfoCard/>
        </>
    )
}