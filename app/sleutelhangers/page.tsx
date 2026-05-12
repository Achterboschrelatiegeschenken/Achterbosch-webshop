import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
export default function SleutelhangersPage() {
  return (
  <>
    <Header />

    <main className="min-h-screen bg-background text-foreground py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Gegraveerde Sleutelhangers
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Gepersonaliseerde sleutelhangers met lasergravure.
            Perfect voor bedrijven, evenementen en promotionele doeleinden.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">

<div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-full">            <img
  src="/products/sleutelhanger-hout.jpeg"
  alt="Houten sleutelhanger"
  className="w-full h-48 object-contain bg-secondary"
/>

<div className="p-6 flex flex-col flex-1">
                  <h2 className="text-2xl font-semibold mb-3">
                Houten Sleutelhanger
              </h2>

              <p className="text-muted-foreground mb-6">
                Luxe houten sleutelhanger met nauwkeurige lasergravure.
              </p>

              <button className="mt-auto bg-primary text-white px-6 py-3 rounded-lg">
                Offerte aanvragen
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="h-64 bg-secondary"></div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">
                Leren Sleutelhanger
              </h2>

              <p className="text-muted-foreground mb-6">
                Duurzame sleutelhangers van Leer met gravure.
              </p>

              <button className="bg-primary text-white px-6 py-3 rounded-lg">
                Offerte aanvragen
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="h-64 bg-secondary"></div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">
                Acryl Sleutelhanger
              </h2>

              <p className="text-muted-foreground mb-6">
                Moderne sleutelhangers met strakke afwerking.
              </p>

              <button className="bg-primary text-white px-6 py-3 rounded-lg">
                Offerte aanvragen
              </button>
            </div>
          </div>

        </div>

      </div>
       </main>

    <Footer />
  </>
  )
}