import {create} from "zustand"

interface UserState {
    userId: number,
    setUserId: (id: number) => void,
    userName: string | null,
    setUserName: (name: string | null) => void,
}

export const useUserStore = create<UserState>()((set) => ({
    userId: 0,
    userName: null,
    setUserId: (userId) => set({userId}),
    setUserName: (userName) => set({userName})
}))

