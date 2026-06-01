import { NextResponse } from "next/server"
import createMollieClient from "@mollie/api-client"

const mollieClient = createMollieClient({
  apiKey: process.env.MOLLIE_API_KEY?.trim() || "",
})

export async function POST(req: Request) {
  try {
    const { amount } = await req.json()

    const payment = await mollieClient.payments.create({
  amount: {
    currency: "EUR",
    value: amount.toFixed(2),
  },
  description: "Bestelling Achterbosch",
  redirectUrl: "https://www.achterboschrelatiegeschenken.nl/betaling-gelukt",
})

return NextResponse.json({
  checkoutUrl: payment._links.checkout.href,
})
  } catch (error: any) {
  console.error("MOLLIE ERROR:", error)

  return NextResponse.json(
    {
      error: error?.message || String(error),
    },
    { status: 500 }
  )
}
}