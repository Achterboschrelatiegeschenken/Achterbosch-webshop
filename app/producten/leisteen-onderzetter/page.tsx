"use client"

import Image from "next/image"
import { useState } from "react"
import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import { addToCart } from "../../../lib/cart"

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(
    "/products/onderzetter-leisteen.jpeg"
  )

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground py-24 px-6">

        <div className="max-w-6xl mx-auto">

          {/* Headline */}
          <div className="mb-16 text-center">

            <h1 className="text-5xl font-bold mb-6">
              Luxe gepersonaliseerde onderzetters met gravure
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hoogwaardige onderzetters met naam, logo of eigen ontwerp.
              Perfect voor horeca, bedrijven en relatiegeschenken.
            </p>

          </div>

          {/* Product Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Product Images */}
            <div className="space-y-4">

              {/* Grote afbeelding */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <Image
                  src={selectedImage}
                  alt="Product"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">

                <div
                  onClick={() =>
                    setSelectedImage("/products/onderzetter-leisteen.jpeg")
                  }
                  className="bg-card border border-border rounded-xl p-2 cursor-pointer"
                >
                  <Image
                    src="/products/onderzetter-leisteen.jpeg"
                    alt="Product"
                    width={200}
                    height={200}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>

                <div
                  onClick={() =>
                    setSelectedImage("/products/product-2.jpeg")
                  }
                  className="bg-card border border-border rounded-xl p-2 cursor-pointer"
                >
                  <Image
                    src="/products/product-2.jpeg"
                    alt="Product"
                    width={200}
                    height={200}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>

                <div
                  onClick={() =>
                    setSelectedImage("/products/product-3.jpeg")
                  }
                  className="bg-card border border-border rounded-xl p-2 cursor-pointer"
                >
                  <Image
                    src="/products/product-3.jpeg"
                    alt="Product"
                    width={200}
                    height={200}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>

              </div>
            </div>

            {/* Product Info */}
            <div>

              <h2 className="text-5xl font-bold mb-6">
                leisteen onderzetter
              </h2>

              <p className="text-3xl font-bold text-primary mb-6">
                Vanaf € 8,95
              </p>

              

              {/* Staffelprijzen */}
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

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">

                <button
                  onClick={() => {
                    addToCart({
                      name: "Onderzetter Leisteen",
                      price: 8.95,
                      image: "/products/onderzetter-leisteen.jpeg",
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

              {/* USP's */}
              <div className="mt-10 space-y-4 text-muted-foreground">

                <p>✔ Gepersonaliseerd met logo of naam</p>
                <p>✔ Hoge kwaliteit lasergravure</p>
                <p>✔ Perfect als relatiegeschenk</p>
                <p>✔ Afmetingen: 100x100mm</p>
                <p>✔ Inclusief rubberen voetjes</p>
                <p>✔ Gratis verzending vanaf €50</p>

              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}