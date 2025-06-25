import { useRouter } from "next/navigation"
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid"

type PaginationProps = {
    totalPages: number,
    page: number,
    params: URLSearchParams
}

export default function Pagination({ totalPages, page, params }: PaginationProps) {
    const router = useRouter()
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    const handlePage = (to: string) => {
        if (to === "up") {
            if (params.get("page")) {
                params.delete("page")
                params.append("page", (page + 1).toString())
            } else {
                params.append("page", (page + 1).toString())
            }
            router.push(`?${params.toString()}`)
            return
        }
        if (to === "down") {
            if (params.get("page")) {
                params.delete("page")
                params.append("page", (page - 1).toString())
            } else {
                params.append("page", (page - 1).toString())
            }
            router.push(`?${params.toString()}`)
            return
        }
    }

    const handleSelectPage = (numberPage: number) => {
        if (params.get("page")) {
            params.delete("page")
            params.append("page", (numberPage).toString())
        } else {
            params.append("page", (numberPage).toString())
        }

        router.push(`?${params.toString()}`)
    }

    return (
        <nav className="flex justify-center py-10">
            {page > 1 && (
                <button
                    onClick={() => handlePage("down")}
                    className=" bg-gray-700 text-white p-2  hover:cursor-pointer  hover:bg-gray-800"
                >
                    <ChevronLeftIcon className="w-4 h-4" />
                </button>
            )
            }
            {pages.map(currentPage => (
                <button
                    onClick={() => handleSelectPage(currentPage)}
                    className={`${currentPage === page && "font-bold bg-gray-800"} bg-gray-700 text-white p-2  hover:cursor-pointer  hover:bg-gray-800`}
                >
                    {currentPage}
                </button>
            ))}
            {page < totalPages && (
                <button
                    onClick={() => handlePage("up")}
                    className=" bg-gray-700 text-white p-2  hover:cursor-pointer  hover:bg-gray-800"
                >
                    <ChevronRightIcon className="w-4 h-4" />
                </button>
            )}

        </nav>
    )
}
