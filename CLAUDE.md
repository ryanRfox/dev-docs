# Radius Developer Documentation - Claude Code Guide

## Project Overview

This repository contains the developer documentation for **Radius**, a stablecoin-native EVM network designed for payment infrastructure.

**Key Characteristics:**
- **Sub-second finality** - Immediate transaction settlement
- **Linear scalability** - 2.5M TPS via sharding
- **Stablecoin-native fees** - Pay transactions in USDC/SBC instead of ETH
- **EVM compatible** - Deploy existing Solidity contracts unchanged
- **Osaka hardfork support** - Latest Ethereum features available

**Current Status:** Production-ready Vocs documentation site with 14 MDX pages deployed to GitHub Pages.

---

## Framework Stack

This project is built on three core frameworks:

### 1. **Vocs v1.4.0** - Documentation Site Generator
- **Purpose:** React/Vite-based static documentation generator
- **Key Features:**
  - File-based routing (content in `docs/pages/`)
  - Component framework (use `import { Callout } from 'vocs/components'`)
  - Built-in navbar, sidebar, footer customization
  - SEO-friendly with frontmatter support
  - Code groups (tabbed code examples via `:::code-group`)
- **Config File:** `vocs.config.ts` (comprehensive configuration)
- **Official Reference:** https://github.com/wevm/vocs

### 2. **Viem** - Ethereum Library
- **Purpose:** Type-safe Ethereum library for SDK and examples
- **Why Chosen:** Modern TypeScript-first design, tree-shakeable, smaller bundle
- **Usage:** Core of Radius SDK, wallet integration examples, RPC interaction
- **Key Exports Used:** `parseEther`, `formatEther`, `createPublicClient`, `createWalletClient`
- **Official Reference:** https://github.com/wevm/viem

### 3. **WAGMI** - React Hooks for Wallets
- **Purpose:** React hooks for wallet connections and contract interaction
- **Usage:** Referenced in examples (not currently a project dependency)
- **Key Hooks:** `useAccount`, `useWriteContract`, `useWaitForTransactionReceipt`
- **Official Reference:** https://github.com/wevm/wagmi

---

## Reference Documentation & Models

This project models its documentation structure and best practices after **Tempo**, an AI agents payment platform.

### Primary Reference
- **Tempo Docs:** https://docs.tempo.xyz/
- **Tempo GitHub:** https://github.com/tempoxyz/tempo/tree/main/docs/pages

### Additional References
- **x402 Protocol:** https://github.com/coinbase/x402 (AI agent payment patterns)

### Critical Rule: No Web Scraping
Always clone reference repositories locally to `/tmp/` rather than web scraping. This ensures accurate, version-specific information.

---

## Local Repository Cloning Convention

When exploring frameworks and references, clone to `/tmp/` for local scanning:

```bash
# Framework and documentation references
/tmp/vocs           # Vocs framework source (official examples)
/tmp/tempo          # Tempo documentation structure model
/tmp/viem           # Viem library source
/tmp/wagmi          # WAGMI hooks library
/tmp/x402           # x402 agent payment patterns
```

**Clone Commands:**
```bash
git clone https://github.com/wevm/vocs /tmp/vocs
git clone https://github.com/tempoxyz/tempo /tmp/tempo
git clone https://github.com/wevm/viem /tmp/viem
git clone https://github.com/wevm/wagmi /tmp/wagmi
git clone https://github.com/coinbase/x402 /tmp/x402
```

---

## Project Structure

```
radius-dev-docs/
├── docs/
│   ├── pages/                          # File-based routing (Vocs convention)
│   │   ├── index.mdx                   # Homepage
│   │   ├── differentiators/            # 3 pages: architecture, EVM compatibility, stablecoins
│   │   ├── use-cases/                  # 3 pages: API metering, pay-per-visit, streaming
│   │   ├── developer-resources/        # 3 pages: SDK, JSON-RPC, contract addresses
│   │   └── build-deploy/               # 4 pages: quick-start, accounts, wallets, smart contracts
│   ├── public/                         # Static assets
│   │   ├── logo-light.svg
│   │   └── logo-dark.svg
│   ├── footer.tsx                      # Custom footer component
│   └── dist/                           # Build output (docs/dist/)
├── .claude/                            # Claude working directory
│   ├── Vocs_Implementation_Plan.md     # Original restructuring plan
│   ├── vocs-best-practices-audit/      # Multi-model QA findings
│   └── vanilla-extract-css-error/      # CSS issue investigation
├── .github/workflows/deploy-pages.yml  # GitHub Actions deployment
├── vocs.config.ts                      # Primary configuration file
├── package.json                        # pnpm dependencies
├── pnpm-lock.yaml                      # Dependency lock file
├── README.md                           # Project documentation
├── CLAUDE.md                           # This file
└── .gitignore                          # Git excludes

Total Content: 14 production documentation pages
```

