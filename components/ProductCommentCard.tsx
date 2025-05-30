import Image from "next/image"
import Qualification from "./Qualification"

type ProductCommentCardProps = {
    name: string,
    comment: string,
    stars: number,
    date: string
}

export default function ProductCommentCard({ name, comment, stars, date }: ProductCommentCardProps) {
    return (
        <div className="border rounded-lg p-5 border-gray-200">
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                    <Image src="/user.png" alt="User" width={50} height={50} className="rounded-full" />
                    <div className="">
                        <h2 className="font-bold text-lg">{name}.</h2>
                        <p className="text-sm text-gray-400">{date}</p>
                    </div>
                </div>
                <Qualification stars={stars} width="w-5" height="h-5"/>
            </div>
            <p className=" mt-3">{comment}</p>
        </div>
    )
}
