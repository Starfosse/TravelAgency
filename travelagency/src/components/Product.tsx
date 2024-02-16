"use client"

import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button } from "./ui/button"
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

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <MaxWidthWrapper>
      {/* <div>Home / {nameProduct}</div> */}
      <div className=" mx-auto mt-12 relative justify-center max-w-6xl">
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
                  alt="test"
                  src="/nav/europe/Venise.jpg"
                  className="object-cover object-center"
                />
              </SwiperSlide>
              <SwiperSlide className="aspect-video">
                <Image
                  fill
                  alt="test"
                  src="/nav/europe/Venise.jpg"
                />
              </SwiperSlide>
              <SwiperSlide className="aspect-video">
                <Image
                  fill
                  alt="test"
                  src="/nav/europe/Venise.jpg"
                />
              </SwiperSlide>
              <SwiperSlide className="aspect-video">
                <Image
                  fill
                  alt="test"
                  src="/nav/europe/Venise.jpg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <div className="border-b border-gray-200 flex w-4/5 lg:w-3/5 items-baseline">
              <div className="mt-5 sm:mt-0 text-5xl">
                Title
              </div>
              <div className="justify-end ml-auto">
                Price
              </div>
            </div>
            <Button className="my-3 px-10">Réserver</Button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Product
