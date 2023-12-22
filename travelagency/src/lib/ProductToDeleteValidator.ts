import { z } from "zod"

export const ProductToDeleteValidator = z.object({
  id: z.string().min(8, { message: "oups1" }),
})

export type TProductToDeleteValidator = z.infer<
  typeof ProductToDeleteValidator
>
