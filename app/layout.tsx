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
    default: 'Local Optimize – Mehr Umsatz durch messbaren Google Traffic',
    template: '%s | Local Optimize',
  },
  description:
    'Ihr Google-Spezialist für SEO, Google Ads, Social Media, Webanalyse und KI Consulting. Über 250 zufriedene Kunden, 10+ Jahre Erfahrung. Jetzt kostenlose Website-Analyse starten.',
  metadataBase: new URL('https://localoptimize.de'),
  alternates: {
    canonical: 'https://localoptimize.de',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://localoptimize.de',
    siteName: 'Local Optimize',
    title: 'Local Optimize – Mehr Umsatz durch messbaren Google Traffic',
    description:
      'Ihr Google-Spezialist für SEO, Google Ads, Social Media und Webanalyse. Über 250 zufriedene Kunden, 10+ Jahre Erfahrung.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Optimize – Mehr Umsatz durch messbaren Google Traffic',
    description:
      'Ihr Google-Spezialist für SEO, Google Ads, Social Media und Webanalyse. Über 250 zufriedene Kunden, 10+ Jahre Erfahrung.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://localoptimize.de/#business',
      name: 'Local Optimize',
      description:
        'SEO, Google Ads, Social Media Marketing und Webanalyse aus einer Hand. Ihr Google-Spezialist für messbares digitales Wachstum.',
      url: 'https://localoptimize.de',
      telephone: '+4978449183272',
      email: 'info@localoptimize.de',
      founder: {
        '@type': 'Person',
        name: 'Friederike Holzhauser',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Badstr. 16',
        addressLocality: 'Rheinau',
        postalCode: '77866',
        addressCountry: 'DE',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Deutschland',
      },
      knowsAbout: [
        'Suchmaschinenoptimierung',
        'Google Ads',
        'Google Analytics',
        'Social Media Marketing',
        'Display Advertising',
        'Remarketing',
        'Inbound Marketing',
        'KI Consulting',
        'Künstliche Intelligenz',
        'Prozessautomatisierung',
        'KI-Strategie',
        'Chatbot-Entwicklung',
      ],
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
        reviewCount: '3',
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Thomas Berger' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Seit der Zusammenarbeit mit Local Optimize haben wir unsere Anfragen über Google verdreifacht. Die Ergebnisse sprechen für sich.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Sandra Koch' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Endlich eine Agentur, die nicht nur verspricht sondern liefert. Unsere Praxis ist jetzt bei fast allen relevanten Suchanfragen auf Seite 1.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Martin Schäfer' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody:
            'Transparentes Reporting, messbare Resultate und ein Team, das wirklich zuhört. Wir empfehlen Local Optimize jederzeit weiter.',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://localoptimize.de/#website',
      url: 'https://localoptimize.de',
      name: 'Local Optimize',
      inLanguage: 'de-DE',
      publisher: { '@id': 'https://localoptimize.de/#business' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${body.variable} ${heading.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
