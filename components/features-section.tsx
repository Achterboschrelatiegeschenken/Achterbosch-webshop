import { Zap, Shield, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Precisie Lasergravure",
    description: "Uiterst nauwkeurige gravures met de nieuwste lasertechnologie voor een perfect resultaat."
  },
  {
    icon: Shield,
    title: "Duurzame Materialen",
    description: "Wij werken uitsluitend met hoogwaardige materialen die jarenlang meegaan."
  },
  {
    icon: Clock,
    title: "Snelle Levering",
    description: "Korte doorlooptijden en betrouwbare levering, ook bij grote aantallen."
  },
  {
    icon: Users,
    title: "Persoonlijk Advies",
    description: "Ons team staat klaar om u te adviseren over de beste opties voor uw project."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Waarom Achterbosch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Kwaliteit en service staan voorop
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Met jarenlange ervaring in lasergravure leveren wij gepersonaliseerde producten van topkwaliteit.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-lg hover:bg-card transition-colors duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}