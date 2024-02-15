import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button } from "@/components/ui/button"
import { currentUser } from "@clerk/nextjs"
import Link from "next/link"
import React from "react"

const NewUser = async () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col justify-center items-center mt-8">
        <div>Vous êtes bien enregistrés !</div>
        <div className="mt-4">
          <Link href="/">
            <Button>Retourner à l&apos;accueil</Button>{" "}
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default NewUser
