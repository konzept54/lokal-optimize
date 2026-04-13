// components/sections/Process.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Kostenlose Analyse',
    description: 'Wir analysieren Ihre aktuelle Sichtbarkeit und identifizieren das größte Wachstumspotenzial.',
    highlight: false,
  },
  {
    number: '2',
    title: 'Strategie & Plan',
    description: 'Maßgeschneidertes Konzept mit klaren Zielen, Maßnahmen und messbaren KPIs.',
    highlight: true,
  },
  {
    number: '3',
    title: 'Umsetzung & Wachstum',
    description: 'Kontinuierliche Optimierung, transparentes Reporting — Ihr Traffic wächst nachhaltig.',
    highlight: false,
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-brand-surface to-brand-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-cyan border border-brand-cyan/30 bg-brand-surface px-3 py-1 rounded mb-4">
            So funktioniert es
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
            Ihr Weg zum{' '}
            <span className="text-brand-cyan">messbaren Erfolg</span>
          </h2>
        </div>

        <div ref={ref} className="relative flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-brand-teal via-brand-orange to-brand-teal" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5, ease: 'easeOut' }}
              className="flex-1 text-center px-6"
            >
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-black mx-auto mb-5 relative z-10 bg-brand-dark ${
                  step.highlight
                    ? 'border-brand-orange text-brand-orange'
                    : 'border-brand-teal text-brand-cyan'
                }`}
              >
                {step.number}
              </div>
              <h3 className="font-bold text-brand-light text-sm mb-2">{step.title}</h3>
              <p className="text-brand-cyan/50 text-xs leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
