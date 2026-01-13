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

#### Clean Rebuild & Dev Server

To completely remove previous build artifacts and start fresh (useful for debugging build issues):

```bash
pnpm run clean-dev
```

This script:
- Removes previous build output (`docs/dist/`)
- Clears Vite cache
- Performs a complete rebuild
- Launches the dev server

**Note:** This is slower than `pnpm run dev` but ensures a completely fresh build state.

### Build for Production

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

## Project Structure

This documentation site uses [Vocs](https://vocs.dev), a React-based static site generator with file-based routing.

### Directory Layout

```
radius-dev-docs/
├── docs/                      # Documentation root
│   ├── pages/                # All documentation pages (file-based routing)
│   │   ├── index.mdx        # Homepage (/)
│   │   ├── build-deploy/    # Getting started guides
│   │   ├── developer-resources/  # API docs, SDKs, contract addresses
│   │   ├── differentiators/ # Why Radius is different
│   │   └── use-cases/       # Practical payment patterns
│   ├── public/              # Static assets (logos, images, favicon)
│   ├── footer.tsx           # Custom footer component
│   └── components/          # Custom React components (optional)
├── vocs.config.ts           # Vocs configuration
└── package.json
```

### File-Based Routing

Vocs uses file-based routing from the `docs/pages/` directory:
- `docs/pages/index.mdx` → `/`
- `docs/pages/build-deploy/quick-start-first-payment.mdx` → `/build-deploy/quick-start-first-payment`
- `docs/pages/developer-resources/sdks-typescript.mdx` → `/developer-resources/sdks-typescript`

## Content

- **13 complete pages** covering architecture, SDKs, use cases, and getting started
- **MDX format** with React component support
- **Vocs framework** for fast, zero-config documentation sites

## Adding New Pages

To add new documentation:

1. Create a new `.mdx` file in `docs/pages/` or a subdirectory
2. Add frontmatter metadata (optional):
   ```markdown
   ---
   title: My Page Title
   description: Brief description for SEO
   ---
   ```
3. Write your content in Markdown or MDX format
4. Update `vocs.config.ts` sidebar if you want the page in navigation
5. Run `pnpm dev` to preview locally

## Known Issues

### Vanilla Extract CSS Warning (Vocs v1.4.0)

The dev server may occasionally show `No CSS for file: HomePage.css.js` errors. This is a known issue in Vocs v1.4.0 caused by a CSS cache race condition in vanilla-extract's dev mode.

**Status:** Fixed upstream (commit `06042d9`, Jan 1, 2026) - will be in Vocs v1.4.1+

**Impact:** None - pages render correctly, build succeeds

**Workaround:** Error suppressed via `vite.logLevel: 'warn'` in vocs.config.ts

**Action Required:** When Vocs v1.4.1+ is released:
```bash
pnpm update vocs --latest
```
Then remove the `vite` workaround from `vocs.config.ts`.

**Monitor:** https://github.com/wevm/vocs/releases

## Contributing

Documentation is versioned with the main Radius codebase. Changes should be submitted via pull request to [radiustechsystems/dev-docs](https://github.com/radiustechsystems/dev-docs).

## Migration

This repository will be migrated from `ryanrfox/dev-docs` to `radiustechsystems/dev-docs` when ready for public release.

## License

MIT
