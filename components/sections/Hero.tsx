// components/sections/Hero.tsx
'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const serviceTags = [
  'SEO',
  'Google Ads',
  'Display & Remarketing',
  'Analytics',
  'Social Media',
  'Inbound Marketing',
]

export default function Hero() {
  return (
    <section
      className="relative py-24 md:py-32 px-6 text-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(20,73,90,0.30) 0%, transparent 70%), linear-gradient(180deg, #0B1F26 0%, #060E12 100%)',
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 40% at 20% 50%, rgba(242,141,33,0.04) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 50%, rgba(118,205,212,0.04) 0%, transparent 60%)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl mx-auto"
      >
        <motion.p
          variants={item}
          className="text-xs font-bold tracking-[4px] uppercase text-brand-cyan mb-6"
        >
          Ihr Google-Spezialist für digitales Wachstum
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-white mb-5"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Mehr Umsatz durch{' '}
          <span className="text-brand-orange">messbaren</span>{' '}
          Google Traffic
        </motion.h1>

        <motion.p
          variants={item}
          className="text-brand-cyan/60 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Wir bringen Ihr Unternehmen auf Seite 1 — mit datengetriebenem SEO,
          Google Ads und Social Media. Keine Versprechen. Nur Ergebnisse.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <a
            href="#kontakt"
            className="bg-brand-orange text-white font-bold px-6 py-3 rounded text-sm hover:bg-brand-orange/90 transition-colors"
          >
            Kostenlose Website-Analyse starten →
          </a>
          <a
            href="#leistungen"
            className="border border-brand-cyan/30 text-brand-cyan text-sm px-5 py-3 rounded hover:border-brand-cyan/60 transition-colors"
          >
            Leistungen ansehen
          </a>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-2">
          {serviceTags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-brand-cyan/50 border border-brand-teal/40 px-3 py-1 rounded-full bg-brand-teal/10"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
