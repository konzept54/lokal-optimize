import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://localoptimize.de'
  const now = new Date()

  return [
    { url: base, lastModified: now, priority: 1.0 },
    { url: `${base}/leistungen`, lastModified: now, priority: 0.9 },
    { url: `${base}/ueber-uns`, lastModified: now, priority: 0.8 },
    { url: `${base}/referenzen`, lastModified: now, priority: 0.8 },
    { url: `${base}/kontakt`, lastModified: now, priority: 0.7 },
  ]
}
