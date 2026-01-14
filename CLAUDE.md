# Radius Developer Documentation - Claude Code Guide

## Quick Start for Claude

**Before writing or editing any documentation, read the style guide:**
```
docs/RADIUS-STYLE-GUIDE.md
```

**Key rules to remember:**
- Native token is **USD** (not SBC, not $)
- Currency format: `0.0001 USD` or `100 USDC` (no $ symbol)
- Sentence case headings: "Send a transaction" not "Send a Transaction"
- Active voice, present tense: "returns" not "will return"
- Foundry only (no Hardhat), viem only (no ethers.js), pnpm only
- Max 3 callouts per page

**Essential commands:**
```bash
pnpm dev      # Development server at http://localhost:5173
pnpm build    # Production build to docs/dist/
pnpm preview  # Preview production build
```

---

## Project Overview

Developer documentation for **Radius**, a stablecoin-native EVM network for payment infrastructure.

| Feature | Value |
|---------|-------|
| Finality | Sub-second |
| Throughput | 2.5M TPS via sharding |
| Fee Token | USD (stablecoin-native) |
| Compatibility | EVM compatible (Osaka hardfork) |
| Live URL | https://ryanrfox.github.io/dev-docs/ |

**Current State:** 14 MDX pages deployed via GitHub Pages. Style guide compliance at 93%+ average.

---

## Critical Gotchas

These issues have caused problems before. Don't repeat them.

### Playwright Dependency
Playwright must stay in devDependencies even though it's not directly used.
- **Why:** @mdx-js/rollup requires Playwright browsers in CI
- **Do NOT remove** — CI builds will fail

### Logo Configuration
```typescript
// CORRECT - logos render
logoUrl: { light: '/logo-light.svg', dark: '/logo-dark.svg' }

// WRONG - silently ignored, no logos
logo: { light: '/logo-light.svg', dark: '/logo-dark.svg' }
```

### basePath for GitHub Pages
```typescript
// vocs.config.ts - required for sub-path deployment
basePath: '/dev-docs',
```

### Vocs Subtitle Pattern
Use bracket syntax to avoid unwanted H2 borders:
```mdx
# Page Title [Subtitle text here]

## First Section
```
This keeps subtitle inside `<header>`, preventing double borders.

---

## Project Structure

```
radius-dev-docs/
├── docs/
│   ├── pages/                    # All MDX content (14 pages)
│   │   ├── index.mdx
│   │   ├── differentiators/      # 3 pages
│   │   ├── use-cases/            # 3 pages
│   │   ├── developer-resources/  # 3 pages
│   │   └── build-deploy/         # 4 pages
│   ├── public/                   # Static assets (logos)
│   ├── RADIUS-STYLE-GUIDE.md     # Authoritative style reference
│   └── footer.tsx                # Custom footer component
├── .claude/                      # Claude working directory
│   └── *.md                      # Task handoffs, plans, investigations
├── vocs.config.ts                # Site configuration
├── CLAUDE.md                     # This file
└── package.json                  # pnpm dependencies
```

---

## Tech Stack

| Tool | Purpose | Reference |
|------|---------|-----------|
| **Vocs v1.4.0** | Documentation generator | https://github.com/wevm/vocs |
| **viem** | Ethereum library (all examples) | https://github.com/wevm/viem |
| **wagmi** | React wallet hooks | https://github.com/wevm/wagmi |
| **Foundry** | Smart contract tooling | https://book.getfoundry.sh |
| **pnpm** | Package manager | — |

**Do NOT use:** Hardhat, ethers.js, npm, yarn

---

## Network Configuration

```
Chain ID:    1223953
RPC URL:     https://rpc.testnet.radiustech.xyz
Native Token: USD
Fee Contract: 0xF966020a30946A64B39E2e243049036367590858
Faucet:      https://testnet.radiustech.xyz/testnet/faucet
```

---

## Environment Requirements

- **Node.js:** >= 24.0.0 (CI requires v24; v22+ works locally)
- **pnpm:** >= 9.0.0
- **Playwright:** In devDependencies (CI requirement)

---

## Deployment

Automatic via GitHub Actions on push to `main`.

1. Push to main
2. CI runs: Node v24, pnpm install, Playwright install, pnpm build
3. `docs/dist/` uploaded as artifact
4. GitHub Pages deploys (~2 min total)

---

## Working Conventions

### For Framework Research
Clone to `/tmp/` rather than web scraping:
```bash
git clone https://github.com/wevm/vocs /tmp/vocs
git clone https://github.com/tempoxyz/tempo /tmp/tempo
```

### For Multi-Step Tasks
Use `.claude/` directory for:
- Implementation plans
- Task handoffs between sessions
- Investigation notes
- QA audit reports

### For QA
Use multi-model escalation for critical issues:
1. **Haiku** — Broad coverage, quick analysis
2. **Sonnet** — Deeper investigation
3. **Opus** — Critical production issues

---

## Content Pages (14 total)

| Section | Pages |
|---------|-------|
| Homepage | `index.mdx` |
| Differentiators | `architected-for-scale.mdx`, `designed-for-internet-of-tomorrow.mdx`, `stablecoin-native-fees.mdx` |
| Use Cases | `real-time-api-metering.mdx`, `pay-per-visit-content.mdx`, `streaming-payments.mdx` |
| Developer Resources | `sdks-typescript.mdx`, `json-rpc-api.mdx`, `contract-addresses.mdx` |
| Build & Deploy | `quick-start-first-payment.mdx`, `account-setup.mdx`, `wallet-integration.mdx`, `smart-contract-deploy.mdx` |

---

## References

- **Style Guide:** `docs/RADIUS-STYLE-GUIDE.md` (authoritative)
- **Vocs Docs:** https://vocs.dev
- **Tempo (model):** https://docs.tempo.xyz/
- **Global Claude Rules:** `~/.claude/CLAUDE.md`
