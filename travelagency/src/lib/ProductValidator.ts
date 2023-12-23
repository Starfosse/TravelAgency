import { z } from "zod"

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/PNG",
  "*/png",
  "*/PNG",
]

export const ProductValidator = z.object({
  name: z.string().min(2, { message: "oups1" }),
  description: z.string().min(1, {
    message: "oups2",
  }),
  price: z.string().min(1, { message: "oups3" }),
  image1: z.any(),
  // .refine(
  //   (file) => file?.size <= MAX_FILE_SIZE,
  //   `Max image size is 5MB.`
  // )
  // .refine(
  //   (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
  //   "Only .jpg, .jpeg, .png and .webp formats are supported."
  // ),
  image2: z.any(),
})

export type TProductValidator = z.infer<
  typeof ProductValidator
>
