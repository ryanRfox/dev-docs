# Radius Documentation Style Guide

> This guide is the **one true reference** for Radius Network documentation decisions.
> Great documentation is well-organized, consistent, and appropriately technical for developers.

---

## Quick Reference

Use this section for fast lookups:

| Question | Answer |
|----------|--------|
| Active or passive voice? | **Active**: "The RPC returns a receipt" not "A receipt is returned" |
| Present or future tense? | **Present**: "returns" not "will return" |
| Oxford comma? | **Yes**: "shards, transactions, and fees" |
| Numbers under 10? | **Spell out**: "three shards" (except with units: "5 USDC") |
| Currency format? | **Token + amount**: "100 USDC" or "10 SBC" (no $ symbol) |
| Contractions? | **Yes**: "don't," "can't," "you're" (avoid awkward ones like "it'll") |
| Latin abbreviations? | **No**: Use "for example" not "e.g.", "that is" not "i.e." |
| Heading style? | **Sentence case**: "Send a transaction" not "Send a Transaction" |
| Code font for objects? | **Yes**: Use `Transaction`, `Block`, `Account` with link to reference |
| Bold for UI elements? | **Yes**: Click **Settings** > **API Keys** |
| Address format? | **Full with 0x**: `0x1234...abcd` (use checksummed addresses) |
| Chain references? | **Chain ID**: `1223953` (Radius Testnet) |

---

## Core Philosophy

### Consistency Is Paramount

Inconsistency frustrates users and can be misinterpreted as different meanings. If you call something a "shard" in one place and a "partition" in another, users will assume they're different things.

**Rule**: Use the exact same term every time you refer to the same concept. Don't vary word choice for elegance—this is technical writing, not prose.

### Users Scan, They Don't Read

Structure all content for scanning, not word-by-word reading. Users skim headings, code examples, and bullet points. They read body text only when they must.

**Implications**:
- Front-load important information
- Use short paragraphs (2-4 sentences max)
- Break up text with headings, lists, and code
- Make headings descriptive and actionable

### Be Ruthlessly Concise

Any text that doesn't increase clarity should be cut. Every word must earn its place.

**Before**: "In order to be able to successfully send a transaction on the Radius Network, you will need to make sure that you have first configured your wallet with the necessary RPC settings."

**After**: "To send a transaction, configure your wallet with the Radius RPC."

---

## Voice & Tone

### Write Like a Developer Talking to a Developer

Be conversational, technical, and matter-of-fact. Avoid marketing language, cuteness, and unnecessary enthusiasm.

**Good**: "Call the RPC endpoint to query the transaction."
**Bad**: "Simply leverage Radius's powerful network to easily fetch your transaction!"

### Be Appropriately Technical

Our primary audience is developers. Use proper technical terms. Make expectations clear. Don't "dumb down" content.

**Good**: "The RPC returns a JSON response with the transaction receipt."
**Bad**: "The network will send back some information about your transaction."

### Stay Positive and Definitive

Don't hedge or use tentative language. Be confident about what's true.

**Avoid**: may, might, probably, perhaps, could possibly
**Use**: must (for requirements), can (for capabilities), is/are (for facts)

---

## Grammar & Style

### Use Present Tense

Present tense is easier to read and often means shorter, more common words.

**Good**: "The RPC returns a transaction receipt."
**Bad**: "The RPC will return a transaction receipt."

### Use Active Voice

Active voice is simpler, clearer, and translates better.

**Good**: "The network validates the transaction."
**Bad**: "The transaction is validated by the network."

### Use Strong Verbs

Avoid weak verbs like "be," "have," "make," "do." Avoid "will" and "should" in most cases.

**Weak**: "You should make a call to the RPC."
**Strong**: "Call the RPC."

### Contractions

Use contractions for a conversational tone. They're natural and easier to read.

**Use**: don't, can't, you're, it's, we're, won't
**Avoid**: it'll, this'll, that'll (awkward)

### Oxford Comma

Always use the serial comma in lists of three or more items.

**Good**: "shards, transactions, and fees"
**Bad**: "shards, transactions and fees"

---

## Documentation Structure

### Titles

Use sentence case. Best titles include an action in imperative mood.

**Good**: "Send a transaction," "Configure your wallet"
**Acceptable**: "Smart contracts," "Network configuration"
**Bad**: "How to Send a Transaction," "Sending Transactions"

### Headings

**Sentence case**: "Deploy a smart contract" not "Deploy a Smart Contract"

**Guidelines**:
- Keep short (max 10-12 words)
- Use imperative mood: "Configure authentication," "Handle errors"
- Use parallel structure across same-level headings
- Never skip levels (h2 > h3 > h4, not h2 > h4)
- Never nest more than 3 levels deep

### Callouts

Use sparingly to highlight critical information. Maximum 3 per page.

**Good uses**:
- Security warnings (private key handling)
- Network differences from Ethereum
- Breaking changes or deprecations

---

## Code Examples

### Guiding Principles

Code examples should:
- Be **valid, working code** in the given language
- Be **concise**—show only what's necessary
- Be **secure**—never include real private keys or sensitive data
- **Build up complexity** gradually (basics first)
- Use **meaningful names** for variables, functions, classes

### Placeholders

Use syntax `{{VARIABLE_NAME}}` with underscores.

