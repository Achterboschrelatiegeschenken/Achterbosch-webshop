"use client"

import Image from "next/image"
import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import { addToCart } from "../../../lib/cart"
import { useState } from "react"

export default function RondeFlesopenerMagneetPage() {
    const [selectedImage, setSelectedImage] = useState(
  "/products/flesopener-rond-1.jpeg"
)
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* Product Images */}
<div className="space-y-4">

  <div className="bg-card border border-border rounded-2xl p-8">
    <Image
      src={selectedImage}
      alt="Ronde Flesopener met Magneet"
      width={800}
      height={800}
      className="w-full h-auto object-contain rounded-xl"
    />
  </div>

  <div className="grid grid-cols-3 gap-4">

    <div
  onClick={() =>
    setSelectedImage("/products/flesopener-rond-1.jpeg")
  }
  className="bg-card border border-border rounded-xl p-2 cursor-pointer"
>
  <Image
    src="/products/flesopener-rond-1.jpeg"
    alt="Ronde Flesopener"
    width={200}
    height={200}
    className="w-full h-auto object-contain rounded-lg"
  />
</div>

    <div
  onClick={() =>
    setSelectedImage("/products/flesopener-rond-2.jpeg")
  }
  className="bg-card border border-border rounded-xl p-2 cursor-pointer"
>
  <Image
    src="/products/flesopener-rond-2.jpeg"
    alt="Ronde Flesopener"
    width={200}
    height={200}
    className="w-full h-auto object-contain rounded-lg"
  />
</div>

    <div
  onClick={() =>
    setSelectedImage("/products/flesopener-rond-3.jpeg")
  }
  className="bg-card border border-border rounded-xl p-2 cursor-pointer"
>
  <Image
    src="/products/flesopener-rond-3.jpeg"
    alt="Ronde Flesopener"
    width={200}
    height={200}
    className="w-full h-auto object-contain rounded-lg"
  />
</div>

  </div>
</div>

          {/* Product Info */}
          <div>

            <h1 className="text-5xl font-bold mb-6">
              Ronde Flesopener met Magneet
            </h1>

            <p className="text-3xl font-bold text-primary mb-6">
              Vanaf € 8,95
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Luxe ronde flesopener met magneet aan de achterzijde.
              Perfect als relatiegeschenk, promotieartikel of gepersonaliseerd cadeau.
              Mogelijk met logo, naam of eigen ontwerp.
            </p>

            <div className="bg-card border border-border rounded-2xl p-6 mb-8 space-y-4">

              <div className="flex justify-between">
                <span>1 - 9 stuks</span>
                <span>€ 8,95 p/st</span>
              </div>

              <div className="flex justify-between">
                <span>10 - 49 stuks</span>
                <span>€ 7,95 p/st</span>
              </div>

              <div className="flex justify-between">
                <span>50+ stuks</span>
                <span>Offerte prijs</span>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">

              <button
                onClick={() => {
                  addToCart({
                    name: "Ronde Flesopener met Magneet",
                    price: 8.95,
                    image: "/products/flesopener-rond-1.jpeg",
                    
                  })

                  window.location.href = "/winkelwagen"
                }}
                className="flex-1 bg-primary text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
              >
                Toevoegen aan winkelwagen
              </button>

              <a
                href="/offerte"
                className="flex-1 border border-border py-4 rounded-2xl text-lg font-semibold text-center hover:bg-secondary transition"
              >
                Offerte aanvragen
              </a>

            </div>

            <div className="mt-10 space-y-4 text-muted-foreground">

              <p>✔ Magnetische achterkant</p>
              <p>✔ Gepersonaliseerd met logo of naam</p>
              <p>✔ Gratis verzending vanaf €50</p>
              <p>✔ Hoge kwaliteit gravering</p>
              <p>✔ 60 mm diameter</p>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}