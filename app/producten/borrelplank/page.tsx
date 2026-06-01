"use client"

import Image from "next/image"
import { useState } from "react"
import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import { addToCart } from "../../../lib/cart"
import { Trash2 } from "lucide-react"
import { useRef } from "react"

export default function BorrelplankPage() {
  const [selectedImage, setSelectedImage] = useState(
    "/products/steenbergen.JPG"
  )
const [logoPreview, setLogoPreview] = useState("")
const [fileName, setFileName] = useState("")
const fileInputRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* Product Images */}
          <div className="space-y-4">

            <div className="bg-card border border-border rounded-2xl p-8">

  <div className="relative">

    <Image
      src={selectedImage}
      alt="Borrelplank met Gravering"
      width={800}
      height={800}
      className="w-full h-auto object-contain rounded-xl"
    />

   

  </div>

</div>

            <div className="grid grid-cols-3 gap-4">

              <div
                onClick={() => setSelectedImage("/products/steenbergen.JPG")}
                className="bg-card border border-border rounded-xl p-2 cursor-pointer"
              >
                <Image
                  src="/products/steenbergen.JPG"
                  alt="Borrelplank"
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              <div
                onClick={() => setSelectedImage("/products/runners.jpeg")}
                className="bg-card border border-border rounded-xl p-2 cursor-pointer"
              >
                <Image
                  src="/products/runners.jpeg"
                  alt="Borrelplank"
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              <div
                onClick={() => setSelectedImage("/products/cougar.jpg")}
                className="bg-card border border-border rounded-xl p-2 cursor-pointer"
              >
                <Image
                  src="/products/cougar.jpg"
                  alt="Borrelplank"
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
              Borrelplank met Gravering
            </h1>

            <p className="text-3xl font-bold text-primary mb-6">
              € 39,95
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Luxe houten borrelplank met hoogwaardige lasergravure van uw
              logo, naam of eigen ontwerp. Perfect als relatiegeschenk,
              jubileumcadeau, kerstpakket of promotioneel product.
            </p>

            <div className="bg-card border border-border rounded-2xl p-6 mb-8">

              <h3 className="font-bold text-xl mb-4">
                Grotere aantallen?
              </h3>

              <p className="text-muted-foreground">
                Voor grotere aantallen maken wij graag een offerte op maat.
                Neem contact met ons op voor aantrekkelijke staffelprijzen.
              </p>

            </div>
<div className="bg-card border border-border rounded-2xl p-6 mb-8">

  <div className="mb-4">
    <h3 className="font-bold text-xl">
       Voorbeeld
    </h3>
  </div>

  <div className="relative">
    <img
      src="/products/borrelplank-blanco.jpeg"
      alt="Borrelplank preview"
      className="w-full rounded-xl"
    />

    {logoPreview && (
      <img
        src={logoPreview}
        alt="Logo preview"
        className="
  absolute
  top-[46%]
  left-[43%]
  w-48
  sm:w-32
  md:w-64
  opacity-50
  grayscale
  mix-blend-multiply
  -translate-x-1/2
  -translate-y-1/2
  pointer-events-none
"
      />
    )}
  </div>
<p className="text-sm text-muted-foreground mt-2">
  Dit is een indicatie van de gravure. Het uiteindelijke resultaat kan licht afwijken.
</p>

<div className="flex justify-end mt-4">
  <button
    onClick={() => {
      setLogoPreview("")
      setFileName("")

      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }}
    className="flex items-center gap-2 text-red-500 hover:text-red-600 transition"
  >
    <Trash2 className="w-5 h-5" />
    Verwijder logo
  </button>
</div>

<input
  ref={fileInputRef}
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files?.[0]

    if (file) {
      setLogoPreview(URL.createObjectURL(file))
      setFileName(file.name)
    }
  }}
/>

</div>

            <div className="flex flex-col sm:flex-row gap-4">

              <button
                onClick={() => {
                  addToCart({
  name: "Borrelplank met Gravering",
  price: 39.95,
  image: "/products/steenbergen.JPG",
  fileName: fileName,
  logoPreview: logoPreview,
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

              <p>✔ Gratis verzending vanaf €50</p>
              <p>✔ Gepersonaliseerd met logo of ontwerp</p>
              <p>✔ Hoogwaardige lasergravure</p>
              <p>✔ Perfect als relatiegeschenk</p>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}