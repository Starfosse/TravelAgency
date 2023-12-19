import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import {
  Button,
  buttonVariants,
} from "@/components/ui/button"
import {
  ArrowDownToLine,
  CheckCircle,
  Leaf,
} from "lucide-react"
import Link from "next/link"
import { trpc } from "./utils/trpc"

const perks = [
  {
    name: "instant delivery",
    Icon: ArrowDownToLine,
    description:
      "get your assets delivered to your email in seconds and download them right away",
  },
  {
    name: "Guarenteed Quality",
    Icon: CheckCircle,
    description:
      "Every assets on our platform is verfieid by our team to ensure oure highest quality standards. Not happ ? We offer a 30-day refund guarante.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservatino and restoration of the natural environment",
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Envie de voyage ? Vous êtes à la{"  "}
            <span className="text-blue-600">
              bonne agence
            </span>
            .
          </h1>
          <p className="mt-6 text-muted-foreground max-w-prose text-lg">
            Description : Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Modi perspiciatis
            officiis expedita temporibus? Modi fuga deserunt
            numquam nulla? Magnam optio, tenetur sit veniam
            rerum necessitatibus quibusdam quae dicta
            corporis blanditiis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/products"
              className={buttonVariants({})}>
              Voir produit
            </Link>
            <Button variant="ghost">
              Our quality promise &rarr;
            </Button>
          </div>
        </div>

        {/* {liste produit} */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="block justify-center items-center text-center">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                    {
                      <perk.Icon className="w-1/3 h-1/3 text-blue-900" />
                    }
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
