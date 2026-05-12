import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { CategorySection } from "../components/category-section"
import { FeaturesSection } from "../components/features-section"
import { CTASection } from "../components/cta-section"
import { Footer } from "../components/footer"
import { MobileStickyCTA } from "../components/mobile-sticky-cta"

export default function HomePage() {
   return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategorySection />
      <FeaturesSection />
      <CTASection />
      <Footer />
      <MobileStickyCTA />
    </main>
  )
}