import { publicProcedure, router } from "./trpc"

export const appRouter = router({
  greeting: publicProcedure.query(() => "hello tRPC v10!"),
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
