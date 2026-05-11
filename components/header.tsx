"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
  src="/logo.png"
  alt="Achterbosch"
  width={180}
  height={60}
  className="h-21 w-auto"
/>
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#assortiment" className="text-muted-foreground hover:text-foreground transition-colors">
              Assortiment
            </Link>
            <Link href="#over-ons" className="text-muted-foreground hover:text-foreground transition-colors">
              Over ons
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
              Bekijk assortiment
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Offerte aanvragen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link 
                href="#assortiment" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Assortiment
              </Link>
              <Link 
                href="#over-ons" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Over ons
              </Link>
              <Link 
                href="#contact" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" className="w-full border-border text-foreground hover:bg-secondary">
                  Bekijk assortiment
                </Button>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Offerte aanvragen
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}