---

## Documentation Conventions

### Naming & Organization
- **File-based routing:** All pages must be in `docs/pages/` (Vocs convention)
- **Subdirectories:** Organize by topic (differentiators/, use-cases/, build-deploy/, etc.)
- **Frontmatter:** Always include title and description for SEO

### Code Examples
- **Language:** TypeScript by default
- **Package Manager:** Show pnpm commands (pnpm is project standard)
- **Copy-paste Ready:** All examples should be directly executable
- **Foundry Focus:** Show only Foundry tooling (Hardhat removed from all docs)

### Components & Syntax
- **Callouts:** `import { Callout } from 'vocs/components'` for highlights
- **Code Tabs:** Use `:::code-group` syntax for tabbed code examples
- **Links:**
  - Internal: Use relative paths (`/differentiators/architected-for-scale`)
  - External: Use full URLs (`https://docs.tempo.xyz/`)

### Example Frontmatter
```yaml
---
title: Page Title
description: Clear, concise description for SEO and social sharing
---
```

---

## Build & Development

### Essential Commands

```bash
# Development server (auto-reload at http://localhost:5173)
pnpm dev

# Production build (outputs to docs/dist/)
pnpm build

# Preview production build locally
pnpm preview
```

### Environment Requirements
- **Node.js:** >= 24.0.0 (CI requirement; v22+ works locally)
- **pnpm:** >= 9.0.0
- **Playwright:** Required as devDependency (CI builds use @mdx-js/rollup which invokes Playwright)

### Build Time
- Development: ~2-3 seconds (with HMR)
- Production: ~1 minute (includes prerendering)

---

## Known Issues & Workarounds

### Vanilla-Extract CSS Cache Warning

**Symptom:** Dev server logs CSS cache warnings (pages still render correctly)
```
Internal server error: No CSS for file: .../vocs/_lib/app/components/HomePage.css.js
```

**Root Cause:** Race condition in vanilla-extract's CSS compilation in dev mode (cosmetic issue, non-blocking)

**Status:** Upstream fix available in Vocs main branch but not released
- Fixed in: Vocs commit 06042d9 ("fix: css hmr")
- Release: Expected in Vocs v1.4.1+ (as of Jan 2026)

**Current Workaround:**
```typescript
// vocs.config.ts
vite: {
  logLevel: 'warn',  // Suppress CSS cache errors
}
```

**Action Item:** Remove this workaround when Vocs v1.4.1+ is released. Monitor: https://github.com/wevm/vocs/releases

---

## Critical Configuration & Notes

### No Claude Adverts in Commits
Global instruction enforced: NEVER include Claude attribution in git commits
- See: `~/.claude/CLAUDE.md`
- Applies to all instances and subagents
- Commit messages must contain ONLY factual descriptions

### Playwright Dependency
Playwright (`^1.57.0`) must be in devDependencies despite not being directly used
- **Why:** @mdx-js/rollup (Vocs dependency) requires Playwright browsers in CI
- **CI Step:** `pnpm exec playwright install` runs before `pnpm build`
- **Do NOT remove** even though local builds work without it

