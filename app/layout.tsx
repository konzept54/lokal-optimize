import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const body = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const heading = DM_Serif_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: {
    default: 'Local Optimize – Ihr Partner für digitales Wachstum',
    template: '%s | Local Optimize',
  },
  description:
    'SEO, Google Ads, Social Media & Webanalyse aus einer Hand. Wir sorgen für mehr Umsatz mit messbarem Google Traffic.',
  metadataBase: new URL('https://localoptimize.de'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://localoptimize.de',
    siteName: 'Local Optimize',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${body.variable} ${heading.variable}`}>
      <body>{children}</body>
    </html>
  )
}
