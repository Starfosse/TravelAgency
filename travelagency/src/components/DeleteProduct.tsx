"use client"

import { trpc } from "@/app/utils/trpc"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  ProductToDeleteValidator,
  TProductToDeleteValidator,
} from "@/lib/ProductToDeleteValidator"
import MaxWidthWrapper from "./MaxWidthWrapper"

const DeleteProduct = () => {
  const { register, handleSubmit, resetField } =
    useForm<TProductToDeleteValidator>({
      resolver: zodResolver(ProductToDeleteValidator),
    })

  const { mutate: deleteData, isLoading } =
    trpc.deleteProduct.useMutation()

  const onSubmit = ({ id }: TProductToDeleteValidator) => {
    resetField("id")
    deleteData({ id })
  }

  const handleClick = () => resetField("id")
  return (
    <MaxWidthWrapper className="max-w-4xl shadow-2xl py-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col justify-center gap-5">
        <Label htmlFor="id">id</Label>
        <Input
          className="border-black border-2"
          placeholder="id"
          {...register("id")}
        />
        <div className="flex justify-center mt-4">
          <Button onClick={handleClick}>Delete</Button>
        </div>
      </form>
    </MaxWidthWrapper>
  )
}

export default DeleteProduct
