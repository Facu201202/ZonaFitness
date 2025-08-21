import {create} from "zustand"
import {PurchaseData } from '@/src/types'

interface ProductState {
    activeModal: string,
    currentTotalPurchase: number,
    currentPurchase: PurchaseData,
    setActiveModal: (modal: string) => void,
    setCurrentTotalPurchase: (modal: number) => void,
    setCurrentPurchase: (PurchaseData: PurchaseData) => void

}

export const useProductStore = create<ProductState>()((set) => ({
    activeModal: "Product",
    currentTotalPurchase: 0,
    currentPurchase: {} as PurchaseData,
    setActiveModal: (modal) => set({activeModal: modal}),
    setCurrentTotalPurchase: (total) => set({currentTotalPurchase: total}),
    setCurrentPurchase: (purchase) => set({currentPurchase: purchase})
}))