"use client"

import {
  ProductValidator,
  TProductValidator,
} from "@/lib/ProductValidator"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { trpc } from "@/app/utils/trpc"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { uploadFile } from "@/lib/upload.action"

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<TProductValidator>({
    resolver: zodResolver(ProductValidator),
  })
  const { mutate: pushData, isLoading } =
    trpc.addProduct.useMutation()

  const resetAll = () => {
    resetField("name"),
      resetField("description"),
      resetField("price")
    resetField("image1")
    resetField("image2")
  }
  const onSubmit = async ({
    name,
    description,
    price,
    image1,
    image2,
  }: TProductValidator) => {
    const file1: string = await uploadFile(image1[0])
    const file2: string = await uploadFile(image2[0])
    const images: string[] = [file1, file2]
    pushData({ name, description, price, images })
    resetAll()
  }
  return (
    <MaxWidthWrapper className="max-w-4xl shadow-2xl py-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col justify-center gap-5">
        <Label htmlFor="name">Name</Label>
        <Input {...register("name")} />
        <Label htmlFor="description">Description</Label>
        <Input {...register("description")} />
        <Label htmlFor="price">Price</Label>
        <Input type="text" {...register("price")} />
        <Label htmlFor="image1">Image1</Label>
        <Input type="file" {...register("image1")} />
        <Label htmlFor="image2">Image2</Label>
        <Input type="file" {...register("image2")} />
        <div className="flex justify-center">
          <Button className="mt-4">Upload</Button>
        </div>
      </form>
    </MaxWidthWrapper>
  )
}

export default AddProduct
