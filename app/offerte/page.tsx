"use client"

import { useState } from "react"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { useRouter } from "next/navigation"

export default function OffertePage() {
 const [name, setName] = useState("")
 const [company, setCompany] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [quantity, setQuantity] = useState("")
const [message, setMessage] = useState("")
const [product, setProduct] = useState("")
const [success, setSuccess] = useState(false)
const router = useRouter()

  return (
  <>
    <Header />

    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Offerte aanvragen
        </h1>

        <div className="space-y-6">
<div>
  <label className="block mb-2 font-semibold">
    Naam <span className="text-red-500">*</span>
  </label>
          <input
            type="text"
            placeholder="Naam (verplicht)"
            required
            value={name}
onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded bg-card border border-border"
          />
          </div>

          <input
            type="text"
            placeholder="Bedrijfsnaam (Optioneel)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full p-4 rounded bg-card border border-border"
          />
<div>
  <label className="block mb-2 font-semibold">
    E-mailadres <span className="text-red-500">*</span>
  </label>
          <input
            type="email"
            placeholder="E-mailadres (verplicht)"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded bg-card border border-border"
          />
          </div>

 <div>
  <label className="block mb-2 font-semibold">
    Telefoonnummer <span className="text-red-500">*</span>
  </label>

  <input
    type="tel"
    placeholder="Telefoonnummer (verplicht)"
    required
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="w-full p-4 rounded bg-card border border-border"
  />
</div>
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full p-4 rounded bg-card border border-border"
          >
            <option value="">Kies een product</option>
            <option>flesopeners</option>
            <option>Kurken onderzetters</option>
            <option>Houten onderzetters</option>
            <option>Sleutelhangers</option>
            <option>Pennen</option>
            <option>Borrelplank</option>
            <option>Overig</option>
          </select>

          <input
            type="number"
            placeholder="Aantal"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-4 rounded bg-card border border-border"
          />

          <textarea
            placeholder="Extra wensen of opmerkingen"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 rounded bg-card border border-border h-40"
          />

         <button
         type="button"
  onClick={async () => {
    if (!name || !email || !phone) {
  alert("Vul alle verplichte velden in.")
  return
}
    const response = await fetch("/api/offerte", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        company,
        email,
        phone,
        quantity,
        product,
        message,
      }),
    })

    const data = await response.json()

    if (data.success) {
      setSuccess(true)
    }
}}
  className="bg-primary text-white px-6 py-3 rounded-lg"
>
  Offerte aanvragen
</button>
  
{success && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full text-center">

      <h2 className="text-2xl font-bold mb-4 text-green-400">
        Offerte succesvol verzonden 😄
      </h2>

      <p className="text-muted-foreground mb-6">
        Wij nemen zo snel mogelijk contact met u op.
      </p>

      <button
        onClick={() => router.push("/")}
        className="bg-primary text-white px-6 py-3 rounded-xl w-full"
      >
        OK
      </button>

    </div>

  </div>
)}
       
 </div>    
</div>
       </main>

    <Footer />
  </>
  )
}