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
import { useState } from "react"
import AddProduct from "@/components/AddProduct"
import DeleteProduct from "@/components/DeleteProduct"

const admin = () => {
  const [addOrDelete, setAddOrDelete] =
    useState<boolean>(true)
  return (
    <>
      <Button onClick={() => setAddOrDelete(!addOrDelete)}>
        {addOrDelete ? (
          <p>Supprimer un produit</p>
        ) : (
          <p>Ajouter un produit</p>
        )}
      </Button>
      {addOrDelete ? <AddProduct /> : <DeleteProduct />}
    </>
  )
}

export default admin
