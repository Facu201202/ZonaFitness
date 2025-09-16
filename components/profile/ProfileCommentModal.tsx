import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ReactStars from "react-stars";
import { useUserStore } from '@/src/stores/userStore';
import { useMutation } from '@tanstack/react-query';
import { OpinionData } from '@/src/types';
import ErrorMessage from '../ErrorMessage';

export default function ProfileCommentModal() {
  const userid = useUserStore(state => state.userId)
  const [opinion, setOpinion] = useState({
    rating: 0,
    comment: ""
  });
  const [mutateState, setMutateState] = useState({
    error: false,
    success: false,
    loading: false
  })
  const searchParams = useSearchParams();
  const router = useRouter()
  const purchaseId = searchParams.get("comentario")
  const commentExist = purchaseId ? true : false


  const fetchPurchase = async (data: OpinionData) => {
    setMutateState({ ...mutateState, loading: true })
    const res = await fetch("/tienda/perfil/api/userNewComment", {
      method: "POST",
      body: JSON.stringify(data)
    })
    const response = await res.json()
    if (!res.ok) {
      throw new Error(response.errors || "Error al enviar el comentario")
    }
    setMutateState({ ...mutateState, loading: false })
    return response
  }

  const mutation = useMutation({
    mutationKey: ["newOpinion", [userid, purchaseId]],
    mutationFn: (data: OpinionData) => fetchPurchase(data),
    onError: () => {
      setMutateState({ ...mutateState, error: true })
    },
    onSuccess: () => {
       window.location.href = "/tienda/perfil"
    }
  })

  const handleCloseModal = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete("comentario")
    router.replace(`?${params.toString()}`, { scroll: false })
    setOpinion({ rating: 0, comment: "" })
    setMutateState({ error: false, success: false, loading: false })
  }

  const ratingChanged = (newRating: number) => {
    setOpinion({ ...opinion, rating: newRating });
  };

  const handleSubmit = () => {
    if (!userid || !purchaseId) return;
    if (opinion.rating === 0 || opinion.comment.trim() === "") {
      setMutateState({ ...mutateState, error: true })
      setTimeout(() => {
        setMutateState({ ...mutateState, error: false })
      }, 3000)
      return
    }
    const newOpinion: OpinionData = {
      rating: opinion.rating,
      comment: opinion.comment,
      userId: userid,
      purchaseId: Number(purchaseId)
    }
    mutation.mutate(newOpinion)
  }

  return (
    <Transition show={commentExist} as={Fragment}>
      <Dialog onClose={() => handleCloseModal()} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-fit max-w-7xl h-fit space-y-4 border bg-white p-8 overflow-y-auto">
            <form className='flex flex-col gap-2' onSubmit={(e) => { e.preventDefault(), handleSubmit() }}>
              <div>
                <label htmlFor="comment" className='font-semibold'>Dejanos tu comentario acerca del producto:</label>
                <textarea
                  name="comment"
                  id="comment"
                  cols={50}
                  rows={5}
                  className='border w-full p-2 mt-3 resize-none'
                  onChange={(e) => setOpinion({ ...opinion, comment: e.target.value })}></textarea>
              </div>
              <div>
                <ReactStars
                  count={5}              // cantidad de estrellas
                  value={opinion.rating}         // valor actual
                  onChange={ratingChanged}
                  size={40}              // tamaño de la estrella
                  half={true}            // permite medias estrellas
                  color2={"#ffd700"}     // color cuando está activa
                />
              </div>
              <button
                className={`rounded-full px-3 py-1 bg-[#2D5DA2] hover:bg-[#275ca2b6] text-white self-end hover:cursor-pointer ${mutateState.loading && "pointer-events-none bg-[#275ca2b6]"}`}>
                Comentar
              </button>

            </form>
            {mutateState.error && <ErrorMessage>Hubo un error al enviar tu comentario. Por favor, intenta nuevamente.</ErrorMessage>}
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  )
}