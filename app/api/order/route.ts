import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      email,
      phone,
      address,
      postalCode,
      city,
      notes,
      cart,
      grandTotal,
      logoName,
    } = body

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "p.achterbosch@gmail.com",
      subject: "Nieuwe bestelling ontvangen",
      html: `
        <h1>Nieuwe bestelling</h1>

        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phone}</p>
        <p><strong>Adres:</strong> ${address}</p>
        <p><strong>Postcode:</strong> ${postalCode}</p>
        <p><strong>Plaats:</strong> ${city}</p>
<p><strong>Logo bestand:</strong> ${logoName}</p>
        <h2>Bestelling</h2>

        ${cart
          .map(
            (product: any) => `
              <div>
                ${product.name} × ${product.quantity}
              </div>
            `
          )
          .join("")}

        <h2>Totaal: € ${grandTotal.toFixed(2)}</h2>

        <p><strong>Opmerkingen:</strong></p>
        <p>${notes}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)

    return Response.json({ success: false })
  }
}