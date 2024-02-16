import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { SearchX, ShieldCheck, Star } from "lucide-react"

const perks = [
  {
    name: "Sécurité et tranquillité d'esprit",
    Icon: ShieldCheck,
    description:
      "Chez Horizon Voyages, la sécurité de nos clients est notre priorité absolue. Nous collaborons avec des partenaires de confiance à travers le monde pour garantir que chaque aspect de votre voyage est sécurisé et bien organisé. De plus, notre service clientèle est disponible 24h/24 et 7j/7 pour répondre à toutes vos questions et vous assister en cas de besoin pendant votre voyage.",
  },
  {
    name: "Expertise et conseils personnalisés",
    Icon: Star,
    description:
      "Notre équipe de conseillers en voyages expérimentés est là pour vous guider à chaque étape de votre voyage, de la planification initiale à votre retour chez vous. Que vous ayez besoin de recommandations sur les meilleures destinations, les options d'hébergement ou les activités à ne pas manquer, nous sommes là pour vous offrir des conseils personnalisés et des recommandations sur mesure.",
  },
  {
    name: "Découverte de destinations uniques",
    Icon: SearchX,
    description:
      "Que vous préfériez les voyages organisés tout compris, les circuits guidés, les escapades en ville ou les séjours à la carte, nous avons une gamme d'options de voyage flexibles qui s'adaptent à vos préférences et à votre budget. Nous nous engageons à vous offrir des expériences de voyage sur mesure qui répondent à toutes vos attentes.",
  },
]

const presentation = `✈️ Bienvenue chez Horizon Voyages : Explorez le monde avec facilité ! 🌍

Chez Horizon Voyages, notre mission est de rendre vos rêves de voyage une réalité, en vous offrant une expérience exceptionnelle de planification de voyage en ligne. Que vous soyez un aventurier intrépide à la recherche de nouvelles destinations exotiques, un passionné de culture désireux d'explorer des villes emblématiques ou un voyageur en quête de détente sur des plages paradisiaques, nous avons tout ce dont vous avez besoin pour créer des souvenirs inoubliables.

Préparez-vous à vivre des aventures inoubliables avec Horizon Voyages. Réservez dès maintenant et laissez-nous vous emmener vers de nouveaux horizons ! 🌍✈️`
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
          <p className="mt-6 text-muted-foreground max-w-prose text-lg whitespace-pre-line ">
            {presentation}
          </p>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-2">
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
