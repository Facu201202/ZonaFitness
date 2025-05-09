import { StarIcon } from "@heroicons/react/24/solid"

type QualificationProps = {
    stars: number
}

export default function Qualification({ stars }: QualificationProps) {
    return (
        <>
            <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                    <StarIcon
                        key={index}
                        className={`h-4 w-4 ${index < stars ? "text-yellow-500" : "text-gray-600" }`}
                    />
                ))}
            </div>
        </>
    )
}