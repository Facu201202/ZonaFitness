import Image from "next/image"
import ReactStars from "react-stars";

type ProductCommentCardProps = {
    name: string,
    comment: string,
    stars: number,
    date: Date
}

export default function ProductCommentCard({ name, comment, stars, date }: ProductCommentCardProps) {
    return (
        <div className="border rounded-lg p-5 border-gray-200 bg-white shadow md:min-w-lg">
            <div className="flex flex-col justify-between md:flex-row">
                <div className="flex items-center gap-3">
                    <Image src="/user.png" alt="User" width={50} height={50} className="rounded-full" />
                    <div className="">
                        <h2 className="font-bold text-lg">{name}.</h2>
                        <p className="text-sm text-gray-400">{new Date(date).toLocaleDateString("es-AR")}</p>
                    </div>
                </div>
                <ReactStars
                    count={5}
                    value={stars}
                    size={35}
                    half={true}
                    color2={"#ffd700"}
                    edit={false}
                />
            </div>
            <p className=" mt-3">{comment}</p>
        </div>
    )
}
