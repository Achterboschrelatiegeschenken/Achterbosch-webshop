"use client"

import { addToCart } from "../../lib/cart"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
export default function OnderzettersPage() {
  return (
  <>
    <Header />

    <main className="min-h-screen bg-background text-foreground py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Gegraveerde Pennen
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Luxe pennen met gepersonaliseerde lasergravure.
            Perfect voor horeca, bedrijven en relatiegeschenken.
          </p>
        </div>

<div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
<div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-full">            
            <img
              src="/products/pen.jpeg"
              alt="houten pen"
className="w-full h-48 object-contain bg-secondary"
            />

           

             

        

          <div className="bg-card border border-border rounded-2xl overflow-hidden">

           

             <div className="flex gap-3 mt-auto">

  <a
    href="/offerte"
    className="flex-1 text-center bg-secondary text-foreground px-6 py-3 rounded-lg"
  >
    Offerte
  </a>

  <button
    onClick={() =>
      addToCart({
        name: "Houten pen",
        price: 7.95,
        image: "/pen.jpeg",
      })
    }
    className="flex-1 bg-primary text-white px-6 py-3 rounded-lg"
  >
    Winkelwagen
  </button>

</div>
            </div>
          </div>

        </div>

      </div>
    </main>

    <Footer />
  </>
  )
}