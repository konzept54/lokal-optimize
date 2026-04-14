// components/sections/UeberUns.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  {
    icon: '📊',
    title: 'Messbare Ergebnisse',
    description: 'Kein Marketing-Blabla. Jede Maßnahme wird gemessen, jede Entscheidung datenbasiert getroffen.',
  },
  {
    icon: '🤝',
    title: 'Persönliche Betreuung',
    description: 'Sie haben immer einen festen Ansprechpartner — kein Callcenter, keine anonyme Agentur.',
  },
  {
    icon: '🔍',
    title: 'Regionale Expertise',
    description: 'Wir kennen den deutschen Markt. Unsere Strategien sind auf Ihr lokales Umfeld zugeschnitten.',
  },
]

export default function UeberUns() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ueber-uns" className="py-20 px-6 bg-brand-dark">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-cyan border border-brand-cyan/30 bg-brand-surface px-3 py-1 rounded mb-4">
              Über uns
            </span>
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight text-white mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ihr Partner für<br />
              <span className="text-brand-cyan">nachhaltiges Wachstum</span>
            </h2>
            <p className="text-brand-cyan/60 text-sm leading-relaxed mb-4">
              Local Optimize wurde mit einer klaren Mission gegründet: kleinen und mittelständischen
              Unternehmen die gleichen digitalen Marketingmöglichkeiten zu bieten wie großen Konzernen —
              aber persönlich, transparent und ohne Bullshit.
            </p>
            <p className="text-brand-cyan/60 text-sm leading-relaxed">
              Mit über 10 Jahren Erfahrung in SEO, Google Ads und digitalem Marketing haben wir mehr als
              250 Unternehmen dabei geholfen, online sichtbar zu werden und messbar zu wachsen.
            </p>
          </motion.div>

          {/* Values side */}
          <div className="flex flex-col gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.55, ease: 'easeOut' }}
                className="flex gap-4 bg-brand-surface border border-brand-teal/25 rounded-xl p-5 hover:border-brand-cyan/30 transition-colors"
              >
                <div className="w-10 h-10 bg-brand-teal/30 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-bold text-brand-light text-sm mb-1">{v.title}</h3>
                  <p className="text-brand-cyan/50 text-xs leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
