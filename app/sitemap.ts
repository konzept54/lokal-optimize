import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://localoptimize.de'
  const now = new Date()

  return [
    { url: base, lastModified: now, priority: 1.0 },
    { url: `${base}/impressum`, lastModified: now, priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: now, priority: 0.2 },
  ]
}
