import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
export default function OnderzettersPage() {
  return (
  <>
    <Header />

    <main className="min-h-screen bg-background text-foreground py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Gegraveerde Onderzetters
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Luxe onderzetters met gepersonaliseerde lasergravure.
            Perfect voor horeca, bedrijven en relatiegeschenken.
          </p>
        </div>

<div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
<div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-full">            
            <img
              src="/products/onderzetter-kurk.jpeg"
              alt="Kurken onderzetter"
className="w-full h-48 object-contain bg-secondary"
            />

            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-semibold mb-3">
                Kurken Onderzetter
              </h2>

              <p className="text-muted-foreground mb-6">
                Duurzame kurken onderzetters met strakke gravure.
              </p>

              <button className="mt-auto bg-primary text-white px-6 py-3 rounded-lg">              
                Offerte aanvragen
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">

            <img
              src="/products/onderzetter-hout.jpeg"
              alt="Houten onderzetter"
              className="w-full h-48 object-contain bg-secondary"
            />

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">
                Houten Onderzetter
              </h2>

              <p className="text-muted-foreground mb-6">
                Luxe houten onderzetters voor horeca en bedrijven.
              </p>

              <button className="bg-primary text-white px-6 py-3 rounded-lg">
                Offerte aanvragen
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">

            <img
              src="/products/onderzetter-leisteen.jpeg"
              alt="Leisteen onderzetter"
className="w-full h-48 object-contain bg-secondary"        
    />

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">
                Leisteen Onderzetter
              </h2>

              <p className="text-muted-foreground mb-6">
                Stijlvolle leisteen onderzetters met diepe gravure.
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