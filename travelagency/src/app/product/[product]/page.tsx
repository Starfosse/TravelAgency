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
            <div className="text-muted-foreground">
              Description Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Perferendis
              quidem fugit aut ut amet, quibusdam ipsam sunt
              saepe hic asperiores, placeat unde labore eius
              deleniti ullam incidunt ratione, eveniet
              distinctio. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Qui quo nam
              ipsa, dolores laborum distinctio animi aperiam
              eveniet est nemo aliquam sapiente corporis
              reiciendis necessitatibus delectus voluptates,
              error amet deserunt!
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Product

// const Product = () => {
//   return (
//     <MaxWidthWrapper>
//       <div className=" mx-auto mt-12 relative justify-center max-w-6xl">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-x-5">
//           <div></div>
//           <div className="flex flex-col gap-y-2">
//             <div className="relative aspect-video">
//               <Image
//                 src="/nav/europe/Venise.jpg"
//                 alt="venise"
//                 fill
//                 className="object-cover object-center"
//               />
//             </div>
//             <div className="grid grid-cols-4 gap-x-2 px-2">
//               <div className="relative aspect-video">
//                 <Image
//                   src="/nav/europe/Venise.jpg"
//                   alt="venise"
//                   fill
//                   className="object-cover object-center"
//                 />
//               </div>
//               <div className="relative aspect-video">
//                 <Image
//                   src="/nav/europe/Venise.jpg"
//                   alt="venise"
//                   fill
//                   className="object-cover object-center"
//                 />
//               </div>
//               <div className="relative aspect-video">
//                 <Image
//                   src="/nav/europe/Venise.jpg"
//                   alt="venise"
//                   fill
//                   className="object-cover object-center"
//                 />
//               </div>
//               <div className="relative aspect-video">
//                 <Image
//                   src="/nav/europe/Venise.jpg"
//                   alt="venise"
//                   fill
//                   className="object-cover object-center"
//                 />
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="border-b border-gray-200 flex w-4/5 lg:w-3/5 items-baseline">
//               <div className="text-5xl">Title</div>
//               <div className="justify-end ml-auto">
//                 Price
//               </div>
//             </div>
//             <Button className="my-2 px-10">Réserver</Button>
//             <div className="text-muted-foreground">
//               Description Lorem ipsum dolor sit amet
//               consectetur adipisicing elit. Perferendis
//               quidem fugit aut ut amet, quibusdam ipsam sunt
//               saepe hic asperiores, placeat unde labore eius
//               deleniti ullam incidunt ratione, eveniet
//               distinctio. Lorem ipsum dolor sit amet
//               consectetur, adipisicing elit. Qui quo nam
//               ipsa, dolores laborum distinctio animi aperiam
//               eveniet est nemo aliquam sapiente corporis
//               reiciendis necessitatibus delectus voluptates,
//               error amet deserunt!
//             </div>
//           </div>
//         </div>
//       </div>
//     </MaxWidthWrapper>
//   )
// }
