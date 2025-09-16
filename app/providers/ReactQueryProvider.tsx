'use client'

import { useUserStore } from '@/src/stores/userStore'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useEffect, useState } from 'react'

export default function ReactQueryProvider({ children, userId, userName }: { children: ReactNode, userId?: string | null, userName?: string | null  }) {
  const [queryClient] = useState(() => new QueryClient())
  const setUserId  = useUserStore((state) => state.setUserId)
  const setUserName  = useUserStore((state) => state.setUserName)
  const userNameState  = useUserStore((state) => state.userName)
  useEffect(() => {
    if (userId) setUserId(Number(userId));
    if (userName) setUserName(userName);
  }, [userId, userNameState]);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
