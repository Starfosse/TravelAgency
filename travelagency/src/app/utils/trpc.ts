import { createTRPCReact } from "@trpc/react-query"
import type { AppRouter } from "@/server" // pas sûr du "type"

export const trpc = createTRPCReact<AppRouter>({})
