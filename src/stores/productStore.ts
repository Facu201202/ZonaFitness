
import {create} from "zustand"

interface ProductState {
    activeModal: string,
    setActiveModal: (modal: string) => void,
}

export const useProductStore = create<ProductState>()((set) => ({
    activeModal: "Product",
    setActiveModal: (modal) => set({activeModal: modal})
}))