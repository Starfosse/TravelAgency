"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/db"
import Link from "next/link"
import { trpc } from "../utils/trpc"

const getIdProductQuery = async (input: string) => {
  return await prisma.product.findFirst({
    where: {
      name: input,
    },
  })
}

const Test = () => {
  // const test = await getIdProductQuery("Venise")
  // console.log(test)
  const lol = trpc.greeting.useQuery()
  console.log(lol)
  console.log(lol.data)
  const tata = trpc.getIdProduct.useQuery({
    name: "Venise",
  })
  console.log(tata)
  console.log(tata.data)
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col justify-center items-center mt-8">
        <div>Vous êtes bien enregistrés !</div>
        <div className="mt-4">
          <Button onClick={() => lol}>
            Retourner à l'accueil
          </Button>{" "}
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Test
