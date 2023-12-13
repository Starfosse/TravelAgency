import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { CarTaxiFront, CheckCircle } from "lucide-react"
import NavItems from "./NavItems"

const NavBar = () => {
  return (
    <div className="sticky inset-x-0 bg-white h-16 z-50 top-0">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div>
                <Link href="/">
                  <CheckCircle />
                </Link>
              </div>

              <div className="ml-4 z-50 block self-stretch">
                <NavItems />
              </div>
              <div className="flex items-center ml-auto justify-end space-x-6">
                <div>SignIn</div>
                <div>SignUp</div>
                <div>Logout</div>
              </div>
              {/* Cart */}
              <div className="ml-6 flex">
                Cart
                <CarTaxiFront />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default NavBar
