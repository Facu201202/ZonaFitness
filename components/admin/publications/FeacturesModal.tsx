import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useSearchParams, useRouter } from "next/navigation";
import { useAdminStore } from '@/src/stores/adminStore';


export default function FeacturesModal() {
    const feacturesPublication = useAdminStore(state => state.feacturesPublication)
    const router = useRouter()
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString())
    const feacturesExist = params.get("feactures") ? true : false

    const handleClose = () => {
        params.delete("feactures")
        router.push(`?${params.toString()}`, { scroll: false })
    }
    return (
        <>
            <Transition show={feacturesExist} as={Fragment}>
                <Dialog onClose={() => handleClose()} className="relative z-50">
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <DialogPanel className="max-w-7xl h-fit space-y-4 rounded-lg bg-white py-5 px-8 overflow-y-auto">
                            {feacturesPublication ? (
                                Object.entries(feacturesPublication).map(([key, value]) => (
                                    <div className='flex items-center' key={key}>
                                        <p className='text-[#2D5DA2] bg-[#EAEEF6] rounded-2xl p-1 mr-2'>✓</p>
                                        <p className='font-semibold w-1/2 my-2 mr-4 text-sm lg:text-base' key={key}>{key}:</p>
                                        <p className='text-sm lg:text-base'>{value}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No hay caracteristicas</p>
                            )}

                        </DialogPanel>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
