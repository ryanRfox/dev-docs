import React from 'react'

export type FeatureCard = {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

const cards: FeatureCard[] = [
  {
    icon: '⚙️',
    title: 'Architected for Scale',
    description:
      'Understand linear scalability, sub-second finality, and how Radius handles 2.5M TPS through sharding.',
    href: '/dev-docs/differentiators/architected-for-scale',
  },
  {
    icon: '🚀',
    title: 'Start Building',
    description:
      'Get up and running with your first transaction in minutes. Deploy smart contracts with Foundry and standard Ethereum tooling.',
    href: '/dev-docs/build-deploy/quick-start-first-payment',
  },
  {
    icon: '💡',
    title: 'Real-World Use Cases',
    description:
      'Explore payment patterns: API metering, pay-per-visit content, and streaming payments built on Radius.',
    href: '/dev-docs/use-cases/real-time-api-metering',
  },
  {
    icon: '🔧',
    title: 'Developer Tools',
    description:
      'Access TypeScript SDK, JSON-RPC API reference, contract addresses, and wallet integration guides.',
    href: '/dev-docs/developer-resources/sdks-typescript',
  },
]

export function FeatureCards() {
  return (
    <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              borderLeft: '3px solid #EB6359',
              backgroundColor: 'var(--vocs-color_background2)',
              border: '1px solid var(--vocs-color_border)',
              borderLeftColor: '#EB6359',
              borderLeftWidth: '3px',
              transition: 'all 0.2s ease-in-out',
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLAnchorElement
              target.style.backgroundColor = 'var(--vocs-color_background3)'
              target.style.transform = 'translateY(-2px)'
              target.style.boxShadow = '0 4px 12px rgba(235, 99, 89, 0.1)'
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLAnchorElement
              target.style.backgroundColor = 'var(--vocs-color_background2)'
              target.style.transform = 'translateY(0)'
              target.style.boxShadow = 'none'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--vocs-color_title)', lineHeight: 1.4, margin: 0 }}>
                {card.title}
              </h3>
              <div style={{ fontSize: '1.75rem', marginLeft: '1rem', flexShrink: 0 }}>
                {card.icon}
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--vocs-color_text2)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
              {card.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
