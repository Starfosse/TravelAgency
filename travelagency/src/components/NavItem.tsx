"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
  category: Category
  isOpen: boolean
  isAnyOpen: boolean
  handleOpen: () => void
  closepreview: () => void
}
const NavItem = ({
  isAnyOpen,
  isOpen,
  category,
  handleOpen,
  closepreview,
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
                      alt="preview product image"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="mt-6 block font-medium text-gray-900">
                    {item.name}
                  </p>
                  <Link
                    onClick={closepreview}
                    href={`/product/${item.slug}`}
                    className="mt-1"
                    aria-hidden="true">
                    Voir fiche produit
                    {/* {`${sendIdFromProductName(item.name)}`} */}
                  </Link>
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
