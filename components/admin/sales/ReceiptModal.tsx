import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {SaleDataTable } from '@/src/types'
import Receipt from './Receipt'

type ReceiptModalProps = {
    sale: SaleDataTable
}

export default function ReceiptModal({sale}: ReceiptModalProps) {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString())
    const router = useRouter()
    const receipt = params.get("receipt")
    const receiptExist = receipt ? true : false

    const handleCloseModal = () => {
        params.delete("receipt")
        router.replace(`?${params.toString()}`, { scroll: false })
    }

    return (
        <Transition show={receiptExist} as={Fragment}>
            <Dialog onClose={() => handleCloseModal()} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel className="w-fit max-w-7xl h-full space-y-4 border bg-white p-4 overflow-y-auto">
                        <Receipt sale={sale}/>
                    </DialogPanel>
                </div>
            </Dialog>
        </Transition>
    )
}
