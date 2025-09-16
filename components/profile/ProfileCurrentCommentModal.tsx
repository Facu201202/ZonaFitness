import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ProfileCurrentComment from './ProfileCurrentComment';

export default function ProfileCurrentCommentModal() {
    const searchParams = useSearchParams();
    const router = useRouter()
    const commentId = searchParams.get("ver_comentario")
    const commentExist = commentId ? true : false

    const handleCloseModal = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.delete("ver_comentario")
        router.replace(`?${params.toString()}`, { scroll: false })
    }

    return (
        <Transition show={commentExist} as={Fragment}>
            <Dialog onClose={() => handleCloseModal()} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel className="w-full min-h-52 md:w-fit max-w-7xl lg:min-w-lg space-y-4 border bg-white p-3 overflow-y-auto">
                        <ProfileCurrentComment commentId={commentId!}/>
                    </DialogPanel>
                </div>
            </Dialog>
        </Transition>
    )
}