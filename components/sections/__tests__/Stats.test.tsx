// components/sections/__tests__/Stats.test.tsx
import { render, screen } from '@testing-library/react'
import Stats from '../Stats'

describe('Stats', () => {
  it('renders all four stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Zufriedene Kunden')).toBeInTheDocument()
    expect(screen.getByText('Ø Traffic-Zuwachs')).toBeInTheDocument()
    expect(screen.getByText('Jahre Erfahrung')).toBeInTheDocument()
    expect(screen.getByText('Weiterempfehlungsrate')).toBeInTheDocument()
  })

  it('renders the stat suffixes', () => {
    render(<Stats />)
    const plusSigns = screen.getAllByText('+')
    expect(plusSigns.length).toBe(2)
    expect(screen.getByText('×')).toBeInTheDocument()
    expect(screen.getByText('%')).toBeInTheDocument()
  })
})
