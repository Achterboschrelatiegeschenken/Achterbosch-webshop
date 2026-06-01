"use client"

import Link from "next/link"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

export default function BorrelplankenPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Gegraveerde Borrelplanken
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Luxe borrelplanken met uw eigen logo, naam of ontwerp.
              Perfect als relatiegeschenk of promotieartikel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">

            <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-full">

              <Link href="/producten/borrelplank">
                <img
                  src="/products/runners.jpeg"
                  alt="Borrelplank"
                  className="w-full h-48 object-contain bg-secondary"
                />
              </Link>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Borrelplank met Gravering
                </h3>

                <p className="text-muted-foreground mt-2">
                  Luxe houten borrelplank met gepersonaliseerde lasergravure.
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