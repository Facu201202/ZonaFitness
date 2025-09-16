import ProductCommentCard from '../ProductCommentCard';
import DeleteComment from './DeleteComment';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Spinner';
import { UserComment } from '@/src/types';

export default function ProfileCurrentComment({commentId}: {commentId: string}) {

    const getComment = async (): Promise<UserComment> => {
        const res = await fetch(`/tienda/perfil/api/getUserComment/${commentId}`)
        if (!res.ok) throw new Error("Error al traer el comentario")
        return res.json()
    }


    const { data, isLoading, isError } = useQuery({
        queryKey: ["comment", commentId],
        queryFn: async () => getComment(),

    })
    return (
        <div>
            {isLoading && <div className='h-48'><Spinner /></div>}
            {isError && <p>Error al traer el comentario</p>}
            {data && (
                <div className='flex flex-col gap-2'>
                    <div className='self-end'>
                        <DeleteComment commentId={+commentId!} />
                    </div>

                    <ProductCommentCard name={data.usuario.cliente.nombre} comment={data.comentario} stars={data.calificacion} date={data.fecha} />
                </div>
            )}
        </div>
    )
}
