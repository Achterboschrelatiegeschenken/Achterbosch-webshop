"use client"

import { useEffect, useState } from "react"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Trash2 } from "lucide-react"

export default function WinkelwagenPage() {
  const [cart, setCart] = useState<any[]>([])

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
        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold mb-12">
            Winkelwagen
          </h1>

         {cart.length === 0 ? (
  <div className="bg-card border border-border rounded-2xl p-8">
    <p className="text-muted-foreground">
      Je winkelwagen is momenteel leeg.
    </p>
  </div>
) : (
  <>
    <div className="space-y-6">

      {cart.map((product, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-2xl p-6 flex items-center gap-6"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-contain bg-secondary rounded-lg"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-semibold">
              {product.name}
              
            </h2>

            {product.fileName && (
  <p className="text-sm text-muted-foreground mt-1">
    Logo: {product.fileName}
  </p>
)}
            <p className="text-sm text-muted-foreground">
  € {getPrice(product).toFixed(2)} per stuk
</p>

            <div className="flex items-center gap-4 mt-2">

              <button
  onClick={() => {
    const updatedCart = [...cart]

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1
    } else {
      updatedCart.splice(index, 1)
    }

    setCart(updatedCart)

    localStorage.setItem("cart", JSON.stringify(updatedCart))

    window.dispatchEvent(new Event("cartUpdated"))
  }}
  className="bg-secondary px-3 py-1 rounded-lg"
>
  -
</button>

              <input
  type="number"
  min="1"
  value={product.quantity}
  onFocus={(e) => e.target.select()}
  onChange={(e) => {
    const newQuantity = Number(e.target.value)

    if (newQuantity >= 1) {
      const updatedCart = [...cart]

      updatedCart[index].quantity = newQuantity

      setCart(updatedCart)

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      )

      window.dispatchEvent(
        new Event("cartUpdated")
      )
    }
  }}
  className="w-20 text-center bg-white text-black border border-gray-300 rounded-lg py-1"
/>

              <button
                onClick={() => {
                  const updatedCart = [...cart]

                  updatedCart[index].quantity += 1

                  setCart(updatedCart)

                  localStorage.setItem("cart", JSON.stringify(updatedCart))
                  window.dispatchEvent(new Event("cartUpdated"))
                }}
                className="bg-primary text-white px-3 py-1 rounded-lg"
              >
                +
              </button>

            </div>

            <p className="text-muted-foreground mt-2">
              € {(getPrice(product) * product.quantity).toFixed(2)}
            </p>
          </div>

          <button
  onClick={() => {
    const updatedCart = cart.filter((_, i) => i !== index)

    setCart(updatedCart)

    localStorage.setItem("cart", JSON.stringify(updatedCart))

    window.dispatchEvent(new Event("cartUpdated"))
  }}
  className="text-red-500 hover:text-red-600 transition"
>
  <Trash2 className="w-6 h-6" />
</button>
        </div>
      ))}

    </div>
{totalPrice < 50 && (
  <div className="mb-6 bg-red-500/10 border border-white-500/30 text-white-400 rounded-2xl p-4">
    Nog € {(50 - totalPrice).toFixed(2)} besteden voor gratis verzending 🚚
  </div>
)}
    <div className="mt-10 flex justify-between items-center bg-card border border-border rounded-2xl p-6">
      <h2 className="text-2xl font-bold">
        Totaal
      </h2>

      <p className="text-2xl font-bold text-primary">
        € {totalPrice.toFixed(2)}
      </p>
    </div>
    <div className="mt-4 bg-card border border-border rounded-2xl p-6 flex justify-between items-center">
  <h2 className="text-xl font-semibold">
    Verzendkosten
  </h2>

  <p className="text-xl font-semibold">
    € {shippingCost.toFixed(2)}
  </p>
</div>

<div className="mt-4 bg-primary text-white rounded-2xl p-6">
  <div className="flex justify-between mb-2">
    <span>Excl. btw</span>
    <span>€ {totalExcl.toFixed(2)}</span>
  </div>

  <div className="flex justify-between mb-4">
    <span>BTW (21%)</span>
    <span>€ {btwAmount.toFixed(2)}</span>
  </div>

  <div className="border-t border-white/30 pt-4 flex justify-between items-center">
    <h2 className="text-2xl font-bold">
      Totaal incl. btw
    </h2>

    <p className="text-2xl font-bold">
      € {totalIncl.toFixed(2)}
    </p>
  </div>
</div>
<a
  href="/checkout"
  className="mt-6 block text-center bg-primary text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
>
  Doorgaan naar afrekenen
</a>
<a
  href="/#assortiment"
  className="mt-4 block text-center border border-border py-4 rounded-2xl text-lg font-semibold hover:bg-secondary transition"
>
  Verder winkelen
</a>
  </>
)}
        </div>
      </main>

      <Footer />
    </>
  )
} 


  
