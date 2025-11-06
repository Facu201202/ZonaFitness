'use client'

import { useUserStore } from '@/src/stores/userStore'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useEffect, useState } from 'react'

export default function ReactQueryProvider({ children, userId, userName, userRol }: { children: ReactNode, userId?: string | null, userName?: string | null, userRol?: string | null  }) {
  const [queryClient] = useState(() => new QueryClient())
  const setUserId  = useUserStore((state) => state.setUserId)
  const setUserName  = useUserStore((state) => state.setUserName)
  const userNameState  = useUserStore((state) => state.userName)
  const setUserRol  = useUserStore((state) => state.setUserRol)
  useEffect(() => {
    if (userId) setUserId(Number(userId));
    if (userName) setUserName(userName);
    if(userRol) setUserRol(userRol)
  }, [userId, userNameState, userRol]);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
