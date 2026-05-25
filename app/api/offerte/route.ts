
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      company,
      email,
      phone,
      quantity,
      message,
      product
    } = body

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "p.achterbosch@gmail.com",
      subject: "Nieuwe offerte aanvraag",
      html: `
        <h1>Nieuwe offerte aanvraag</h1>

        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phone}</p>
        <p><strong>Bedrijf:</strong> ${company}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Aantal:</strong> ${quantity}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)

    return Response.json({ success: false })
  }
}