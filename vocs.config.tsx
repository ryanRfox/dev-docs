import { defineConfig } from 'vocs'

export default defineConfig({
  basePath: '/dev-docs',
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
  sidebar: [
    { text: 'Home', link: '/' },
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
  // Font configuration - using Google Fonts
  font: {
    google: 'Instrument Sans',
  },
  // Custom head for Mona Sans (H1 font) and custom styles
  // Note: Mona Sans is a GitHub font, using CDN version
  head() {
    return (
      <>
        <link
          href="https://cdn.jsdelivr.net/npm/@aspect-ux/mona-sans@1.0.1/dist/mona-sans.min.css"
          rel="stylesheet"
        />
        <style>{`
          /* Mona Sans for H1 headings - matches design system typography */
          h1, .vocs_H1 {
            font-family: 'Mona Sans', system-ui, sans-serif !important;
            font-weight: 700 !important;
            letter-spacing: 0 !important;
          }
          /* Hide "Last updated" timestamp from page footers */
          .vocs_Footer_lastUpdated {
            display: none !important;
          }
        `}</style>
      </>
    )
  },
  theme: {
    // NOTE: colorScheme is intentionally NOT set to allow theme toggle
    // Setting colorScheme: 'system' hides the toggle in Vocs
    accentColor: {
      light: '#EB6359', // Prosperous Red
      dark: '#EB6359',
    },
    variables: {
      fontFamily: {
        default: '"Instrument Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      color: {
        // Background colors - Executive Deep (#1F1F25) for dark mode
        background: {
          light: '#FFFFFF',
          dark: '#1F1F25',
        },
        background2: {
          light: '#F5F5F5',
          dark: '#2D2C31',
        },
        background3: {
          light: '#EEEEEE',
          dark: '#3A3942',
        },
        background4: {
          light: '#E0E0E0',
          dark: '#4A4954',
        },
        background5: {
          light: '#D0D0D0',
          dark: '#5A5964',
        },
        // Heading and text colors - Foundation Stone (#E2DDD9) for dark mode text
        heading: {
          light: '#1F1F25',
          dark: '#F5F3F0',
        },
        title: {
          light: '#1F1F25',
          dark: '#FFFFFF',
        },
        text: {
          light: '#1F1F25',
          dark: '#E2DDD9', // Foundation Stone
        },
        text2: {
          light: '#4C4C4C',
          dark: '#C9C5C0',
        },
        text3: {
          light: '#757575',
          dark: '#A8A39E',
        },
        text4: {
          light: '#9E9E9E',
          dark: '#8A8581',
        },
        // Accent colors - Prosperous Red (#EB6359)
        textAccent: {
          light: '#EB6359',
          dark: '#FF8F88',
        },
        textAccentHover: {
          light: '#D94A42',
          dark: '#FFB0A8',
        },
        backgroundAccent: {
          light: '#EB6359',
          dark: '#EB6359',
        },
        backgroundAccentHover: {
          light: '#D94A42',
          dark: '#D94A42',
        },
        backgroundAccentText: {
          light: '#FFFFFF',
          dark: '#FFFFFF',
        },
        borderAccent: {
          light: '#D94A42',
          dark: '#FF8F88',
        },
        // Borders
        border: {
          light: '#E0E0E0',
          dark: '#3A3942',
        },
        border2: {
          light: '#D0D0D0',
          dark: '#4A4954',
        },
        // Semantic colors from design system
        // Success: #10B981
        textGreen: {
          light: '#10B981',
          dark: '#4ECCC3',
        },
        backgroundGreenTint: {
          light: '#E6F7F5',
          dark: '#0F443E',
        },
        borderGreen: {
          light: '#A7E8E1',
          dark: '#4ECCC3',
        },
        // Warning: #F59E0B
        textYellow: {
          light: '#F59E0B',
          dark: '#FBBF24',
        },
        backgroundYellowTint: {
          light: '#FFFBEB',
          dark: '#44330E',
        },
        borderYellow: {
          light: '#FDDE7B',
          dark: '#FBBF24',
        },
        // Error: #EF4444
        textRed: {
          light: '#EF4444',
          dark: '#FCA5A5',
        },
        backgroundRedTint: {
          light: '#FEE2E2',
          dark: '#442020',
        },
        borderRed: {
          light: '#F87171',
          dark: '#FCA5A5',
        },
        // Info: #3B82F6
        textBlue: {
          light: '#3B82F6',
          dark: '#93C5FD',
        },
        backgroundBlueTint: {
          light: '#EFF6FF',
          dark: '#0C1E3E',
        },
        borderBlue: {
          light: '#93C5FD',
          dark: '#93C5FD',
        },
      },
      // Font weights optimized for Instrument Sans
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
      },
      // Line heights optimized for readability
      lineHeight: {
        heading: '1.4em',
        paragraph: '1.8em',
        listItem: '1.6em',
        sidebarItem: '1.4em',
        code: '1.75em',
        outlineItem: '1em',
      },
    },
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
    {
      icon: 'x',
      link: 'https://x.com/radiustech_xyz',
    },
  ],
})
