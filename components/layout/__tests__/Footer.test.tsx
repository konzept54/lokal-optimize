// components/layout/__tests__/Footer.test.tsx
import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByAltText('Local Optimize')).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)
    expect(screen.getByText('Impressum')).toBeInTheDocument()
    expect(screen.getByText('Datenschutz')).toBeInTheDocument()
    expect(screen.getByText('Kontakt')).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2025 Local Optimize/)).toBeInTheDocument()
  })
})
