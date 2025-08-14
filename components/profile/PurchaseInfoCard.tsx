import Image from "next/image"
import {StarIcon } from "@heroicons/react/24/outline"

export default function PurchaseInfoCard() {
    return (
        <div className="bg-white px-5 py-8 rounded-2xl shadow flex flex-col gap-4">
            <div className="flex justify-between">
                <div>
                    <p className="text-xl font-semibold">Pedido ORD-001</p>
                    <p className="text-gray-600">2024-01-15</p>
                </div>
                <div className="text-right">
                    <p className="text-xl font-semibold">$89.99</p>
                    <p className="bg-emerald-200 text-emerald-800 font-medium py-1 px-3 rounded-xl text-sm">Entregado</p>
                </div>
            </div>
            <div className="md:flex md:justify-between bg-gray-100 p-4 items-center">
                <div className="flex gap-2 items-center">
                    <Image src={"/user.png"} alt="" width={80} height={80} />
                    <p>Remera TechFit Mujer</p>
                </div>
                <button className="flex mt-3 md:mt-0 gap-2 h-fit bg-white font-semibold shadow border border-gray-200 rounded-xl p-2 hover:cursor-pointer hover:bg-gray-50">
                    <StarIcon className="h-5 w-5" />
                    Reseña
                </button>
            </div>
        </div>
    )
}