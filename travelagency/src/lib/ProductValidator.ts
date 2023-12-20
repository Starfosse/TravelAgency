import { z } from "zod"

export const ProductValidator = z.object({
  name: z.string().min(8, { message: "oups1" }),
  description: z.string().min(20, {
    message: "oups2",
  }),
  price: z.string().min(1, { message: "oups3" }),
})

export type TProductValidator = z.infer<
  typeof ProductValidator
>
