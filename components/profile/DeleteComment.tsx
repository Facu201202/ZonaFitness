import { TrashIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

export default function DeleteComment({ commentId }: { commentId: number }) {
  const [confirm, setConfirm] = useState({
    show: false,
    isloading: false
  })

  const deleteComment = async () => {
    setConfirm({ ...confirm, isloading: true })
    const res = await fetch(`/tienda/perfil/api/deleteComment`, {
      method: "DELETE",
      body: JSON.stringify(commentId)
    })
    if (!res.ok) {
      toast.error("Error al eliminar el comentario")
      setTimeout(() => {
        setConfirm({ isloading: false, show: false })
      }, 2000);
      console.log("error cayo aca")
      throw new Error("Error al eliminar el comentario")
    }
    const response = await res.json()
    return response
  }

  const handleClick = () => {
    setConfirm({ ...confirm, show: true })
  }


  const mutate = useMutation({
    mutationKey: ["deleteOpinion", [commentId]],
    mutationFn: async () => deleteComment(),
    onSuccess: () => {
      window.location.href = "/tienda/perfil"
    }
  })

  const handleClose = () => {
    if (confirm.isloading) return
    setConfirm({ ...confirm, show: false })
  }

  return (
    <>
      <button className="p-1 text-center bg-red-400 text-white rounded hover:bg-red-500 hover:cursor-pointer" onClick={() => handleClick()}>
        <TrashIcon className="h-4 w-4 text-right" />
      </button>

      <Transition show={confirm.show} as={Fragment}>
        <Dialog onClose={() => handleClose()} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="max-w-7xl h-fit space-y-4 border bg-white py-3 px-10 overflow-y-auto">
              <div className="text-center">
                <p className="text-xl font-semibold">¿Eliminar?</p>
                <div className="mt-2 flex gap-3 justify-center">
                  <button
                    disabled={confirm.isloading}
                    onClick={() => mutate.mutate()}
                    className={`bg-emerald-500 rounded p-1 hover:bg-emerald-600 hover:cursor-pointer ${confirm.isloading && "disabled:opacity-50 disabled:pointer-events-none"}`}>
                    <CheckIcon className="w-5 h-5 text-white" />
                  </button>
                  <button
                    disabled={confirm.isloading}
                    onClick={() => setConfirm({ ...confirm, show: false })}
                    className={`bg-red-500 rounded p-1 hover:bg-red-600 hover:cursor-pointer ${confirm.isloading && "disabled:opacity-50 disabled:pointer-events-none"}`}>
                    <XMarkIcon className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </Transition>
    </>


  )
}
