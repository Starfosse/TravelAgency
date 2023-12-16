import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/db"
import { currentUser } from "@clerk/nextjs"
import Link from "next/link"
import React from "react"

const createNewUser = async () => {
  const user = await currentUser()
  console.log(user)

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user?.id as string,
    },
  })

  if (!match && user) {
    await prisma.user.create({
      data: {
        clerkId: user?.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    })
  }
}

const NewUser = async () => {
  await createNewUser()
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col justify-center items-center mt-8">
        <div>Vous êtes bien enregistrés !</div>
        <div className="mt-4">
          <Link href="/">
            <Button>Retourner à l'accueil</Button>{" "}
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default NewUser
