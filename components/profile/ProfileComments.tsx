import { useQuery } from "@tanstack/react-query";
import ProductCommentCard from "../ProductCommentCard";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { UserCommentList } from "@/src/types";

export default function ProfileComments({ userId }: { userId: number }) {

    const getComments = async (): Promise<UserCommentList[]> => {
        const res = await fetch(`/tienda/perfil/api/getUserCommentList/${userId}`)
        if (!res.ok) throw new Error("Error al traer los comentarios")

        return res.json()
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ['comments',],
        queryFn: () => getComments()
    })
    return (
        <div>
            <h3 className="text-3xl font-medium">Mis Reseñas</h3>
            {isLoading && <Spinner />}
            {isError && <ErrorMessage>Error al cargar los comentarios</ErrorMessage>}
            {data && data.length === 0 && <p className="text-center">No hay comentarios para mostrar</p>}
            {data && (
                <div className="py-7 flex flex-col gap-5">
                    {data.map((comment) => (
                        <ProductCommentCard key={comment.id_opinion} name={comment.usuario.cliente.nombre} comment={comment.comentario} stars={comment.calificacion}
                            date={comment.fecha} />
                    ))}
                </div>
            )}
        </div>
    )
}
