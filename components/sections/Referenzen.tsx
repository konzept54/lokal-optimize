// components/sections/Referenzen.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  result: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Thomas Berger',
    role: 'Geschäftsführer',
    company: 'Berger Haustechnik GmbH',
    quote: 'Seit der Zusammenarbeit mit Local Optimize haben wir unsere Anfragen über Google verdreifacht. Die Ergebnisse sprechen für sich.',
    result: '+280 % organischer Traffic in 8 Monaten',
  },
  {
    name: 'Sandra Koch',
    role: 'Inhaberin',
    company: 'Zahnarztpraxis Koch',
    quote: 'Endlich eine Agentur, die nicht nur verspricht sondern liefert. Unsere Praxis ist jetzt bei fast allen relevanten Suchanfragen auf Seite 1.',
    result: 'Seite 1 bei 23 Keywords',
  },
  {
    name: 'Martin Schäfer',
    role: 'Marketing-Leiter',
    company: 'Schäfer Immobilien AG',
    quote: 'Transparentes Reporting, messbare Resultate und ein Team, das wirklich zuhört. Wir empfehlen Local Optimize jederzeit weiter.',
    result: '4,1× Return on Ad Spend',
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function Referenzen() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="referenzen" className="py-20 px-6 bg-brand-surface">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-cyan border border-brand-cyan/30 bg-brand-dark px-3 py-1 rounded mb-4">
            Referenzen
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
            Was unsere Kunden{' '}
            <span className="text-brand-orange">sagen</span>
          </h2>
          <p className="text-brand-cyan/50 max-w-md mx-auto text-sm leading-relaxed">
            Über 250 Unternehmen vertrauen Local Optimize — hier sind einige ihrer Erfolgsgeschichten.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="relative bg-brand-dark border border-brand-teal/30 rounded-xl p-6 flex flex-col gap-4 hover:border-brand-cyan/30 transition-colors"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan opacity-40 rounded-t-xl" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-brand-orange text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-brand-cyan/70 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result badge */}
              <div className="inline-block text-xs font-bold text-brand-cyan bg-brand-teal/20 border border-brand-teal/40 rounded px-2.5 py-1 w-fit">
                {t.result}
              </div>

              {/* Author */}
              <div className="border-t border-brand-teal/20 pt-3">
                <div className="font-bold text-brand-light text-sm">{t.name}</div>
                <div className="text-xs text-brand-cyan/40">{t.role} · {t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
