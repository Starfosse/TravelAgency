"use client"

import Image from "next/image"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import {
  FreeMode,
  Navigation,
  Thumbs,
} from "swiper/modules"
import { useState } from "react"
import { PRODUCT_CATEGORIES } from "@/config"
import { notFound } from "next/navigation"
import DatePicker from "@/components/DatePicker"

interface PageProps {
  params: {
    slug: string
  }
}

interface CityProps {
  name: string
  slug: string
  price: string
  description: string
  imageSrc: string
}

const findProductBySlug = (slug: string) => {
  let selectedCity: object | undefined
  PRODUCT_CATEGORIES.forEach((label) => {
    label.featured.forEach((city: CityProps) => {
      if (city.slug === slug) selectedCity = city
    })
  })
  if (typeof selectedCity !== "object") return null
  return selectedCity
}

const Product = ({ params }: PageProps) => {
  const product = findProductBySlug(
    params.slug
  ) as CityProps
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  if (!product) return notFound()

  return (
    <MaxWidthWrapper>
      {/* <div>Home / {nameProduct}</div> */}
      <div className=" mx-auto mt-12 relative justify-center max-w-6xl pb-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-5">
          <div className="relative">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2">
              <SwiperSlide className="aspect-video">
                <Image
                  fill
                  alt="image product"
                  src={product.imageSrc}
                  className="object-cover object-center"
                />
              </SwiperSlide>
              <SwiperSlide className="aspect-video">
                <Image
                  fill
                  alt="image product"
                  src={product.imageSrc}
                />
              </SwiperSlide>
              <SwiperSlide className="aspect-video">
                <Image
                  fill
                  alt="image product"
                  src={product.imageSrc}
                />
              </SwiperSlide>
              <SwiperSlide className="aspect-video">
                <Image
                  fill
                  alt="image product"
                  src={product.imageSrc}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <div className="border-b border-gray-200 flex w-4/5 lg:w-3/5 items-baseline">
              <div className="mt-5 sm:mt-0 text-5xl">
                {product ? product.name : null}
              </div>
            </div>
            <div className=" flex  flex-row items-center justify-start gap-2">
              <Button className="my-3 px-10">
                Réserver
              </Button>
              <DatePicker />
            </div>
            <div className="text-muted-foreground whitespace-pre-line p-4">
              {product.description}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Product