| Placeholder | Usage |
|-------------|-------|
| `{{PRIVATE_KEY}}` | Wallet private key (never use real keys in examples) |
| `{{RPC_URL}}` | RPC endpoint URL |
| `{{CONTRACT_ADDRESS}}` | Deployed contract address |
| `{{WALLET_ADDRESS}}` | User's wallet address |
| `{{CHAIN_ID}}` | Network chain ID |

### Default Values for Examples

When showing complete examples, use these Radius Testnet values:

```
RPC URL: https://rpc.testnet.radiustech.xyz
Chain ID: 1223953
Fee Token (SBC): 0xF966020a30946A64B39E2e243049036367590858
```

### Language & Tooling Standards

- **TypeScript**: Default language for all SDK examples
- **viem**: Primary Ethereum library (not ethers.js)
- **Foundry**: Primary smart contract tooling (not Hardhat)
- **pnpm**: Package manager for all install commands

---

## Radius-Specific Terminology

### Network Architecture

| Term | Usage |
|------|-------|
| shard | Lowercase: "transactions are distributed across shards" |
| finality | "sub-second finality" (hyphenate as adjective) |
| TPS | Spell out first use: "transactions per second (TPS)" |
| EVM compatible | No hyphen: "Radius is EVM compatible" |
| Osaka hardfork | Capitalize hardfork name: "supports Osaka hardfork features" |
| linear scalability | Lowercase: "achieves linear scalability through sharding" |

### Stablecoin & Fees

| Term | Usage |
|------|-------|
| SBC | Always caps: "pay fees in SBC" |
| USDC | Always caps: "transfer 100 USDC" |
| stablecoin-native | Hyphenate as adjective: "stablecoin-native fees" |
| fee token | Two words: "SBC is the fee token" |
| Turnstile | Capitalize (proper noun): "the Turnstile mechanism" |

### Addresses & Transactions

| Term | Usage |
|------|-------|
| address | Always with `0x` prefix in code: `0x1234...` |
| transaction hash | "tx hash" acceptable in informal contexts |
| block number | Two words, not "blocknumber" |
| checksum | Use checksummed addresses in all examples |
| receipt | "transaction receipt" for RPC responses |

### Development Tools

| Term | Usage |
|------|-------|
| Foundry | Capitalize (proper noun): "deploy with Foundry" |
| viem | Lowercase (library name): "import from viem" |
| WAGMI | All caps: "WAGMI React hooks" |
| Hardhat | Do NOT reference - Foundry is the standard |
| forge | Lowercase (Foundry command): "run `forge build`" |
| cast | Lowercase (Foundry command): "use `cast send`" |

---

## Common Terminology

| Term | Usage |
|------|-------|
| API | Always singular: "the API" |
| RPC | "the RPC" or "an RPC endpoint" |
| EVM | "the EVM" (not "an EVM") |
| SDK | "the SDK" or "the Radius SDK" |
| ID | Always "ID," never "id" or "Id" |
| URL | "a URL" (not "an URL") |
| back end, front end | Two words (noun); back-end, front-end (adjective) |
| client-side, server-side | Hyphenated (adjective) |
| setup | One word (noun/adj); "set up" (verb) |
| testnet | Lowercase unless starting sentence: "on testnet" |
| mainnet | Lowercase unless starting sentence: "deploy to mainnet" |
| smart contract | Two words: "deploy a smart contract" |
| on-chain | Hyphenated: "on-chain data" |
| off-chain | Hyphenated: "off-chain computation" |

---

## Common Pitfalls to Avoid

### Don't Use Low-Value Words

These words add no information and can undermine trust:

**Avoid**: just, simply, easily, obviously, clearly, only (unless literal)

**Bad**: "Simply configure the RPC to easily connect."
**Good**: "Configure the RPC to connect."

### Don't Suggest How Users Should Feel

Never tell users a task is easy, fast, or straightforward. If they disagree, you've lost their trust.

**Bad**: "It's easy to deploy a smart contract."
**Good**: "Deploy a smart contract in three steps."

### Don't Oversell Network Features

Let the technical facts speak for themselves.

**Bad**: "Radius's incredibly fast sub-second finality is amazing for payments."
**Good**: "Radius achieves sub-second finality, enabling real-time payment confirmation."

---

## Links & Navigation

### Link Text

Keep brief (typically 4 words or fewer). Match the title or heading you're linking to.

**Good**: "Learn more about [stablecoin fees](/differentiators/stablecoin-native-fees)."
**Bad**: "Click [here](/differentiators/stablecoin-native-fees) to learn about fees."

### Internal Links

Use relative paths for internal documentation links:
- `/build-deploy/quick-start-first-payment`
- `/developer-resources/sdks-typescript`

### External Links

Use full URLs for external resources:
- `https://viem.sh/docs/getting-started`
- `https://book.getfoundry.sh/`

---

## Formatting

### Bold

Use for:
- UI labels: Click **Settings**
- Filenames: Open **foundry.toml**
- Emphasis on key terms (sparingly)

### Code Font

Use for:
- Object names: `Transaction`, `Block`
- Methods/functions: `sendTransaction()`
- Commands: `pnpm install`
- Status codes: `200 OK`
- Addresses: `0x1234...abcd`
- Environment variables: `PRIVATE_KEY`

### Code Blocks

Always specify the language for syntax highlighting:

```typescript
// TypeScript examples
import { createPublicClient, http } from 'viem'
```

```bash
# Shell commands
pnpm install viem
```

```solidity
// Solidity contracts
pragma solidity ^0.8.20;
```
