import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.achterboschrelatiegeschenken.nl",
      lastModified: new Date(),
    },
   
    {
      url: "https://www.achterboschrelatiegeschenken.nl/winkelwagen",
      lastModified: new Date(),
    },
    {
      url: "https://www.achterboschrelatiegeschenken.nl/checkout",
      lastModified: new Date(),
    },
    {
      url: "https://www.achterboschrelatiegeschenken.nl/producten/borrelplank",
      lastModified: new Date(),
    },
    {
      url: "https://www.achterboschrelatiegeschenken.nl/producten/pennen",
      lastModified: new Date(),
    },
    {
      url: "https://www.achterboschrelatiegeschenken.nl/producten/houten-flesopener",
      lastModified: new Date(),
    },
  ]
}