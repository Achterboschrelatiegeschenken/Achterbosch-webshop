"use client"

import Image from "next/image"
import { useState } from "react"
import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import { addToCart } from "../../../lib/cart"

export default function PennenPage() {
  const [selectedImage, setSelectedImage] = useState(
    "/products/pen.jpeg"
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
                alt="Gegraveerde Pen"
                width={800}
                height={800}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">

              <div
                onClick={() =>
                  setSelectedImage("/products/pen.jpeg")
                }
                className="bg-card border border-border rounded-xl p-2 cursor-pointer"
              >
                <Image
                  src="/products/pen.jpeg"
                  alt="Pen"
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              <div
                onClick={() =>
                  setSelectedImage("/products/pen2.jpeg")
                }
                className="bg-card border border-border rounded-xl p-2 cursor-pointer"
              >
                <Image
                  src="/products/pen2.jpeg"
                  alt="Pen"
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              <div
                onClick={() =>
                  setSelectedImage("/products/pen-3.jpeg")
                }
                className="bg-card border border-border rounded-xl p-2 cursor-pointer"
              >
                <Image
                  src="/products/pen-3.jpeg"
                  alt="Pen"
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
              Gegraveerde Pennen
            </h1>

            <p className="text-3xl font-bold text-primary mb-6">
              Vanaf € 4,95 incl. btw
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Luxe gepersonaliseerde pennen met gravure van naam, logo of tekst.
              Perfect als relatiegeschenk, promotieartikel of zakelijke giveaway.
            </p>

            <div className="bg-card border border-border rounded-2xl p-6 mb-8 space-y-4">

              <div className="flex justify-between">
                <span>1 - 9 stuks</span>
                <span>€ 4,95 p/st</span>
              </div>

              <div className="flex justify-between">
                <span>10 - 49 stuks</span>
                <span>€ 3,95 p/st</span>
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
                    name: "Gegraveerde Pen",
                    price: 4.95,
                    image: "/products/pen.jpeg",
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

              <p>✔ Gravure met naam of logo</p>
              <p>✔ Luxe zakelijke uitstraling</p>
              <p>✔ Perfect als relatiegeschenk</p>
              <p>✔ Gratis verzending vanaf €50</p>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}