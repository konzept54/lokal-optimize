// vitest.setup.ts
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

// Framer Motion — animate instantly in tests, no real animations
vi.mock('framer-motion', () => ({
  motion: new Proxy({}, {
    get: (_target, tag) => {
      if (typeof tag !== 'string') return undefined
      return ({ children, ...props }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) =>
        React.createElement(tag, props, children)
    },
  }),
  useInView: () => true,
  animate: vi.fn((_from: number, _to: number, options?: { onUpdate?: (v: number) => void }) => {
    options?.onUpdate?.(_to)
    return { stop: vi.fn() }
  }),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}))

vi.mock('next/script', () => ({
  default: () => null,
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

vi.mock('next/image', () => ({
  default: ({ alt, src }: { alt: string; src: string }) =>
    React.createElement('img', { alt, src }),
}))

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode; [key: string]: unknown }) =>
    React.createElement('a', { href, ...rest }, children),
}))
