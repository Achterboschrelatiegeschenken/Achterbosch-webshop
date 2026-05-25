import Link from "next/link"
import { Card, CardContent } from "./ui/card"
import { ArrowUpRight, Key, Wine, Disc, Pen } from "lucide-react"

const categories = [
  {
    title: "Sleutelhangers",
    description: "Gegraveerde sleutelhangers in diverse materialen en vormen. Perfect voor evenementen en promoties.",
    icon: Key,
    image: "/images/sleutelhangers.jpg",
    href: "/sleutelhangers"
  },
  {
    title: "Flesopeners",
    description: "Stijlvolle flesopeners met uw logo. Ideaal relatiegeschenk voor horeca en evenementen.",
    icon: Wine,
    image: "/images/flesopeners.jpg",
    href: "/flesopeners"
  },
  {
    title: "Onderzetters",
    description: "Elegante onderzetters met lasergravure. Perfect voor restaurants, cafés en zakelijke geschenken.",
    icon: Disc,
    image: "/images/onderzetters.jpg",
    href: "/onderzetters"
  },
  {
  title: "Pennen",
  description: "Luxe houten pennen met professionele lasergravure.",
  icon: Pen,
  image: "/images/pen.jpg",
  href: "/pennen"
},
]

export function CategorySection() {
  return (
    <section id="assortiment" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Ons Assortiment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ontdek onze populaire categorieën
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Van sleutelhangers tot onderzetters, wij graveren uw logo met precisie op premium materialen.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link href={category.href}>
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image Area */}
                <div className="relative h-48 bg-secondary overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <category.icon className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}