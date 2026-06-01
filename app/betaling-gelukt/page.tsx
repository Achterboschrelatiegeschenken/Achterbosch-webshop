"use client"

import { useEffect, useState } from "react"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

export default function BetalingGelukt() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const sendOrder = async () => {
      const storedOrder = localStorage.getItem("pendingOrder")

      if (!storedOrder) {
        setLoading(false)
        return
      }

      const order = JSON.parse(storedOrder)

      const formData = new FormData()

      formData.append("name", order.name)
      formData.append("company", order.company || "")
      formData.append("vatNumber", order.vatNumber || "")
      formData.append("email", order.email)
      formData.append("phone", order.phone)
      formData.append("address", order.address)
      formData.append("postalCode", order.postalCode)
      formData.append("city", order.city)
      formData.append("notes", order.notes || "")
      formData.append("grandTotal", order.grandTotal.toString())
      formData.append("cart", JSON.stringify(order.cart))
      if (order.logoBase64) {
  formData.append("logoBase64", order.logoBase64)
  formData.append("logoName", order.logoName || "logo")
}

      const response = await fetch("/api/order", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
  localStorage.removeItem("cart")
  localStorage.removeItem("pendingOrder")

  window.dispatchEvent(new Event("cartUpdated"))
}

      setLoading(false)
    }

    sendOrder()
  }, [])

  return (
  <>
    <Header />

    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        {loading ? (
          <>
            <h1 className="text-4xl font-bold mb-4">
              Bestelling verwerken...
            </h1>

            <p>
              Een ogenblik geduld.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-4">
              Betaling geslaagd 🎉
            </h1>

            <p>
              Bedankt voor uw bestelling.
              <a
  href="/"
  className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-xl"
>
  Terug naar home
</a>
            </p>
          </>
          
        )}

      </div>
    </main>

    <Footer />
  </>
)
}