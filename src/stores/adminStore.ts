import {create} from "zustand"

interface AdminState {
    feacturesPublication: {[key: string]: string;} | null,
    setfeacturesPublication: (feactures: {[key: string]: string;}) => void,
    productLinkPublication: {name: string, category: string, id_product: number, precio: number} | null,
    setproductLinkPublication: (product: {name: string, category: string, id_product: number, precio: number}) => void
    clearProductLinkPublication: () => void
}

export const useAdminStore = create<AdminState>()((set) => ({
    feacturesPublication: null,
    setfeacturesPublication: (feactures) => set({feacturesPublication: feactures}),
    productLinkPublication: null,
    setproductLinkPublication: (product) => set({productLinkPublication: product}),
    clearProductLinkPublication: () => set({productLinkPublication: null})  
}))

