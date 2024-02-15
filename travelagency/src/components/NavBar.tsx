"use client"

import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import {
  CarTaxiFront,
  CheckCircle,
  Home,
} from "lucide-react"
import NavItems from "./NavItems"
import Cart from "./Cart"
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"

const NavBar = () => {
  return (
    <div className="sticky inset-x-0 bg-white h-16 z-50 top-0">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div>
                <Link href="/">
                  <Home />
                </Link>
              </div>

              <div className="ml-4 z-50 block self-stretch">
                <NavItems />
              </div>
              <div className="flex items-center ml-auto justify-end space-x-6">
                <SignedOut>
                  <Link href="/sign-in">Signin</Link>
                  <Link href="/sign-up">Signup</Link>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
              {/* Cart */}
              <div className="ml-6 flow-root lg:mt-2">
                <Cart />{" "}
                {/* https://clerk.com/docs/components/control/signed-in checker pour le checkout => <SignedIn></SignedIn>*/}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default NavBar
