import MainCommentCard from "@/components/MainCommentCard";
import { MainComment } from "@/src/types";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
export default function MainCommentSection() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["main_comment"],
        queryFn: async (): Promise<MainComment[]> => {
            const res = await fetch("/tienda/inicio/api/comments/mainComments")
            if (!res.ok) throw new Error("Erro al mostrar los comentarios")
            return res.json()
        }
    })
    return (
        <div className="text-center py-10 bg-gray-100">
            <h2 className="text-2xl font-bold">Lo que dicen nuestros clientes</h2>
            <div className="p-12 lg:flex gap-6">
                {isLoading && <Spinner />}
                {isError && <p className="text-center font-semibold mx-auto">Comentarios no disponibles</p>}
                {data && (
                    data.map(comment => (
                        <MainCommentCard comment={comment} key={comment.id_opinion} />
                    ))
                )}
            </div>
        </div>
    )
}
