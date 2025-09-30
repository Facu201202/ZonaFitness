import { useQuery } from "@tanstack/react-query";
import ProductCommentCard from "../ProductCommentCard";
import { useState } from "react";
import { RelatedCommentsProduct } from "@/src/types";


export default function ProductComments({ publicationId }: { publicationId: number }) {

    const [page, setpage] = useState(0)

    const getCommentsRelated = async (): Promise<RelatedCommentsProduct[]> => {
        const res = await fetch(`/tienda/inicio/api/comments/${publicationId}/${page}`)
        if (!res.ok) throw new Error('Error al traer comentarios')
        const response = await res.json()
        return response
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ["comments", publicationId, page],
        queryFn: () => getCommentsRelated()
    })

    const handleClick = () => {
        setpage(page + 1)
    }
    return (
        <div className="pt-15">
            <div className="flex flex-col gap-3 lg:flex-row lg:justify-between items-center">
                <h2 className="font-semibold text-2xl">Comentarios y reseñas</h2>
            </div>
            {isLoading && <p className="text-center font-semibold mt-3">...</p>}
            {isError && <p className="text-center font-semibold mt-3">Error al cargar los comentarios</p>}
            {data && data.length === 0 && <p className="text-center font-semibold p-5 bg-gray-100 mt-3">No hay {page > 0 && "mas"} comentarios para este producto</p>}
            {data && (
                <div>
                    <div className="py-7 flex flex-col gap-5">
                        {data.map(comment => (
                            <ProductCommentCard key={comment.id_opinion} name={comment.usuario.usuario} comment={comment.comentario} stars={comment.calificacion} date={comment.fecha} />
                        ))}
                    </div>
                    {data.length === 5 && (
                        <button
                            onClick={() => handleClick()}
                            className="border w-full border-[#2D5DA2] text-[#2D5DA2] py-3 rounded text-center font-semibold hover:bg-[#2D5DA2] hover:text-white hover:cursor-pointer">
                            Cargar más comentarios
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}
