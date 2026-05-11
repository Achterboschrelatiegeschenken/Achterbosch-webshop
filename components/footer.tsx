import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  producten: [
    { label: "Sleutelhangers", href: "#" },
    { label: "Flesopeners", href: "#" },
    { label: "Onderzetters", href: "#" },
    { label: "Pennen", href: "#" },
    { label: "Relatiegeschenken", href: "#" },
  ],
  bedrijf: [
    { label: "Over ons", href: "#over-ons" },
    { label: "Contact", href: "#contact" },
    { label: "Offerte aanvragen", href: "#" },
    { label: "Veelgestelde vragen", href: "#" },
  ],
  service: [
    { label: "Levering", href: "#" },
    { label: "Garantie", href: "#" },
    { label: "Privacybeleid", href: "#" },
    { label: "Algemene voorwaarden", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
             <Image
  src="/logo.png"
  alt="Achterbosch"
  width={400}
  height={120}
  className="h-22 w-auto"
/>
              
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium relatiegeschenken met professionele lasergravure voor bedrijven en evenementen.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Producten</h3>
            <ul className="space-y-3">
              {footerLinks.producten.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Bedrijf</h3>
            <ul className="space-y-3">
              {footerLinks.bedrijf.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Column */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Service</h3>
            <ul className="space-y-3">
              {footerLinks.service.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Achterbosch Relatiegeschenken. Alle rechten voorbehouden.
          </p>
          <p className="text-muted-foreground text-sm">
            Gemaakt met passie voor kwaliteit
          </p>
        </div>
      </div>
    </footer>
  )
}