"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useState } from "react"
import NavItem from "./NavItem"

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null)
  const isAnyOpen = activeIndex !== null
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null)
          } else {
            setActiveIndex(i)
          }
        }
        const isOpen = i === activeIndex
        return (
          <NavItem
            isAnyOpen={isAnyOpen}
            isOpen={isOpen}
            category={category}
            handleOpen={handleOpen}
            key={category.value}
          />
        )
      })}
    </div>
  )
}

export default NavItems
