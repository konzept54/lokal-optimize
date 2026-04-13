// components/sections/Stats.tsx
'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView, animate } from 'framer-motion'

interface StatItem {
  value: number
  suffix: string
  label: string
  color: 'cyan' | 'orange'
  isDecimal?: boolean
}

const stats: StatItem[] = [
  { value: 250, suffix: '+', label: 'Zufriedene Kunden', color: 'cyan' },
  { value: 3.2, suffix: '×', label: 'Ø Traffic-Zuwachs', color: 'orange', isDecimal: true },
  { value: 10, suffix: '+', label: 'Jahre Erfahrung', color: 'cyan' },
  { value: 98, suffix: '%', label: 'Weiterempfehlungsrate', color: 'orange' },
]

function AnimatedNumber({
  value,
  isDecimal,
}: {
  value: number
  isDecimal?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(isDecimal ? '0.0' : '0')

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) =>
        setDisplay(isDecimal ? v.toFixed(1) : String(Math.floor(v))),
    })
    return controls.stop
  }, [isInView, value, isDecimal])

  return <span ref={ref}>{display}</span>
}

export default function Stats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 bg-brand-surface border-y border-brand-teal/30">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`px-6 py-8 text-center ${
            i < stats.length - 1
              ? 'border-b md:border-b-0 md:border-r border-brand-teal/30'
              : ''
          }`}
        >
          <div
            className={`text-4xl md:text-5xl font-black tracking-tight mb-1 ${
              stat.color === 'orange' ? 'text-brand-orange' : 'text-brand-cyan'
            }`}
          >
            <AnimatedNumber value={stat.value} isDecimal={stat.isDecimal} />
            <span
              className={`text-2xl ${
                stat.color === 'orange'
                  ? 'text-brand-orange/60'
                  : 'text-brand-cyan/60'
              }`}
            >
              {stat.suffix}
            </span>
          </div>
          <div className="text-xs text-brand-cyan/50 uppercase tracking-widest mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  )
}
