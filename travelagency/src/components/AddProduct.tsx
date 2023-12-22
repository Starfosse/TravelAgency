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

  const onSubmit = ({
    name,
    description,
    price,
  }: // image,
  TProductValidator) => {
    console.log("hello1")
    // console.log(image)
    // console.log(uploadFile(image))
    pushData({ name, description, price })
  }
  // const handleClick = () => {
  //   resetField("name"),
  //     resetField("description"),
  //     resetField("price")
  // }
  return (
    <MaxWidthWrapper className="max-w-4xl shadow-2xl py-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col justify-center gap-5">
        <Label htmlFor="name">Name</Label>
        <Input {...register("name")} />
        {/* {errors?.name && (
          <p className="text-sm text-red-500">
            {" "}
            {errors.name.message}{" "}
          </p>
        )} */}
        <Label htmlFor="description">Description</Label>
        <Input {...register("description")} />
        {/* {errors?.description && (
          <p className="text-sm text-red-500">
            {" "}
            {errors.description.message}{" "}
          </p>
        )} */}
        <Label htmlFor="price">Price</Label>
        <Input type="text" {...register("price")} />
        {/* {errors?.price && (
          <p className="text-sm text-red-500">
            {" "}
            {errors.price.message}{" "}
          </p>
        )} */}
        {/* <Label htmlFor="image">Image</Label>
        <Input type="file" {...register("image")} /> */}
        <div className="flex justify-center">
          <Button className="mt-4">
            {" "}
            {/*/ onClick={handleClick}>*/}
            Upload
          </Button>
        </div>
      </form>
    </MaxWidthWrapper>
  )
}

export default AddProduct
