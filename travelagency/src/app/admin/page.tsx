"use client"

import {
  ProductValidator,
  TProductValidator,
} from "@/lib/ProductValidator"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { trpc } from "../utils/trpc"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const admin = () => {
  const {
    register,
    handleSubmit,
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
  }: TProductValidator) => {
    pushData({ name, description, price })
  }
  // const onSubmit = (data) => {
  //   console.log(data)
  // }

  // console.log(watch("name")) // watch input value by passing the name of it
  // console.log(watch("description"))
  // console.log(watch("price"))
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center gap-5 mt-6">
      <Label htmlFor="name">Name</Label>
      <Input
        className="border-black border-2"
        placeholder="name"
        {...register("name")}
      />
      {errors?.name && (
        <p className="text-sm text-red-500">
          {" "}
          {errors.name.message}{" "}
        </p>
      )}
      <Label htmlFor="description">Description</Label>
      <Input
        className="border-black border-2"
        placeholder="description"
        {...register("description")}
      />
      {errors?.description && (
        <p className="text-sm text-red-500">
          {" "}
          {errors.description.message}{" "}
        </p>
      )}
      <Label htmlFor="price">Price</Label>
      <Input
        className="border-black border-2"
        type="text"
        placeholder="price"
        {...register("price")}
      />
      {errors?.price && (
        <p className="text-sm text-red-500">
          {" "}
          {errors.price.message}{" "}
        </p>
      )}
      <Button>Upload</Button>
    </form>
  )
}

export default admin
