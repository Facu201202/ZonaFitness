import {create} from "zustand"
import {PurchaseData, SuccessPurchaseData } from '@/src/types'

interface ProductState {
    activeModal: string,
    currentTotalPurchase: number,
    currentPurchase: PurchaseData,
    successPurchaseData: SuccessPurchaseData,
    isReceiptSuccess: boolean,
    setActiveModal: (modal: string) => void,
    setCurrentTotalPurchase: (modal: number) => void,
    setCurrentPurchase: (PurchaseData: PurchaseData) => void,
    setsuccessPurchaseData: (PurchaseData: SuccessPurchaseData) => void
    setIsReceiptSuccess: (state: boolean) => void
}

export const useProductStore = create<ProductState>()((set) => ({
    activeModal: "Product",
    currentTotalPurchase: 0,
    currentPurchase: {} as PurchaseData,
    successPurchaseData: {} as SuccessPurchaseData,
    isReceiptSuccess: false,
    setActiveModal: (modal) => set({activeModal: modal}),
    setCurrentTotalPurchase: (total) => set({currentTotalPurchase: total}),
    setCurrentPurchase: (purchase) => set({currentPurchase: purchase}),
    setsuccessPurchaseData: (purchase) => set({successPurchaseData: purchase}),
    setIsReceiptSuccess: (state) => set({isReceiptSuccess: state})
}))