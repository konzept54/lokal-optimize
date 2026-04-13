import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navigation from '../Navigation'

describe('Navigation', () => {
  it('renders the logo image', () => {
    render(<Navigation />)
    expect(screen.getByAltText('Local Optimize')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Navigation />)
    expect(screen.getByText('Leistungen')).toBeInTheDocument()
    expect(screen.getByText('Über uns')).toBeInTheDocument()
    expect(screen.getByText('Referenzen')).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<Navigation />)
    expect(screen.getByText('+49 7844 918 32 72')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Navigation />)
    expect(screen.getByText('Kostenlose Analyse')).toBeInTheDocument()
  })

  it('shows mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navigation />)
    const hamburger = screen.getByLabelText('Menü öffnen')
    await user.click(hamburger)
    // Mobile menu duplicates the links — now there are 2 × 'Leistungen'
    expect(screen.getAllByText('Leistungen').length).toBeGreaterThan(1)
  })
})
