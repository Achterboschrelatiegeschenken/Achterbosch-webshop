"use client"

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { useEffect, useState } from "react"
import { Upload } from "lucide-react"
import { Trash2 } from "lucide-react"

export default function CheckoutPage() {
  const [success, setSuccess] = useState(false)
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
const [vatNumber, setVatNumber] = useState("")
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
  type="text"
  placeholder="Bedrijfsnaam"
  value={company}
  onChange={(e) => setCompany(e.target.value)}
  className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
/>
<input
  type="text"
  placeholder="BTW-nummer"
  value={vatNumber}
  onChange={(e) => setVatNumber(e.target.value)}
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


    
<label className="cursor-pointer">
  <input
    type="file"
    accept="image/*,.pdf,.ai,.eps"
    onChange={(e) => {
      if (e.target.files?.[0]) {
        setLogo(e.target.files[0])
      }
    }}
    className="hidden"
  />

  <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center bg-card hover:border-primary transition">

    <div className="flex flex-col items-center gap-4">

      <div className="bg-secondary p-4 rounded-full">
        <Upload className="w-8 h-8 text-primary" />
      </div>

      <div>
        <p className="text-lg font-semibold">
          Upload uw logo of ontwerp
        </p>

        <p className="text-muted-foreground text-sm mt-1">
          PNG, JPG, SVG, PDF, AI of EPS bestanden
        </p>
      </div>

    </div>

  </div>

</label>
    

  {logo && (
  <div className="mt-4 flex items-center justify-between bg-secondary rounded-xl p-4">

    <p className="text-sm text-muted-foreground">
      {logo.name}
    </p>

    <button
      onClick={() => setLogo(null)}
      className="text-red-500 hover:text-red-600 transition"
    >
      <Trash2 className="w-7 h-7" />
    </button>

  </div>
)}
</div>
            <button
  onClick={async () => {
  const formData = new FormData()

formData.append("name", name)
formData.append("company", company)
formData.append("vatNumber", vatNumber)
formData.append("email", email)
formData.append("phone", phone)
formData.append("address", address)
formData.append("postalCode", postalCode)
formData.append("city", city)
formData.append("notes", notes)

formData.append("grandTotal", grandTotal.toString())

formData.append("cart", JSON.stringify(cart))

if (logo) {
  formData.append("logo", logo)
}

const response = await fetch("/api/order", {
  method: "POST",
  body: formData,

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