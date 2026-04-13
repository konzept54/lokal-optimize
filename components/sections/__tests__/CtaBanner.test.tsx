// components/sections/__tests__/CtaBanner.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { useRouter } from 'next/navigation'
import CtaBanner from '../CtaBanner'

const mockPush = vi.fn()
vi.mocked(useRouter).mockReturnValue({ push: mockPush } as ReturnType<typeof useRouter>)

describe('CtaBanner', () => {
  beforeEach(() => mockPush.mockClear())

  it('renders headline and subtext', () => {
    render(<CtaBanner />)
    expect(
      screen.getByText('Starten Sie mit einer kostenlosen Analyse')
    ).toBeInTheDocument()
    expect(screen.getByText(/48 Stunden/)).toBeInTheDocument()
  })

  it('renders the trust line', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Kostenlos · Unverbindlich/)).toBeInTheDocument()
  })

  it('navigates to /kontakt without url param when input is empty', async () => {
    const user = userEvent.setup()
    render(<CtaBanner />)
    await user.click(screen.getByRole('button', { name: /jetzt analysieren/i }))
    expect(mockPush).toHaveBeenCalledWith('/kontakt')
  })

  it('navigates to /kontakt?url=... when url is entered', async () => {
    const user = userEvent.setup()
    render(<CtaBanner />)
    await user.type(
      screen.getByPlaceholderText('Ihre Website-URL eingeben...'),
      'https://example.com'
    )
    await user.click(screen.getByRole('button', { name: /jetzt analysieren/i }))
    expect(mockPush).toHaveBeenCalledWith(
      '/kontakt?url=https%3A%2F%2Fexample.com'
    )
  })
})
