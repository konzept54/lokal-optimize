import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import KiConsulting from '@/components/sections/KiConsulting'
import Referenzen from '@/components/sections/Referenzen'
import UeberUns from '@/components/sections/UeberUns'
import Kontakt from '@/components/sections/Kontakt'

export const metadata: Metadata = {
  title: {
    absolute: 'Local Optimize – Mehr Umsatz durch messbaren Google Traffic',
  },
  description:
    'Ihr Google-Spezialist für SEO, Google Ads, Social Media, Webanalyse und KI Consulting. Über 250 zufriedene Kunden, 10+ Jahre Erfahrung. Jetzt kostenlose Website-Analyse starten.',
  alternates: {
    canonical: 'https://localoptimize.de',
  },
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">{/* offset for fixed nav height */}
        <Hero />
        <Stats />
        <Services />
        <Process />
        <KiConsulting />
        <Referenzen />
        <UeberUns />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}
