import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useSearchParams, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function ChangeStateProductModal({ state }: { state: string }) {
    const [isLoading, setIsLoading] = useState(false)
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString())
    const router = useRouter()
    const stateExist = state ? true : false
    const [productId, productState] = state.split("_")
    const currentState = productState === "true"

    const mutation = useMutation({
        mutationKey: [state],
        mutationFn: async () => {
            setIsLoading(true)
            const res = await fetch("/admin/products/api/changeProductState", {
                method: "POST",
                body: JSON.stringify({ productId, newState: !currentState })
            })
            const response = await res.json()
            if (!res.ok) throw new Error(response.message)
            return response
        },
        onError: (res) => {
            toast.error(res.message)
            setTimeout(() => {
                window.location.href = "/admin/products"
            }, 1500);
        },
        onSuccess: (res) => {
            toast.success(res.message)
            setTimeout(() => {
                window.location.href = "/admin/products"
            }, 1500);
        }
    })

    const handleClick = () => {
        mutation.mutate()
    }

    const handleClose = () => {
        if (isLoading) return
        params.delete("state")
        router.push(`?${params.toString()}`, { scroll: false })
    }

    return (
        <>
            <Transition show={stateExist} as={Fragment}>
                <Dialog onClose={() => handleClose()} className="relative z-50">
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <DialogPanel className="max-w-7xl h-fit space-y-4 rounded-lg bg-white py-5 px-8 overflow-y-auto">
                            {currentState ? (
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-xl">Desactivar Producto</p>
                                    <p  >Desactivar el producto desactiva todas sus publicaciones relacionadas.<br></br> ¿Desea continuar?</p>
                                    <div className="flex gap-3 justify-end">
                                        <button
                                            onClick={() => handleClose()}
                                            disabled={isLoading}
                                            className={`py-2 px-4 rounded-lg border border-gray-300 font-semibold hover:cursor-pointer hover:bg-gray-700 hover:text-white ${isLoading && "pointer-events-none"}`}>
                                            Cancelar
                                        </button>
                                        <button
                                            onClick={() => handleClick()}
                                            disabled={isLoading}
                                            className={`py-2 px-4 rounded-lg bg-orange-600 text-white font-semibold hover:cursor-pointer hover:bg-orange-500 ${isLoading && "pointer-events-none bg-orange-950"}`}>
                                            Desactivar
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-xl">Activar Producto</p>
                                    <p>Al activar el producto, podrá volver a crear publicaciones relacionadas.<br></br> ¿Desea continuar?</p>
                                    <div className="flex gap-3 justify-end">
                                        <button
                                            onClick={() => handleClose()}
                                            disabled={isLoading}
                                            className={`py-2 px-4 rounded-lg border border-gray-300 font-semibold hover:cursor-pointer hover:bg-gray-700 hover:text-white ${isLoading && "pointer-events-none "}`}>
                                            Cancelar
                                        </button>
                                        <button
                                            onClick={() => handleClick()}
                                            disabled={isLoading}
                                            className={`py-2 px-4 rounded-lg bg-emerald-600 text-white font-semibold hover:cursor-pointer hover:bg-emerald-500 ${isLoading && "pointer-events-none bg-emerald-950"}`}>
                                            Activar
                                        </button>
                                    </div>
                                </div>
                            )}
                        </DialogPanel>
                    </div>
                </Dialog>
            </Transition>
        </>


    )
}