"use client"

import { addToCart } from "../../lib/cart"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import Link from "next/link"

export default function OnderzettersPage() {
  return (
  <>
    <Header />

    <main className="min-h-screen bg-background text-foreground py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Gegraveerde flesopeners met uw eigen tekst of logo. Perfect relatiegeschenk voor horeca en evenementen.
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Luxe flesopeners met gepersonaliseerde lasergravure.
            Perfect voor horeca, bedrijven en relatiegeschenken.
          </p>
        </div>

<div className="grid md:grid-cols-3 gap-8 auto-rows-fr">

  <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-full">

    <Link href="/producten/houten-flesopener">
      <img
        src="/products/flesopenerhout.JPG"
        alt="houten flesopener"
        className="w-full h-48 object-contain bg-secondary"
      />
    </Link>

    <div className="p-6">
      <h3 className="text-2xl font-bold">
        Houten Flesopener
      </h3>

      <p className="text-muted-foreground mt-2">
        Luxe flesopeners met gepersonaliseerde lasergravure.
      </p>
    </div>

  </div>

  <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-full">

    <Link href="/producten/ronde-flesopener-magneet">
      <img
        src="/products/flesopener-rond-1.jpeg"
        alt="Ronde Flesopener met Magneet"
        className="w-full h-48 object-contain bg-secondary"
      />
    </Link>

    <div className="p-6">
      <h3 className="text-2xl font-bold">
        Ronde Flesopener met Magneet
      </h3>

      <p className="text-muted-foreground mt-2">
        Luxe ronde flesopener met magnetische achterkant.
      </p>
    </div>

  </div>

</div>


           

             

        

          

 
   


 </div>   
</main>
    <Footer />
  </>
  )
}