"use sever"

import { put } from "@vercel/blob"

export const uploadFile = async (image: File) => {
  const blob = await put(image.name, image, {
    access: "public",
    token:
      "vercel_blob_rw_4TqGkn0XBL64Tk3A_e3ROsYHTgmQPT369hT804kBgMpbUf3",
  })
  return blob.url
}
