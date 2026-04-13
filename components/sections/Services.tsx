// components/sections/Services.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

interface Service {
  icon: string
  name: string
  description: string
}

const services: Service[] = [
  {
    icon: '🔍',
    name: 'Suchmaschinen-Optimierung',
    description: 'Nachhaltig auf Seite 1 bei Google — durch technisches SEO, Content und Linkbuilding.',
  },
  {
    icon: '📢',
    name: 'Google Ads & SEM',
    description: 'Sofortige Sichtbarkeit durch zielgenaue Suchanzeigen mit maximiertem ROAS.',
  },
  {
    icon: '🎯',
    name: 'Display & Remarketing',
    description: 'Ihre Marke bleibt im Kopf — durch gezielte Display-Kampagnen und Remarketing.',
  },
  {
    icon: '📊',
    name: 'Webanalyse & Analytics',
    description: 'Daten, die Entscheidungen treiben — Setup, Tracking und verständliche Reports.',
  },
  {
    icon: '📱',
    name: 'Social Media Marketing',
    description: 'Reichweite und Engagement auf den richtigen Plattformen für Ihre Zielgruppe.',
  },
  {
    icon: '🧲',
    name: 'Inbound Marketing',
    description: 'Kunden, die zu Ihnen kommen — durch hochwertigen Content und Lead-Nurturing.',
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 px-6 bg-brand-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-cyan border border-brand-cyan/30 bg-brand-surface px-3 py-1 rounded mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
            Alles aus{' '}
            <span className="text-brand-cyan">einer Hand</span>
          </h2>
          <p className="text-brand-cyan/50 max-w-md mx-auto text-sm leading-relaxed">
            Von der ersten Keyword-Analyse bis zur laufenden Optimierung —
            wir begleiten Sie auf dem ganzen Weg.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="relative bg-brand-surface border border-brand-teal/30 rounded-xl p-6 hover:border-brand-cyan/40 transition-colors overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-cyan opacity-60" />
              <div className="w-10 h-10 bg-brand-teal/30 rounded-lg flex items-center justify-center text-xl mb-4">
                {service.icon}
              </div>
              <h3 className="font-bold text-brand-light text-sm mb-2">
                {service.name}
              </h3>
              <p className="text-brand-cyan/50 text-xs leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
