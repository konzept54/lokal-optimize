import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Local Optimize – Mehr Umsatz durch messbaren Google Traffic'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0B1F26 0%, #060E12 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 60px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top label */}
        <p
          style={{
            color: '#76CDD4',
            fontSize: 16,
            letterSpacing: 5,
            textTransform: 'uppercase',
            margin: '0 0 28px 0',
            fontWeight: 700,
          }}
        >
          Ihr Google-Spezialist
        </p>

        {/* Headline */}
        <h1
          style={{
            color: 'white',
            fontSize: 58,
            fontWeight: 900,
            textAlign: 'center',
            lineHeight: 1.1,
            margin: '0 0 32px 0',
            maxWidth: 900,
          }}
        >
          Mehr Umsatz durch{' '}
          <span style={{ color: '#F28D21' }}>messbaren</span>{' '}
          Google Traffic
        </h1>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 3,
            background: '#F28D21',
            borderRadius: 2,
            margin: '0 0 32px 0',
          }}
        />

        {/* Domain */}
        <p
          style={{
            color: 'rgba(118,205,212,0.7)',
            fontSize: 22,
            margin: '0 0 40px 0',
            fontWeight: 500,
          }}
        >
          localoptimize.de
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['SEO', 'Google Ads', 'Analytics', 'Social Media'].map((tag) => (
            <div
              key={tag}
              style={{
                border: '1px solid rgba(118,205,212,0.35)',
                borderRadius: 24,
                padding: '8px 20px',
                color: 'rgba(118,205,212,0.6)',
                fontSize: 15,
                background: 'rgba(20,73,90,0.2)',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
