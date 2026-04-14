import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Referenzen from '@/components/sections/Referenzen'
import UeberUns from '@/components/sections/UeberUns'
import Kontakt from '@/components/sections/Kontakt'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">{/* offset for fixed nav height */}
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Referenzen />
        <UeberUns />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}
