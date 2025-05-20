import Image from "next/image"

type PopularCategoryProps = {
    src: string,
    name: string
}


export default function PopularCategory({ src, name }: PopularCategoryProps) {
    return (
        <div className="relative 2xl:w-72 2xl:h-96 lg:w-56 lg:h-72 w-44 h-52  overflow-hidden rounded-lg shadow-lg group">
            <Image
                src={src}
                alt={name}
                className=" object-cover group-hover:scale-110 duration-300"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 group-hover:bg-black/10  transition-colors duration-300 z-10 group-hover:cursor-pointer" />
            <p className="absolute bottom-0 w-full bg-black/30 text-white text-2xl py-3">
                {name}
            </p>
        </div>
    )
}
