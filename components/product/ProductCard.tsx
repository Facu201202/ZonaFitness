import Link from "next/link"
import Qualification from "../Qualification"
import { formatCurrency } from "@/src/utils"

type ProductCardProps = {
    price: number,
    name: string,
    category: string,
    src: string,
    opinionsCant: number
}

export default function ProductCard({ price, name, category, src, opinionsCant }: ProductCardProps) {
    return (
        <div className="overflow-hidden rounded-2xl h-full">
            <div className="h-64 p-2">
                <img
                    src={src}
                    alt={category}
                    className="w-auto h-full mx-auto"
                />
            </div>
            <div className="bg-gray-100 h-36 p-4 flex flex-col justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-gray-600">{category}</p>
                    <p>{name}</p>
                    <div className="flex gap-2">
                        <Qualification stars={4} />
                        <p className="text-sm text-gray-600">({opinionsCant})</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="font-bold">{formatCurrency(price)}</p>
                    <Link
                        href={""}
                        className="rounded-full px-3 py-1 bg-[#2D5DA2] hover:bg-[#275ca2b6] text-white"
                    >Comprar</Link>
                </div>
            </div>

        </div>
    )
}