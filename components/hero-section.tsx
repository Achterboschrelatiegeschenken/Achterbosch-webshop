import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Premium Relatiegeschenken</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Gepersonaliseerde{" "}
            <span className="text-primary">Relatiegeschenken</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            Professionele lasergravure voor bedrijven, horeca en evenementen. 
            Maak indruk met unieke relatiegeschenken voorzien van uw logo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg w-full sm:w-auto"
            >
              Bekijk assortiment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a
  href="/offerte"
  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg"
>
  Offerte aanvragen
</a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span className="text-sm">Snelle levertijd</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span className="text-sm">Premium kwaliteit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span className="text-sm">Persoonlijke service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}