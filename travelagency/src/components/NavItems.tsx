"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/useOnClickOutside"

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null)
      }
    }

    document.addEventListener("keydown", handler)
    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [])

  const navRef = useRef<HTMLDivElement | null>(null)

  useOnClickOutside(navRef, () => setActiveIndex(null))
  const isAnyOpen = activeIndex !== null
  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null)
          } else {
            setActiveIndex(i)
          }
        }
        const closepreview = () => {
          setActiveIndex(null)
        }
        const isOpen = i === activeIndex
        return (
          <NavItem
            isAnyOpen={isAnyOpen}
            isOpen={isOpen}
            category={category}
            handleOpen={handleOpen}
            closepreview={() => closepreview()}
            key={category.value}
          />
        )
      })}
    </div>
  )
}

export default NavItems
