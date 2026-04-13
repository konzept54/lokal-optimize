// components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'

const legalLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-teal/20 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/">
          <Image src="/logo.svg" alt="Local Optimize" width={120} height={34} />
        </Link>
        <nav className="flex gap-5">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-brand-cyan/30 hover:text-brand-cyan/60 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="text-xs text-brand-cyan/20">© 2025 Local Optimize</span>
      </div>
    </footer>
  )
}
