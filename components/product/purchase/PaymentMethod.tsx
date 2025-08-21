import { useProductStore } from "@/src/stores/productStore"
import { useUserStore } from "@/src/stores/userStore"
import { formatCurrency } from "@/src/utils"
import { CreditCardIcon, WalletIcon } from "@heroicons/react/24/outline"
import { useQuery } from "@tanstack/react-query"
import { useRouter, useSearchParams } from 'next/navigation'

export default function PaymentMethod() {
    const searchParams = useSearchParams();
    const router = useRouter()
    const params = new URLSearchParams(searchParams.toString())
    const userId = useUserStore(state => state.userId)
    const currentTotalPurchase = useProductStore(state => state.currentTotalPurchase)

    const fetchUserbalance = async (): Promise<{ saldo: number}> => {
        const res = await fetch(`/tienda/inicio/api/balance/${userId}`)
        if (!res.ok) throw new Error("Saldo no encontrado")
        return res.json()
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ["saldo", userId],
        queryFn: () => fetchUserbalance(),
        enabled: userId ? true : false
    })

    const handleClick = (method: string) => {
        params.set("pago", method)
        router.replace(`?${params.toString()}`, { scroll: false })
    }


    if (isLoading) return <p className="text-center font-bold">...</p>
    if (isError) return <p className="text-center font-bold">Error inesperado, intentelo de nuevo más tarde</p>

    if (data) return (
        <div className='shadow border border-gray-300 rounded-2xl p-4'>
            <div className="flex gap-2 items-center mb-3">
                <CreditCardIcon className='w-5 h-5' />
                <p className="font-medium text-lg">Método de Pago</p>
            </div>
            <form className="py-5 flex flex-col gap-4">
                <div className={`border rounded-lg border-gray-300 p-3 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center ${data.saldo < currentTotalPurchase && "text-gray-400 select-none pointer-events-none"}`}>
                    <div className="flex gap-3 items-center">
                        <input type="radio" name="deliveryOption" value={"Home"} className={`accent-black hover:cursor-pointer h-4 w-4  ${data.saldo < currentTotalPurchase ? "hidden" : ""}`}  onClick={() => handleClick("storeWallet")}/>
                        <div className="flex items-center gap-2 flex-1">
                            <WalletIcon className={`w-5 h-5  ${data.saldo < currentTotalPurchase ? "text-gray-400" : "text-emerald-700"}`}/>
                            <div>
                                <p className="font-medium">Dinero en cuenta</p>
                                <p className={`text-sm sm:text-base font-medium ${data.saldo < currentTotalPurchase ? "text-gray-300" : "text-gray-700"}`}>Saldo Disponible: {formatCurrency(data.saldo)}</p>
                            </div>
                        </div>
                    </div>
                    <p className={`font-medium py-1 px-3 rounded-xl text-sm w-fit ${data.saldo < currentTotalPurchase ? "bg-gray-50 text-gray-400" : "bg-emerald-200 text-emerald-800"}`}>{data.saldo < currentTotalPurchase ? "Insuficiente" : "Disponible"}</p>
                </div>
                <div className="border rounded-lg border-gray-300 p-3 flex flex-col justify-between gap-3 sm:flex-row sm:justify-between sm:items-center text-gray-400 select-none pointer-events-none " >
                    <div className="flex gap-3 items-center">
                        <input type="radio" name="deliveryOption" value={"store"} className="accent-black hover:cursor-pointer h-4 w-4 hidden" />
                        <div className="flex items-center gap-2 flex-1">
                            <CreditCardIcon className="w-5 h-5" />
                            <div>
                                <p className="font-medium">Tarjeta de débito</p>
                                <p className="text-gray-300 font-medium ">Próximamente disponible</p>
                            </div>
                        </div>
                    </div>
                    <p className="font-medium py-1 px-3 rounded-xl bg-gray-50 text-gray-400 text-sm w-fit">Próximamente</p>
                </div>
            </form>
        </div>
    )
}