### Logo Configuration
- **Correct:** `logoUrl: { light: '...', dark: '...' }` (Vocs official API)
- **Wrong:** `logo: { ... }` (silently ignored, logos won't render)
- This is a Vocs v1.4.0 API requirement

### basePath for GitHub Pages
```typescript
// vocs.config.ts
basePath: '/dev-docs',  // Required for sub-path deployment
```

### AI Chat Disabled
```typescript
// vocs.config.ts
aiCta: false,  // Disables "Ask in ChatGPT" button
```

---

## GitHub Pages Deployment

### Current Setup
- **Live URL:** https://ryanrfox.github.io/dev-docs/
- **Deployment Method:** GitHub Actions automatic
- **Workflow File:** `.github/workflows/deploy-pages.yml`

### Deployment Process
1. **Trigger:** Push to main branch
2. **Build:** Node v24, pnpm v9, Playwright browsers installed
3. **Output:** `docs/dist/` uploaded as artifact
4. **Deploy:** GitHub Pages automatically deploys artifact
5. **Time:** ~1-2 minutes total

### Environment Configuration
- **Chain ID:** 1223953 (Radius Testnet)
- **RPC URL:** https://rpc.testnet.radiustech.xyz
- **Fee Token:** SBC (0xF966020a30946A64B39E2e243049036367590858)

---

## Development Philosophy & QA Standards

This project maintains rigorous quality standards and follows framework best practices strictly.

### Framework Best Practices First
- Vocs official documentation is the source of truth
- Always scan local clones of framework repos rather than web scraping
- **Configuration-first approach:** Never use CSS hacks or workarounds (fix the config instead)
- Strict adherence to file-based routing conventions

### Multi-Model QA Escalation Pattern
For critical issues, use escalating Claude tiers:
1. **Haiku:** Broad coverage and quick analysis
2. **Sonnet:** Deeper investigation and validation
3. **Opus:** Critical production issues requiring highest accuracy

All findings documented in `.claude/` directory with:
- Task context
- Escalation logs
- QA reports from each tier
- Applied fixes and verification

**Example:** Vocs best practices audit discovered critical logo rendering bug that required 3-tier escalation to identify (Haiku and Sonnet both missed it).

### Documentation-Driven Development
- All major changes planned before execution
- Implementation plans written in `.claude/` directory
- Task context, escalation logs, and QA reports preserved for future reference
- Known issues documented with root cause analysis and workarounds

### Local Repository Scanning Policy
- **NEVER web scrape** framework or reference documentation
- Clone to `/tmp/` for accurate, version-specific information
- Scan local code to understand implementation details
- Cross-reference with official documentation

---

## Content Organization

### 14 Total Pages (3 sections)

**Introduction (1 page)**
- `index.mdx` - Homepage with network overview

**Differentiators (3 pages)**
- `differentiators/architected-for-scale.mdx` - Sharding and linear scalability
- `differentiators/designed-for-internet-of-tomorrow.mdx` - EVM compatibility and differences from Ethereum
- `differentiators/stablecoin-native-fees.mdx` - Turnstile mechanism (coming soon)

**Use Cases (3 pages)**
- `use-cases/real-time-api-metering.mdx` - Per-request billing patterns
- `use-cases/pay-per-visit-content.mdx` - Micropayment models
- `use-cases/streaming-payments.mdx` - Continuous payment flows

**Developer Resources (3 pages)**
- `developer-resources/sdks-typescript.mdx` - Radius SDK reference
- `developer-resources/json-rpc-api.mdx` - RPC API methods
- `developer-resources/contract-addresses.mdx` - Testnet contract addresses

**Build & Deploy (4 pages)**
- `build-deploy/quick-start-first-payment.mdx` - Zero-to-first-transaction guide
- `build-deploy/account-setup.mdx` - Key generation and wallet setup
- `build-deploy/wallet-integration.mdx` - MetaMask, ethers.js, viem integration
- `build-deploy/smart-contract-deploy.mdx` - Foundry deployment guide

---

## Recent Project Evolution

Understanding the project's development history provides context for current patterns and decisions:

### Phase 1: Vocs Best Practices Adoption (Jan 3, early)
- Created comprehensive 7-phase restructuring plan
- Moved content from `docs/` to `docs/pages/` (Vocs convention)
- Created `docs/public/` for static assets
- Added proper logos and favicon
- Implemented custom footer component
- Updated vocs.config.ts with best-practice settings

### Phase 2: Comprehensive QA Audit (Jan 3, midday)
- Multi-model escalation (Haiku → Sonnet → Opus)
- Haiku found 6 issues (91% compliance)
- Sonnet corrected false positives, refined severity
- **Opus discovered CRITICAL logo rendering bug** (both previous tiers missed)
  - Root cause: Config used `logo` instead of `logoUrl`
  - Logos weren't rendering despite site building successfully
  - Demonstrates value of escalation pattern for critical issues

### Phase 3: CSS Error Investigation (Jan 3, afternoon)
- Dev server showed vanilla-extract CSS cache warnings
- Investigated root cause (race condition in CSS compilation)
- Found upstream fix exists but not yet released
- Implemented workaround: `vite.logLevel: 'warn'`
- Documented issue with upgrade path

### Phase 4: Hardhat Removal (Jan 3, evening)
- Removed all Hardhat tooling references
- Focused entirely on Foundry as primary tool
- Updated all examples to show only Foundry
- Simplified documentation for clarity

### Phase 5: GitHub Pages Deployment (Jan 5)
- Set up automated deployment via GitHub Actions
- Configured Node v24 (required by Vocs v1.4.0)
- Added Playwright to devDependencies for CI
- Deployed to https://ryanrfox.github.io/dev-docs/

---

## For Further Information

- **Project README:** See `README.md` for detailed structure and contribution guidelines
- **Implementation History:** See `.claude/Vocs_Implementation_Plan.md` for original restructuring plan
- **QA Documentation:** See `.claude/vocs-best-practices-audit/` for audit findings and fixes
- **Global Claude Instructions:** See `~/.claude/CLAUDE.md` for Claude Code working guidelines
