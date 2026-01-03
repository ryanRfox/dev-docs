import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Radius Documentation',
  description: 'Developer documentation for the Radius Network - Stablecoin-native EVM with sub-second finality.',
  logoUrl: {
    light: '/logo-light.svg',
    dark: '/logo-dark.svg',
  },
  topNav: [
    { text: 'Documentation', link: '/differentiators/architected-for-scale' },
    { text: 'Use Cases', link: '/use-cases/real-time-api-metering' },
    { text: 'Developer Resources', link: '/developer-resources/sdks-typescript' },
    { text: 'Build & Deploy', link: '/build-deploy/quick-start-first-payment' },
  ],
  ogImageUrl: {
    '/': '/og-image.png',
    '/**': 'https://docs.radiustech.xyz/api/og?title=%title&description=%description',
  },
  editLink: {
    pattern: 'https://github.com/radiustechsystems/dev-docs/edit/main/docs/pages/:path',
    text: 'Edit this page on GitHub',
  },
  sidebar: [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Welcome', link: '/' },
      ],
    },
    {
      text: 'Differentiators',
      collapsed: false,
      items: [
        { text: 'Architected for Scale', link: '/differentiators/architected-for-scale' },
        { text: 'Designed for Internet of Tomorrow', link: '/differentiators/designed-for-internet-of-tomorrow' },
        { text: 'Stablecoin-Native Fees', link: '/differentiators/stablecoin-native-fees' },
      ],
    },
    {
      text: 'Use Cases',
      collapsed: false,
      items: [
        { text: 'Real-time API Metering', link: '/use-cases/real-time-api-metering' },
        { text: 'Pay-per-Visit Content', link: '/use-cases/pay-per-visit-content' },
        { text: 'Streaming Payments', link: '/use-cases/streaming-payments' },
      ],
    },
    {
      text: 'Developer Resources',
      collapsed: false,
      items: [
        { text: 'SDKs (TypeScript)', link: '/developer-resources/sdks-typescript' },
        { text: 'JSON-RPC API', link: '/developer-resources/json-rpc-api' },
        { text: 'Contract Addresses', link: '/developer-resources/contract-addresses' },
      ],
    },
    {
      text: 'Build & Deploy',
      collapsed: false,
      items: [
        { text: 'Quick Start: First Payment', link: '/build-deploy/quick-start-first-payment' },
        { text: 'Account Setup', link: '/build-deploy/account-setup' },
        { text: 'Wallet Integration', link: '/build-deploy/wallet-integration' },
        { text: 'Smart Contract Deployment', link: '/build-deploy/smart-contract-deploy' },
      ],
    },
  ],
  theme: {
    accentColor: '#0066cc',
  },
  aiCta: false,
  // Suppress vanilla-extract CSS cache errors in dev mode (fixed in Vocs v1.4.1+)
  // TODO: Remove after upgrading to Vocs v1.4.1+
  vite: {
    logLevel: 'warn',
  },
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/radiustechsystems',
    },
    {
      icon: 'discord',
      link: 'https://discord.gg/radiustech',
    },
  ],
})
