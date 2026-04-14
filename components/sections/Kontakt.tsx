// components/sections/Kontakt.tsx
'use client'

import { useState } from 'react'

interface FormState {
  name: string
  email: string
  website: string
  message: string
}

export default function Kontakt() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', website: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Anfrage von ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nE-Mail: ${form.email}\nWebsite: ${form.website || '–'}\n\nNachricht:\n${form.message}`
    )
    window.location.href = `mailto:info@localoptimize.de?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section
      id="kontakt"
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #14495A 0%, #0B2E38 50%, #0B1F26 100%)',
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(242,141,33,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-cyan border border-brand-cyan/30 bg-brand-surface/40 px-3 py-1 rounded mb-4">
            Kontakt
          </span>
          <h2
            className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Starten Sie Ihr{' '}
            <span className="text-brand-orange">Wachstum</span>
          </h2>
          <p className="text-brand-cyan/70 text-sm max-w-md mx-auto">
            Kostenlose Erstberatung — wir melden uns innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-brand-cyan/50 mb-2">Telefon</div>
              <a
                href="tel:+4978449183272"
                className="text-brand-light font-bold text-lg hover:text-brand-cyan transition-colors"
              >
                +49 7844 918 32 72
              </a>
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-brand-cyan/50 mb-2">E-Mail</div>
              <a
                href="mailto:info@localoptimize.de"
                className="text-brand-light text-sm hover:text-brand-cyan transition-colors"
              >
                info@localoptimize.de
              </a>
            </div>
            <div className="border-t border-brand-teal/30 pt-5">
              <p className="text-xs text-brand-cyan/40 leading-relaxed">
                Kostenlos · Unverbindlich · Persönlich
                <br />
                Antwort innerhalb von 24 Stunden
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-brand-light font-bold text-lg mb-2">Vielen Dank!</h3>
                <p className="text-brand-cyan/60 text-sm">
                  Ihr E-Mail-Programm öffnet sich gleich. Wir freuen uns auf Ihre Nachricht.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Ihr Name"
                    className="bg-brand-dark/60 border border-brand-cyan/20 rounded px-4 py-3 text-sm text-brand-light placeholder:text-brand-cyan/30 outline-none focus:border-brand-cyan/50 transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Ihre E-Mail"
                    className="bg-brand-dark/60 border border-brand-cyan/20 rounded px-4 py-3 text-sm text-brand-light placeholder:text-brand-cyan/30 outline-none focus:border-brand-cyan/50 transition-colors"
                  />
                </div>
                <input
                  type="url"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="Ihre Website (optional)"
                  className="bg-brand-dark/60 border border-brand-cyan/20 rounded px-4 py-3 text-sm text-brand-light placeholder:text-brand-cyan/30 outline-none focus:border-brand-cyan/50 transition-colors"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Wie können wir helfen?"
                  className="bg-brand-dark/60 border border-brand-cyan/20 rounded px-4 py-3 text-sm text-brand-light placeholder:text-brand-cyan/30 outline-none focus:border-brand-cyan/50 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="bg-brand-orange text-white text-sm font-bold px-6 py-3 rounded hover:bg-brand-orange/90 transition-colors self-start"
                >
                  Kostenlose Beratung anfragen →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
