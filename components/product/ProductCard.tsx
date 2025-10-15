import Link from "next/link"
import Image from "next/image"
import { useSearchParams, usePathname } from 'next/navigation'
import { findUrlPath, formatCurrency, translateCategory } from "@/src/utils"
import { Categoria } from "@/src/types"
import ReactStars from "react-stars"


type ProductCardProps = {
    id_publication: number,
    price: number,
    discount: number
    name: string,
    category: Categoria,
    src: string,
    opinionsCant: number,
    stars?: {
        opinion: {
            calificacion: number;
        }[];
    }[] | undefined
}

export default function ProductCard({ price, name, category, src, opinionsCant, id_publication, stars, discount }: ProductCardProps) {
    const pathname = usePathname()
    const searchParams = useSearchParams();
    const fullUrl = pathname + '?' + searchParams.toString();
    let total = 0
    if (stars) {
        const isCalificated = stars.filter(star => star.opinion.length > 0 && star)
        total = isCalificated.reduce((acc, star) => { return acc + star.opinion[0].calificacion }, 0)
    }

    return (
        <div className="overflow-hidden rounded-2xl h-full">
            <div className="min-h-64 p-2 relative">

                <Image
                    src={findUrlPath(src, category)}
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
                    <div className="flex gap-2 items-center">
                        <ReactStars
                            count={5}
                            value={opinionsCant > 0 ? total / opinionsCant : 0}
                            size={25}
                            half={true}
                            color2={"#ffd700"}
                            edit={false}
                        />
                        <p className="text-sm text-gray-600">({opinionsCant})</p>
                    </div>
                </div>
                {discount > 0 && (
                    <p className='font-medium text-gray-500 text-xs line-through'>{formatCurrency(price)}</p>
                )}

                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <p className="font-bold text-lg">{discount > 0 ? (formatCurrency(price - ((discount / 100) * price))) : (formatCurrency(price))}</p>
                        {discount > 0 && (
                            <p className='text-green-600 font-semibold text-sm'>{discount}% OFF</p>
                        )}
                    </div>
                    <Link
                        href={`${fullUrl}&producto=${id_publication}`}
                        scroll={false}
                        className="rounded-full px-3 py-1 bg-[#2D5DA2] hover:bg-[#275ca2b6] text-white"
                    >Comprar</Link>
                </div>
            </div>

        </div>
    )
}