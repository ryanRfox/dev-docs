/**
 * Radius Documentation - Site Configuration
 *
 * Central source of truth for all site-wide constants, addresses, URLs, and configuration values.
 * Update values here to propagate changes across all documentation pages.
 */

export const RADIUS_CONFIG = {
  // ============================================================================
  // Network Configuration
  // ============================================================================
  CHAIN_ID: 1223953,
  CHAIN_ID_HEX: '0x12ad11',
  RPC_URL: 'https://rpc.testnet.radiustech.xyz',
  DASHBOARD_URL: 'https://dashboard.radiustech.xyz/',
  FAUCET_URL: 'https://testnet.radiustech.xyz/testnet/faucet',

  // ============================================================================
  // Token & Core Contracts
  // ============================================================================
  SBC_TOKEN: '0xF966020a30946A64B39E2e243049036367590858',
  TOKEN_DECIMALS: 18,

  // ============================================================================
  // ERC-4337 Smart Account Infrastructure
  // ============================================================================
  ENTRY_POINT_V07: '0x9b443e4bd122444852B52331f851a000164Cc83F',
  SIMPLE_ACCOUNT_FACTORY: '0x4DEbDe0Be05E51432D9afAf61D84F7F0fEA63495',

  // ============================================================================
  // Utility Contracts
  // ============================================================================
  PERMIT2: '0x000000000022d473030f116ddee9f6b43ac78ba3',
  CREATE2_FACTORY: '0x4e59b44847b379578588920cA78FbF26c0B4956C',

  // ============================================================================
  // Test Accounts (Anvil/Hardhat Standard)
  // ============================================================================
  TEST_ACCOUNT_0: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  TEST_ACCOUNT_0_PRIVATE_KEY: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',

  TEST_ACCOUNT_1: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
  TEST_ACCOUNT_1_PRIVATE_KEY: '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',

  TEST_RECIPIENT: '0x742d35Cc6634C0532925a3b844Bc9e7595f7E9F1',

  // ============================================================================
  // Pricing & Economics
  // ============================================================================
  TRANSACTION_COST: '0.0001',
  TRANSACTION_COST_USD: '$0.0001',
  TRANSACTION_COST_SBC: '0.0001',

  COST_PER_TRANSFER: '0.000001',
  COST_PER_TRANSFER_FORMATTED: '$0.000001',

  TRANSFERS_PER_DOLLAR: 1_000_000,
  MIN_THRESHOLD_SBC: '0.001',

  // Traditional payment processor baseline (for comparison)
  TRADITIONAL_FEES: '2.9% + $0.30',
  TRADITIONAL_INVOICE_DELAY_DAYS: 30,

  // ============================================================================
  // Performance Characteristics
  // ============================================================================
  MAX_THROUGHPUT: '2.5M TPS',
  SETTLEMENT_TIME: '200ms',
  FINALITY: 'sub-second',

  // ============================================================================
  // Gas & Computation Constants
  // ============================================================================
  GAS_RESERVE: 21000,

  // ============================================================================
  // Example/Demo Values
  // ============================================================================
  EXAMPLE_TRANSFER_AMOUNT: '0.5',
  EXAMPLE_PAYMENT_AMOUNT: '0.1',
  FAUCET_CLAIM_AMOUNT: '10',
  TOKEN_IN_WEI: '1000000000000000000', // 1 token with 18 decimals

  // ============================================================================
  // Branding
  // ============================================================================
  BRAND_COLOR: '#EB6359', // Prosperous Red

  // ============================================================================
  // External Resources
  // ============================================================================
  DOCS_URL: 'https://docs.radiustech.xyz',
  DISCORD_URL: 'https://discord.gg/radiustech',
  TEMPO_DOCS_URL: 'https://docs.tempo.xyz/',
  VIEM_URL: 'https://viem.sh',
  WAGMI_URL: 'https://wagmi.sh',
  WEBSITE_URL: 'https://radiustech.xyz',
  GITHUB_URL: 'https://github.com/radiustechsystems',
  TWITTER_URL: 'https://x.com/radiustech_xyz',
} as const

// ============================================================================
// Type Safety Helper
// ============================================================================
export type RadiusConfig = typeof RADIUS_CONFIG
