import { Button } from "./ui/button"
import { ArrowRight, Mail, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 lg:p-16">
          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Klaar om indruk te maken?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Vraag vandaag nog een vrijblijvende offerte aan en ontdek wat wij voor uw bedrijf kunnen betekenen.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
         
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              >
                Offerte aanvragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                
                className="border-border text-foreground hover:bg-secondary px-8"
              >
                <Phone className="mr-2 w-5 h-5" />
                Bel ons
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="relative z-10 mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-center lg:justify-start gap-8">
            <a href="mailto:p.achterbosch@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span>p.achterbosch@gmail.com</span>
            </a>
            <a href="tel:+31123456789" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span>+31 (0)6 156 04 248</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}