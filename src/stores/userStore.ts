import {create} from "zustand"

interface UserState {
    userId: string | null,
    setUserId: (id: string | null) => void,
    userName: string | null,
    setUserName: (name: string | null) => void,
}

export const useUserStore = create<UserState>()((set) => ({
    userId: null,
    userName: null,
    setUserId: (userId) => set({userId}),
    setUserName: (userName) => set({userName})
}))

