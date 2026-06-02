"use client"

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { useEffect, useState } from "react"
import { Upload } from "lucide-react"
import { Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

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
const [logoBase64, setLogoBase64] = useState("")
  const [cart, setCart] = useState<any[]>([])
  const router = useRouter()

useEffect(() => {
  const storedCart = localStorage.getItem("cart")

  if (storedCart) {
    setCart(JSON.parse(storedCart))
  }
}, [])
function getPrice(product: any) {
  if (product.name === "Houten Flesopener") {
    if (product.quantity >= 50) return 7.95
    if (product.quantity >= 10) return 8.95
    return 9.95
  }

  return product.price
}
const totalPrice = cart.reduce(
  (total, product) => total + getPrice(product) * product.quantity,
  0
)


const shippingCost = totalPrice >= 50 ? 0 : 6.95

const grandTotal = totalPrice + shippingCost
const totalIncl = grandTotal
const totalExcl = grandTotal / 1.21
const btwAmount = totalIncl - totalExcl
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
          € {(getPrice(product) * product.quantity).toFixed(2)}
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
<div className="space-y-2 border-t pt-4">
  <div className="flex justify-between text-sm">
    <span>Excl. btw</span>
    <span>€ {totalExcl.toFixed(2)}</span>
  </div>

  <div className="flex justify-between text-sm">
    <span>BTW (21%)</span>
    <span>€ {btwAmount.toFixed(2)}</span>
  </div>

  <div className="flex justify-between font-bold text-lg">
    <span>Totaal incl. btw</span>
    <span>€ {totalIncl.toFixed(2)}</span>
  </div>
</div>

  </div>
</div>
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
<label className="block mb-2 font-semibold">
  Volledige naam <span className="text-red-500">*</span>
</label>



            <input
              type="text"
              placeholder="Volledige naam "
              required
               value={name}
  onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
            />
<input
  type="text"
  placeholder="Bedrijfsnaam (Optioneel)"
  value={company}
  onChange={(e) => setCompany(e.target.value)}
  className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
/>

<input
  type="text"
  placeholder="BTW-nummer (Optioneel)"
  value={vatNumber}
  onChange={(e) => setVatNumber(e.target.value)}
  className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
/>
<label className="block mb-2 font-semibold">
  E-mailadres <span className="text-red-500">*</span>
</label>
            <input
              type="email"
              placeholder="E-mailadres  "
              required
                value={email}
    onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
            />
<label className="block mb-2 font-semibold">
  Telefoonnummer <span className="text-red-500">*</span>
</label>
            <input
              type="tel"
              placeholder="Telefoonnummer "
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
            />
<div className="space-y-6">

  <div>
    <label className="block mb-2 font-semibold">
      Straatnaam + huisnummer <span className="text-red-500">*</span>
    </label>

   <input
  type="text"
  placeholder="Straatnaam + huisnummer"
  required
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
/>
  </div>

  <div>
    <label className="block mb-2 font-semibold">
      Postcode <span className="text-red-500">*</span>
    </label>

   <input
  type="text"
  placeholder="Postcode"
  required
  value={postalCode}
  onChange={(e) => setPostalCode(e.target.value)}
  className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
/>
  </div>

<div>
  <label className="block mb-2 font-semibold">
    Plaats <span className="text-red-500">*</span>
  </label>

  <input
    type="text"
    placeholder="Plaats"
    required
    value={city}
    onChange={(e) => setCity(e.target.value)}
    className="w-full p-4 rounded-lg bg-secondary border border-border text-black"
  />
</div>


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
  const file = e.target.files?.[0]

  if (file) {
    setLogo(file)

    const reader = new FileReader()

    reader.onloadend = () => {
      setLogoBase64(reader.result as string)
    }

    reader.readAsDataURL(file)
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
    if (
  !name ||
  !email ||
  !phone ||
  !address ||
  !postalCode ||
  !city
) {
  alert("Vul alle verplichte velden in.")
  return
}
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

const response = await fetch("/api/create-payment", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    amount: grandTotal,
  }),
})

const data = await response.json()

localStorage.setItem(
  "pendingOrder",
  JSON.stringify({
    name,
    company,
    vatNumber,
    email,
    phone,
    address,
    postalCode,
    city,
    notes,
    grandTotal,
    cart,
    logoBase64,
logoName: logo?.name || "",
  })
)
console.log("Mollie response:", data)
if (!data.checkoutUrl) {
  alert(JSON.stringify(data))
  return
}
window.location.href = data.checkoutUrl
}}
className="w-full bg-primary text-white py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition"
>
  Bestelling afronden
</button>

{success && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full text-center">

      <h2 className="text-2xl font-bold mb-4 text-green-400">
        Bestelling succesvol geplaatst 😄
      </h2>

      <p className="text-muted-foreground mb-6">
        Wij gaan er zo snel mogelijk mee aan de slag.
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