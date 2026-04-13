// components/sections/__tests__/Process.test.tsx
import { render, screen } from '@testing-library/react'
import Process from '../Process'

describe('Process', () => {
  it('renders the section heading', () => {
    render(<Process />)
    expect(screen.getByText('So funktioniert es')).toBeInTheDocument()
    expect(screen.getByText('messbaren Erfolg')).toBeInTheDocument()
  })

  it('renders all three steps', () => {
    render(<Process />)
    expect(screen.getByText('Kostenlose Analyse')).toBeInTheDocument()
    expect(screen.getByText('Strategie & Plan')).toBeInTheDocument()
    expect(screen.getByText('Umsetzung & Wachstum')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<Process />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
