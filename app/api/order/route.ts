import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get("name")
    const company = formData.get("company")
const vatNumber = formData.get("vatNumber")
const email = formData.get("email")
const phone = formData.get("phone")
const address = formData.get("address")
const postalCode = formData.get("postalCode")
const city = formData.get("city")
const notes = formData.get("notes")
const grandTotal = Number(formData.get("grandTotal"))
const cart = JSON.parse(formData.get("cart") as string)
const logo = formData.get("logo") as File | null

const logoBase64 = formData.get("logoBase64") as string | null
const logoNameFromBase64 = formData.get("logoName") as string | null

const logoName =
  logo?.name ||
  logoNameFromBase64 ||
  "Geen bestand"

    await resend.emails.send({

    attachments: logo
  ? [
      {
        filename: logo.name,
        content: Buffer.from(await logo.arrayBuffer()),
      },
    ]
  : logoBase64
  ? [
      {
        filename: logoNameFromBase64 || "logo.png",
        content: logoBase64.split(",")[1],
      },
    ]
  : [],
      from: "patrick@achterbosch-service.nl",
      to: "p.achterbosch@gmail.com",
      subject: "Nieuwe bestelling ontvangen",
      html: `
        <h1>Nieuwe bestelling</h1>

        <p><strong>Naam:</strong> ${name}</p>
          <p><strong>Bedrijf:</strong> ${company}</p>
          <p><strong>BTW-nummer:</strong> ${vatNumber}</p>
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
    await resend.emails.send({
  from: "patrick@achterbosch-service.nl",
  to: email as string,
 subject: "Bestelbevestiging - Achterbosch Relatiegeschenken",
  html: `
    <h1>Bedankt voor uw bestelling!</h1>

    <p>Beste ${name},</p>

<p>
Hartelijk dank voor uw bestelling bij Achterbosch Relatiegeschenken.
</p>

    <p>
      Wij hebben uw bestelling in goede orde ontvangen.
    </p>

    <p>
      Wij controleren uw bestelling en eventuele bestanden voordat wij met de productie starten.
    </p>

    <h2>Besteloverzicht</h2>

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

    <p>
      Heeft u vragen? Neem gerust contact met ons op.
    </p>

    <p>
      Achterbosch Relatiegeschenken<br />
      p.achterbosch@gmail.com<br />
      +31 (0)6 156 04 248
    </p>
  `,
})

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)

    return Response.json({ success: false })
  }
}