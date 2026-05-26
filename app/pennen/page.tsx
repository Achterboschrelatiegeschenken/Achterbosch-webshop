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
      <div className="mb-16 text-center">
  <h1 className="text-5xl font-bold mb-6">
    Luxe gegraveerde pennen met uw eigen naam, logo of tekst
  </h1>

  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
    Hoogwaardige pennen met professionele lasergravure.
    Perfect als relatiegeschenk, zakelijke giveaway of promotieartikel.
  </p>
</div>
<div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
      <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-full">

  <Link href="/producten/pennen">
    <img
      src="/products/pen.jpeg"
      alt="Gegraveerde Pennen"
      className="w-full h-48 object-contain bg-secondary"
    />
  </Link>

  <div className="p-6">
    <h3 className="text-2xl font-bold">
      Gegraveerde Pennen
    </h3>

    
  </div>

</div>
</div>
<div className="grid md:grid-cols-3 gap-8 auto-rows-fr">


           

             

        

          <div className="bg-card border border-border rounded-2xl overflow-hidden">

           

             <div className="flex gap-3 mt-auto">

 

</div>
            </div>
          </div>

        

      
    </main>

    <Footer />
  </>
  )
}