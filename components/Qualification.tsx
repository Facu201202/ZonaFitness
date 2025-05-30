import { StarIcon } from "@heroicons/react/24/solid"

type QualificationProps = {
    stars: number,
    width: string,
    height: string
}

export default function Qualification({ stars, width, height }: QualificationProps) {
    return (
        <>
            <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                    <StarIcon
                        key={index}
                        className={`${height} ${width} ${index < stars ? "text-yellow-500" : "text-gray-600" }`}
                    />
                ))}
            </div>
        </>
    )
}