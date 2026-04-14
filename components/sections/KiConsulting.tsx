// components/sections/KiConsulting.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

interface KiService {
  icon: string
  name: string
  description: string
  tags: string[]
}

const kiServices: KiService[] = [
  {
    icon: '🧠',
    name: 'KI-Strategie & Beratung',
    description:
      'Wir analysieren Ihre Prozesse und zeigen konkret, wo KI echten Mehrwert schafft — mit einer klaren Roadmap und realistischen Umsetzungsschritten.',
    tags: ['Use-Case-Analyse', 'Roadmap', 'Machbarkeitsstudie'],
  },
  {
    icon: '⚙️',
    name: 'Prozessautomatisierung',
    description:
      'Wiederkehrende Aufgaben automatisieren, Workflows optimieren und Ihre Mitarbeiter für die wirklich wichtigen Dinge freihalten.',
    tags: ['Workflow-Automation', 'n8n / Make', 'API-Integration'],
  },
  {
    icon: '✍️',
    name: 'KI-gestützte Content-Produktion',
    description:
      'Marketing-Content in Rekordzeit erstellen — SEO-optimiert, in Ihrer Markenstimme und konsistent über alle Kanäle hinweg.',
    tags: ['SEO-Content', 'Social Media', 'E-Mail-Marketing'],
  },
  {
    icon: '💬',
    name: 'KI-Kundenservice & Chatbots',
    description:
      'Kundenfragen automatisch beantworten, Leads qualifizieren und rund um die Uhr erreichbar sein — ohne zusätzliches Personal.',
    tags: ['Chatbot-Aufbau', 'Lead-Qualifizierung', 'FAQ-Automatisierung'],
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

export default function KiConsulting() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="ki-consulting"
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #060E12 0%, #0A1A22 50%, #060E12 100%)',
      }}
    >
      {/* Subtle accent glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(118,205,212,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-orange border border-brand-orange/30 bg-brand-dark px-3 py-1 rounded mb-4">
            KI Consulting
          </span>
          <h2
            className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Künstliche Intelligenz,{' '}
            <span className="text-brand-cyan">praktisch eingesetzt</span>
          </h2>
          <p className="text-brand-cyan/50 max-w-lg mx-auto text-sm leading-relaxed">
            Kein Hype, keine leeren Versprechen — wir zeigen Ihnen, wo KI in
            Ihrem Unternehmen heute schon konkret Ergebnisse liefert.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {kiServices.map((service, i) => (
            <motion.div
              key={service.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="relative bg-brand-surface border border-brand-teal/25 rounded-xl p-6 hover:border-brand-cyan/35 transition-colors overflow-hidden group"
            >
              {/* Top accent line — orange for KI section */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange/60 to-brand-cyan/60 opacity-70" />

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-orange/10 border border-brand-orange/20 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-brand-light text-sm mb-2">
                    {service.name}
                  </h3>
                  <p className="text-brand-cyan/50 text-xs leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-brand-orange/70 bg-brand-orange/8 border border-brand-orange/20 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <p className="text-center text-brand-cyan/30 text-xs mt-10">
          Noch unsicher, was für Ihr Unternehmen passt?{' '}
          <a href="#kontakt" className="text-brand-cyan/60 hover:text-brand-cyan transition-colors underline underline-offset-2">
            Wir beraten Sie kostenlos.
          </a>
        </p>
      </div>
    </section>
  )
}
