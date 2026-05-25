"use client"

import { addToCart } from "../../lib/cart"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
export default function SleutelhangersPage() {
  return (
  <>
    <Header />

    <main className="min-h-screen bg-background text-foreground py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Gegraveerde Sleutelhangers
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Gepersonaliseerde sleutelhangers met lasergravure.
            Perfect voor bedrijven, evenementen en promotionele doeleinden.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">

<div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-full">            <img
  src="/products/sleutelhanger-hout.jpeg"
  alt="Houten sleutelhanger"
  className="w-full h-48 object-contain bg-secondary"
/>

<div className="p-6 flex flex-col flex-1">
                  <h2 className="text-2xl font-semibold mb-3">
                Houten Sleutelhanger
              </h2>

              <p className="text-muted-foreground mb-6">
                Luxe houten sleutelhanger met nauwkeurige lasergravure.
              </p>

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
        name: "Houten sleutelhanger",
        price: 4.95,
        image: "/products/sleutelhanger-hout.jpeg",
      })
    }
    className="flex-1 bg-primary text-white px-6 py-3 rounded-lg"
  >
    Winkelwagen
  </button>

</div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="h-64 bg-secondary"></div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">
                Leren Sleutelhanger
              </h2>

              <p className="text-muted-foreground mb-6">
                Duurzame sleutelhangers van Leer met gravure.
              </p>

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
        name: "Leren Sleutelhanger",
        price: 7.95,
        image: "/products/sleutelhanger-leer.jpeg",
      })
    }
    className="flex-1 bg-primary text-white px-6 py-3 rounded-lg"
  >
    Winkelwagen
  </button>

</div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="h-64 bg-secondary"></div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">
                Acryl Sleutelhanger
              </h2>

              <p className="text-muted-foreground mb-6">
                Moderne sleutelhangers met strakke afwerking.
              </p>

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
        name: "Acryl Sleutelhanger",
        price: 6.95,
        image: "/products/sleutelhanger-acryl.jpeg",
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