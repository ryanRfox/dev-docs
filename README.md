# Radius Developer Documentation

Public-facing developer documentation for the Radius Network, built with [Vocs](https://vocs.dev).

## Quick Start

### Prerequisites
- Node.js 20+
- pnpm 9+

### Local Development

Install dependencies:
```bash
pnpm install
```

Start the development server:
```bash
pnpm run dev
```

The documentation will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

## Documentation Structure

```
docs/
├── differentiators/       # Why Radius is different
├── use-cases/            # Practical payment patterns
├── developer-resources/  # API docs, SDKs, contract addresses
└── build-deploy/         # Getting started guides
```

## Content

- **13 complete pages** covering architecture, SDKs, use cases, and getting started
- **MDX format** with React component support
- **Vocs framework** for fast, zero-config documentation sites

## Contributing

Documentation is versioned with the main Radius codebase. Changes should be submitted via pull request.

## Migration

This repository will be migrated from `ryanrfox/dev-docs` to `radiustechsystems/dev-docs` when ready for public release.

## License

MIT
