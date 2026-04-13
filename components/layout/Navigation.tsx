'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Blog', href: '#' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-surface/80 backdrop-blur-md border-b border-brand-teal/20'
          : 'bg-brand-surface border-b border-brand-teal/30'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.svg" alt="Local Optimize" width={140} height={40} priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-brand-cyan/70 hover:text-brand-cyan transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+4978449183272"
            className="text-sm text-brand-cyan/70 hover:text-brand-cyan transition-colors"
          >
            +49 7844 918 32 72
          </a>
          <Link
            href="/kontakt"
            className="bg-brand-orange text-white text-sm font-bold px-4 py-2 rounded hover:bg-brand-orange/90 transition-colors"
          >
            Kostenlose Analyse
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brand-cyan p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div id="mobile-drawer" className="md:hidden bg-brand-surface border-t border-brand-teal/30 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-cyan/70 hover:text-brand-cyan transition-colors text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+4978449183272" className="text-brand-cyan/70 text-sm">
            +49 7844 918 32 72
          </a>
          <Link
            href="/kontakt"
            className="bg-brand-orange text-white text-sm font-bold px-4 py-2 rounded text-center"
            onClick={() => setMobileOpen(false)}
          >
            Kostenlose Analyse
          </Link>
        </div>
      )}
    </header>
  )
}
