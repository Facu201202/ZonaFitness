import Link from "next/link"
import Image from "next/image"
import Qualification from "../Qualification"
import { useState } from "react"
import { formatCurrency } from "@/src/utils"
import { HeartIcon } from "@heroicons/react/24/solid"
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline"

type ProductCardProps = {
    price: number,
    name: string,
    category: string,
    src: string,
    opinionsCant: number
}

export default function ProductCard({ price, name, category, src, opinionsCant }: ProductCardProps) {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div className="overflow-hidden rounded-2xl h-full">
            <div className="min-h-64 p-2 relative">
                {isClicked ? (
                    <HeartIcon
                        className="absolute h-6 w-6 right-1.5 z-10 hover:text-[#2D5DA2]"
                        onClick={handleClick}
                    />
                ) : (
                    <HeartIconOutline
                        className="absolute h-6 w-6 right-1.5 z-10 hover:text-[#2D5DA2]"
                        onClick={handleClick} />
                )}

                <Image
                    src={src}
                    alt={category}
                    className="object-contain mx-auto z-0"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>
            <div className="bg-gray-100 min-h-36 p-4 flex flex-col justify-between">
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