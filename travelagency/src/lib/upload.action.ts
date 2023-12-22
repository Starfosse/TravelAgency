"use sever"

import { put } from "@vercel/blob"

export const uploadFile = async (image: File) => {
  console.log("hello")
  const filename = image.name
  const blob = await put(filename, image, {
    access: "public",
  })
  return blob.url
}
