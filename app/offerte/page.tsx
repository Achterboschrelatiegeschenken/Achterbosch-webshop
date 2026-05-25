"use client"

import { useState } from "react"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
export default function OffertePage() {
 const [name, setName] = useState("")
 const [company, setCompany] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [quantity, setQuantity] = useState("")
const [message, setMessage] = useState("")
const [product, setProduct] = useState("")
const [success, setSuccess] = useState(false)
  return (
  <>
    <Header />

    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Offerte aanvragen
        </h1>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Naam"
            value={name}
onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded bg-card border border-border"
          />

          <input
            type="text"
            placeholder="Bedrijfsnaam"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full p-4 rounded bg-card border border-border"
          />

          <input
            type="email"
            placeholder="E-mailadres"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded bg-card border border-border"
          />

          <input
            type="tel"
            placeholder="Telefoonnummer"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 rounded bg-card border border-border"
          />

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
  <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-2xl p-4 mt-4">
    Offerte succesvol verzonden 😄
  </div>
)}
        </form>
      </div>
       </main>

    <Footer />
  </>
  )
}