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

  const product = trpc.getIdProduct.useQuery({
    name: "Venise",
  })
  console.log(product.data?.id)

  const { mutate: deleteData, isLoading } =
    trpc.deleteProduct.useMutation()

  const onSubmit = ({ id }: TProductToDeleteValidator) => {
    console.log("lol")
    deleteData({ id })
    resetField("id")
  }
  // console.log(getIdProductQuery)

  const { mutate: deleteAllProducts } =
    trpc.deleteProducts.useMutation()
  const onSubmit2 = () => {
    deleteAllProducts()
  }

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
          <Button>Delete (specific id)</Button>
        </div>
      </form>
      <div className="flex justify-center mt-8">
        <Button onClick={onSubmit2}>
          Delete all products
        </Button>
      </div>
    </MaxWidthWrapper>
  )
}

export default DeleteProduct
