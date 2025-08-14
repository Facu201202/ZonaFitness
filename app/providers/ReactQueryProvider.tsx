'use client'

import { useUserStore } from '@/src/stores/userStore'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useEffect, useState } from 'react'

export default function ReactQueryProvider({ children, userId }: { children: ReactNode, userId: string | null }) {
  const [queryClient] = useState(() => new QueryClient())
  const setUserId  = useUserStore((state) => state.setUserId)
  useEffect(() => {
    if (userId) setUserId(userId);
  }, [userId, setUserId]);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
