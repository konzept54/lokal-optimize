// components/sections/__tests__/Hero.test.tsx
import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders the eyebrow text', () => {
    render(<Hero />)
    expect(
      screen.getByText('Ihr Google-Spezialist für digitales Wachstum')
    ).toBeInTheDocument()
  })

  it('renders the headline keywords', () => {
    render(<Hero />)
    expect(screen.getByText('messbaren')).toBeInTheDocument()
    expect(screen.getByText(/Google Traffic/)).toBeInTheDocument()
  })

  it('renders the primary CTA', () => {
    render(<Hero />)
    expect(
      screen.getByText('Kostenlose Website-Analyse starten →')
    ).toBeInTheDocument()
  })

  it('renders the secondary CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Leistungen ansehen')).toBeInTheDocument()
  })

  it('renders all service tags', () => {
    render(<Hero />)
    expect(screen.getByText('SEO')).toBeInTheDocument()
    expect(screen.getByText('Google Ads')).toBeInTheDocument()
    expect(screen.getByText('Social Media')).toBeInTheDocument()
  })
})
