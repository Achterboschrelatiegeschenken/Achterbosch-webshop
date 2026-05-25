"use client"

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { useEffect, useState } from "react"

export default function CheckoutPage() {
  const [success, setSuccess] = useState(false)
  const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [address, setAddress] = useState("")
const [postalCode, setPostalCode] = useState("")
const [city, setCity] = useState("")
const [notes, setNotes] = useState("")
const [logo, setLogo] = useState<File | null>(null)
  const [cart, setCart] = useState<any[]>([])

useEffect(() => {
  const storedCart = localStorage.getItem("cart")

  if (storedCart) {
    setCart(JSON.parse(storedCart))
  }
}, [])

const totalPrice = cart.reduce(
  (total, product) => total + product.price * product.quantity,
  0
)

const shippingCost = totalPrice >= 50 ? 0 : 6.95

const grandTotal = totalPrice + shippingCost

  return (
    
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground py-24 px-6">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl font-bold mb-12">
            Afrekenen
          </h1>
<div className="bg-card border border-border rounded-2xl p-8 mb-8">
  <h2 className="text-3xl font-bold mb-6">
    Bestelling
  </h2>

  <div className="space-y-4">

    {cart.map((product, index) => (
      <div
        key={index}
        className="flex justify-between items-center border-b border-border pb-4"
      >
        <div>
          <h3 className="font-semibold">
            {product.name}
          </h3>

          <p className="text-muted-foreground text-sm">
            Aantal: {product.quantity}
          </p>
        </div>

        <p className="font-semibold">
          € {(product.price * product.quantity).toFixed(2)}
        </p>
      </div>
    ))}

  </div>

  <div className="mt-6 space-y-2">

    <div className="flex justify-between">
      <span>Subtotaal</span>
      <span>€ {totalPrice.toFixed(2)}</span>
    </div>

    <div className="flex justify-between">
      <span>Verzendkosten</span>
      <span>€ {shippingCost.toFixed(2)}</span>
    </div>

    <div className="flex justify-between text-2xl font-bold pt-4">
      <span>Totaal</span>
      <span>€ {grandTotal.toFixed(2)}</span>
    </div>

  </div>
</div>
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">

            <input
              type="text"
              placeholder="Volledige naam"
               value={name}
  onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
            />

            <input
              type="email"
              placeholder="E-mailadres"
                value={email}
    onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
            />

            <input
              type="tel"
              placeholder="Telefoonnummer"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
            />

            <input
              type="text"
              placeholder="Straatnaam + huisnummer"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Postcode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
              />

              <input
                type="text"
                placeholder="Plaats"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
              />
            </div>

            <textarea
              placeholder="Opmerkingen bij bestelling"
                value={notes}
    onChange={(e) => setNotes(e.target.value)}
              className="w-full p-4 rounded-lg bg-secondary border border-border text-black min-h-[140px]"
            />
<div>
  <label className="block mb-2 font-semibold">
    Upload je logo
  </label>

  <input
    type="file"
    accept="image/*,.pdf,.ai,.eps"
    onChange={(e) => {
      if (e.target.files?.[0]) {
        setLogo(e.target.files[0])
      }
    }}
    className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
  />

  {logo && (
    <p className="mt-2 text-sm text-muted-foreground">
      Geselecteerd bestand: {logo.name}
    </p>
  )}
</div>
            <button
  onClick={async () => {
  const response = await fetch("/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      address,
      postalCode,
      city,
      notes,
      cart,
      grandTotal,
      logoName: logo?.name || null,
    }),
  })

  const data = await response.json()

  if (data.success) {
    setSuccess(true)

    localStorage.removeItem("cart")
  }
}}
    
  className="w-full bg-primary text-white py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition"
>
  Bestelling afronden
</button>
{success && (
  <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-2xl p-4 text-center">
    Je bestelling is succesvol geplaatst 😄
  </div>
)}
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}