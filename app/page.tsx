import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import CtaBanner from '@/components/sections/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">{/* offset for fixed nav height */}
        <Hero />
        <Stats />
        <Services />
        <Process />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
