import "./globals.css"

export const metadata = {
  title: 'Achterbosch Relatiegeschenken',
  description: 'Premium relatiegeschenken met lasergravure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
