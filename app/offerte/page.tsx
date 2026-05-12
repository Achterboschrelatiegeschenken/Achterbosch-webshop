export default function OffertePage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Offerte aanvragen
        </h1>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Naam"
            className="w-full p-4 rounded bg-card border border-border"
          />

          <input
            type="text"
            placeholder="Bedrijfsnaam"
            className="w-full p-4 rounded bg-card border border-border"
          />

          <input
            type="email"
            placeholder="E-mailadres"
            className="w-full p-4 rounded bg-card border border-border"
          />

          <input
            type="tel"
            placeholder="Telefoonnummer"
            className="w-full p-4 rounded bg-card border border-border"
          />

          <select className="w-full p-4 rounded bg-card border border-border">
            <option>Gegraveerde flesopener</option>
            <option>Kurken onderzetters</option>
            <option>3D geprint product</option>
            <option>Sleutelhangers</option>
            <option>Overig</option>
          </select>

          <input
            type="number"
            placeholder="Aantal"
            className="w-full p-4 rounded bg-card border border-border"
          />

          <textarea
            placeholder="Extra wensen of opmerkingen"
            className="w-full p-4 rounded bg-card border border-border h-40"
          />

          <button
            type="submit"
            className="bg-primary text-white px-8 py-4 rounded"
          >
            Offerte aanvragen
          </button>

        </form>
      </div>
    </main>
  )
}