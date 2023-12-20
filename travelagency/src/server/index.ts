import { prisma } from "@/lib/db"
import { publicProcedure, router } from "./trpc"
// import * as z from "zod"
import { z } from "zod"

export const appRouter = router({
  // greeting: publicProcedure.query(() => "hello tRPC v10!"),
  addProduct: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        price: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts
      console.log(input)
      await prisma.product.create({
        data: {
          name: input.name,
          description: input.description,
          price: input.price,
        },
      })
      return { success: true }
    }),
})

export type AppRouter = typeof appRouter

// const getSite = protectedProcedure
// 	.input(z.object({ url: z.string() }))
// 	.query(async ({ ctx, input }) => {
// 		try {
// 			return await prisma.site.findFirst({
// 				where: {
// 					userId: ctx.auth.userId,
// 					url: input.url,
// 				},
// 				include: {
// 					pages: true,
// 				},
// 			});
// 		} catch(e) {
// 			console.log(e)
// 		}

// 	})

// export default getSite;
