"use client"

import { PropsWithChildren, useState } from "react"
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import React from "react"
import { trpc } from "@/app/utils/trpc"

const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
          // You can pass any HTTP headers you wish here
        }),
      ],
    })
  )
  return (
    <trpc.Provider
      client={trpcClient}
      queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default Providers
