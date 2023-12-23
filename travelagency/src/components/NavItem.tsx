"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { trpc } from "@/app/utils/trpc"

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
  category: Category
  isOpen: boolean
  isAnyOpen: boolean
  handleOpen: () => void
}
const NavItem = ({
  isAnyOpen,
  isOpen,
  category,
  handleOpen,
}: NavItemProps) => {
  return (
    <div className="flex ">
      <div className="relative flex items-center">
        <Button
          variant={isOpen ? "secondary" : "ghost"}
          className="gap-1.5"
          onClick={handleOpen}>
          {category.label}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-all text-muted-foreground",
              {
                "-rotate-180": isOpen,
              }
            )}
          />
        </Button>
      </div>
      {isOpen ? (
        <div
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            {
              "animate-in fade-in-10 slide-in-from-top-5":
                !isAnyOpen,
            }
          )}>
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />
          <div className="relative bg-white mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-12">
              {category.featured.map((item) => (
                <div
                  key={item.name}
                  className="group relative text-base sm:text-sm">
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <Image
                      src={item.imageSrc}
                      alt="product category image"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <Link
                    href="item.href"
                    // href={`${sendIdFromProductName(item.name)}`}
                    className="mt-6 block font-medium text-gray-900">
                    {item.name}
                  </Link>
                  <p className="mt-1" aria-hidden="true">
                    Shop now
                    {/* {`${sendIdFromProductName(item.name)}`} */}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default NavItem

const sendIdFromProductName = (productName: string) => {
  const product = trpc.getIdProduct.useQuery({
    name: productName,
  })
  console.log(product.data?.id)
}
