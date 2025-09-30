import Link from "next/link"
import Image from "next/image"
import { useSearchParams, usePathname } from 'next/navigation'
import { formatCurrency, translateCategory } from "@/src/utils"
import { Categoria } from "@/src/types"
import ReactStars from "react-stars"


type ProductCardProps = {
    id_publication: number,
    price: number,
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

export default function ProductCard({ price, name, category, src, opinionsCant, id_publication, stars }: ProductCardProps) {
    const pathname = usePathname()
    const searchParams = useSearchParams();
    const fullUrl = pathname + '?' + searchParams.toString();
    let total = 0
    if (stars) {
        const isCalificated = stars.filter( star => star.opinion.length > 0 && star)
        total = isCalificated.reduce((acc, star) => { return acc + star.opinion[0].calificacion }, 0)
    }

    return (
        <div className="overflow-hidden rounded-2xl h-full">
            <div className="min-h-64 p-2 relative">

                <Image
                    src={`/products/${translateCategory(category)}/` + src}
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
                <div className="flex justify-between">
                    <p className="font-bold">{formatCurrency(price)}</p>
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