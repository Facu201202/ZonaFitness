import { UserPurchase } from "@/src/types";
import Spinner from "../Spinner";
import PurchaseInfoCard from "./PurchaseInfoCard";
import { useQuery } from "@tanstack/react-query";
import ProfileCommentModal from "./ProfileCommentModal";
import ProfileCurrentCommentModal from "./ProfileCurrentCommentModal";

type ProfilePurchasesProps = {
    userId: number
}
export default function ProfilePurchases({ userId }: ProfilePurchasesProps) {

    const fetchPurchase = async (): Promise<UserPurchase[]> => {
        const res = await fetch(`/tienda/perfil/api/userPurchase/${userId}`)
        if (!res.ok) {
            throw new Error("No se pudieron traer las ventas")
        }

        return res.json()
    }
    const { data, isLoading, isError } = useQuery({
        queryKey: ["userPurchase", userId],
        queryFn: () => fetchPurchase()
    })

    return (
        <>
            <h3 className="text-3xl font-medium">Historial de Compras</h3>
            {isLoading &&
                <div className="py-10">
                    <Spinner />
                </div>}
            {isError && <p>No se pudieron traer las ventas</p>}
            {data && (
                data.map(purchase => (
                    <PurchaseInfoCard key={purchase.n_comprobante} userPurchase={purchase} />
                ))
            )}
            
            <ProfileCommentModal/>
            <ProfileCurrentCommentModal/>
        </>
    )
}