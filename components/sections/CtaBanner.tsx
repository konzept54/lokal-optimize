// components/sections/CtaBanner.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CtaBanner() {
  const [url, setUrl] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = url ? `?url=${encodeURIComponent(url)}` : ''
    router.push(`/kontakt${params}`)
  }

  return (
    <section
      className="relative py-20 px-6 overflow-hidden text-center"
      style={{
        background: 'linear-gradient(135deg, #14495A 0%, #0B2E38 50%, #0B1F26 100%)',
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(242,141,33,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
          Starten Sie mit einer kostenlosen Analyse
        </h2>
        <p className="text-brand-cyan/70 text-sm mb-8">
          In 48 Stunden wissen Sie, wo Ihr größtes Wachstumspotenzial liegt.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Ihre Website-URL eingeben..."
            className="flex-1 bg-brand-dark/70 border border-brand-cyan/25 rounded px-4 py-3 text-sm text-brand-light placeholder:text-brand-cyan/30 outline-none focus:border-brand-cyan/50 transition-colors"
          />
          <button
            type="submit"
            className="bg-brand-orange text-white text-sm font-bold px-5 py-3 rounded hover:bg-brand-orange/90 transition-colors whitespace-nowrap"
          >
            Jetzt analysieren →
          </button>
        </form>

        <p className="text-brand-cyan/30 text-xs mt-4">
          Kostenlos · Unverbindlich · Ergebnis in 48h
        </p>
      </div>
    </section>
  )
}
