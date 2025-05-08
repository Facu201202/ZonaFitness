
type PopularCategoryProps = {
    src: string,
    name: string
}


export default function PopularCategory({ src, name }: PopularCategoryProps) {
    return (
        <div className="relative w-60 h-80 overflow-hidden rounded-lg shadow-lg group">
            <img
                src={src}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 duration-300 "
            />
            <div className="absolute inset-0 group-hover:bg-black/10  transition-colors duration-300 z-10 group-hover:cursor-pointer" />
            <p className="absolute bottom-0 w-full bg-black/30 text-white text-2xl py-3">
                {name}
            </p>
        </div>
    )
}
