// components/sections/__tests__/Services.test.tsx
import { render, screen } from '@testing-library/react'
import Services from '../Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Unsere Leistungen')).toBeInTheDocument()
    expect(screen.getByText('einer Hand')).toBeInTheDocument()
  })

  it('renders all 6 service names', () => {
    render(<Services />)
    expect(screen.getByText('Suchmaschinen-Optimierung')).toBeInTheDocument()
    expect(screen.getByText('Google Ads & SEM')).toBeInTheDocument()
    expect(screen.getByText('Display & Remarketing')).toBeInTheDocument()
    expect(screen.getByText('Webanalyse & Analytics')).toBeInTheDocument()
    expect(screen.getByText('Social Media Marketing')).toBeInTheDocument()
    expect(screen.getByText('Inbound Marketing')).toBeInTheDocument()
  })
})
