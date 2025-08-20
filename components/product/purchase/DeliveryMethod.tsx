import { formatCurrency } from "@/src/utils"
import { TruckIcon, HomeIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { useRouter, useSearchParams } from 'next/navigation'

export default function DeliveryMethod() {
    const searchParams = useSearchParams();
    const router = useRouter()
    const params = new URLSearchParams(searchParams.toString())

    const handleClick = (method: string) => {
        params.set("entrega", method)
        router.replace(`?${params.toString()}`, { scroll: false })
    }
    return (
        <div className='shadow border border-gray-300 rounded-2xl p-4'>
            <div className="flex gap-2 items-center mb-3">
                <TruckIcon className='w-5 h-5 hidden' />
                <p className="font-medium text-lg">Método de Entrega</p>
            </div>
            <form className="py-5 flex flex-col gap-4">
                <div className="border rounded-lg border-gray-300 p-3 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex gap-3 items-center">
                        <input type="radio" name="deliveryOption" className="accent-black hover:cursor-pointer h-4 w-4" onClick={() => handleClick("home")} />
                        <div className="flex items-center gap-2 flex-1">
                            <HomeIcon className="w-5 h-5" />
                            <div>
                                <p className="font-medium">Entrega a domicilio</p>
                                <p className="text-gray-700 font-medium text-sm sm:text-base">1-3 días hábiles</p>
                                <p className="text-blue-600 text-xs sm:text-sm font-medium">Se usará la dirección de la cuenta</p>
                            </div>
                        </div>
                    </div>
                    <p className="font-medium">{formatCurrency(3000)}</p>
                </div>
                <div className="border rounded-lg border-gray-300 p-3 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center ">
                    <div className="flex gap-3 items-center">
                        <input type="radio" name="deliveryOption" className="accent-black hover:cursor-pointer h-4 w-4" onClick={() => handleClick("store")} />
                        <div className="flex items-center gap-2 flex-1">
                            <MapPinIcon className="w-5 h-5" />
                            <div>
                                <p className="font-medium">Retiro en tienda</p>
                                <p className="text-gray-700 text-sm sm:text-base font-medium">Disponible hoy</p>
                                <p className="text-gray-500 text-xs sm:text-sm font-medium">Dirección de sucursal</p>
                            </div>
                        </div>
                    </div>
                    <p className="font-medium py-1 px-3 rounded-xl bg-gray-100 text-gray-700 text-sm w-fit">Gratis</p>
                </div>
            </form>
        </div>
    )
}
