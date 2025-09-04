'use client'

import { useUserStore } from '@/src/stores/userStore'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useEffect, useState } from 'react'

export default function ReactQueryProvider({ children, userId, userName }: { children: ReactNode, userId: string | null, userName: string | null  }) {
  const [queryClient] = useState(() => new QueryClient())
  const setUserId  = useUserStore((state) => state.setUserId)
  const setUserName  = useUserStore((state) => state.setUserName)
  useEffect(() => {
    if (userId) setUserId(userId);
    if (userName) setUserName(userName);
  }, [userId, setUserId]);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
