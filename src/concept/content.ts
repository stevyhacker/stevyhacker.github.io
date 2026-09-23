// Content for the /concept/ page. Claims follow the verified career history
// (21 Sep 2026): dated protocol TVL is context, never personal financial impact.

export const PERSON = {
  name: 'Stevan Bogosavljević',
  handle: 'stevyhacker',
  role: 'Senior Solidity Engineer',
  location: 'Podgorica, Montenegro',
  timeZone: 'Europe/Podgorica',
  email: 'stevan.bogosavljevic@gmail.com',
  cvUrl: '/Stevan_Bogosavljevic_Resume.pdf',
  photo: '/img/pro.jpg',
} as const;

export const LINKS = [
  { label: 'GitHub', href: 'https://github.com/stevyhacker' },
  { label: 'X', href: 'https://x.com/stevyhacker' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stevan-bogosavljevic/' },
] as const;

export const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#standards', label: 'Standards' },
  { href: '#products', label: 'Products' },
  { href: '#notes', label: 'Notes' },
  { href: '#contact', label: 'Contact' },
] as const;

export type Erc = { number: number; title: string; summary: string };

export const ERCS: Erc[] = [
  {
    number: 5773,
    title: 'Context-Dependent Multi-Asset Tokens',
    summary: 'One token, several assets, with the right one picked by context.',
  },
  {
    number: 6059,
    title: 'Parent-Governed Nestable Non-Fungible Tokens',
    summary: 'NFTs that own other NFTs, with the parent in control.',
  },
  {
    number: 6220,
    title: 'Composable NFTs utilizing Equippable Parts',
    summary: 'Slot-based parts an NFT can equip and render.',
  },
  {
    number: 6381,
    title: 'Public Non-Fungible Token Emote Repository',
    summary: 'A shared registry for reacting to any NFT.',
  },
  {
    number: 6454,
    title: 'Minimal Transferable NFT detection interface',
    summary: 'A minimal interface to detect whether a token can move.',
  },
];

export const ercHref = (n: number) => `https://eips.ethereum.org/EIPS/eip-${n}`;

export const FACTS = [
  { value: '5', label: 'Ethereum standards co-authored, all Final' },
  { value: '$35B+', label: 'Aave TVL, the protocol my treasury work supports', note: 'Jan 2026' },
  { value: '$630M+', label: 'Synthetix TVL while I built its v4 deposits', note: 'Dec 2024' },
  { value: '10+ yrs', label: 'shipping software, 5+ of them in Solidity' },
] as const;

export type Role = {
  org: string;
  role: string;
  dates: string;
  current?: boolean;
  context: string;
  summary: string;
  points: string[];
  stack: string[];
  scale?: { text: string; href: string };
  evidence?: { text: string; href: string }[];
};

export const ROLES: Role[] = [
  {
    org: 'TokenLogic',
    role: 'Senior Solidity Engineer',
    dates: 'Dec 2025 – now',
    current: true,
    context: 'Aave DAO treasury · GHO',
    summary:
      'Cross-chain bridge integrations and stablecoin routing contracts for Aave DAO treasury operations.',
    points: [
      'Chainlink CCIP integration, with configurable fee tokens',
      'USDC over Circle CCTP v2 and USDT0 over LayerZero OFT',
      'sGHO router for USDC, USDT and GHO deposits and redemptions',
      'Chainlink price floors that reject swaps outside set loss bounds',
      'GCP KMS signing for Safe transaction execution',
    ],
    stack: ['Solidity', 'Foundry', 'CCIP', 'CCTP v2', 'LayerZero', 'Safe'],
    scale: { text: 'Aave · $35B+ TVL · Jan 2026', href: 'https://defillama.com/protocol/aave' },
  },
  {
    org: 'Synthetix',
    role: 'Senior Solidity Engineer',
    dates: 'Jul 2024 – Dec 2025',
    context: 'v4 deposits · perps',
    summary:
      'Contracts, vaults and the off-chain relayer behind the v4 deposit flow, plus v3 perps audit fixes.',
    points: [
      'v4 collateral deposit and withdrawal-request contracts, roles and upgrade scripts',
      'SLPVault reward accounting, including a double-counting fix',
      'CoW Swap integration with ERC-1271 order checks, Chainlink feeds and slippage limits',
      'Go relayer linking on-chain deposits to the exchange backend (NATS, Redis, retries)',
      'v3 perps audit fixes for order cancellation, solvency and keeper fees',
    ],
    stack: ['Solidity', 'Foundry', 'Go', 'NATS', 'Redis', 'CoW Swap'],
    scale: {
      text: 'Synthetix · $630M+ TVL · Dec 2024',
      href: 'https://defillama.com/protocol/synthetix',
    },
  },
  {
    org: 'THORWallet DEX',
    role: 'Solidity Developer',
    dates: 'Jun 2023 – Jul 2024',
    context: 'Staking · DEX · lending',
    summary: 'Staking, DEX and lending contracts for THORWallet and zkFinance.',
    points: [
      'Staking v2 with several reward tokens and time-based multipliers',
      'Redistribution of rewards forfeited by early withdrawals',
      'Multiplier corrections, audit responses and edge-case tests',
    ],
    stack: ['Solidity', 'Foundry', 'Hardhat'],
    scale: {
      text: 'zkFinance · $410K+ TVL · Jul 2024',
      href: 'https://defillama.com/protocol/zkfinance',
    },
    evidence: [
      { text: 'Staking v2 · PR #40', href: 'https://github.com/THORWallet/smartcontract/pull/40' },
      {
        text: 'Reward redistribution · PR #1',
        href: 'https://github.com/THORWallet/staking-contract/pull/1',
      },
    ],
  },
  {
    org: 'RMRK',
    role: 'Solidity Developer',
    dates: 'Jul 2022 – Jun 2023',
    context: 'NFT standards',
    summary:
      'Co-authored five Ethereum standards for advanced NFTs and built their reference implementations.',
    points: [
      'Multi-asset, nestable, equippable, emote and transferability standards',
      'Reference implementations, ERC-2981 royalties and marketplace contracts',
    ],
    stack: ['Solidity', 'Hardhat', 'TypeScript'],
    evidence: [{ text: 'rmrk-team/evm', href: 'https://github.com/rmrk-team/evm' }],
  },
  {
    org: 'MVP Workshop',
    role: 'Smart Contract Engineer',
    dates: 'Jun 2021 – Jul 2022',
    context: 'THEOS · NFT liquidity',
    summary:
      'NFT liquidity contracts for THEOS on Polygon, with SushiSwap and Rarible royalty integrations.',
    points: ['NFT deposit pools and fungible pool tokens on Polygon', 'Hardhat and TypeScript tooling'],
    stack: ['Solidity', 'Hardhat', 'Polygon'],
  },
];

export const EARLIER = [
  { years: '2020–21', org: 'Infinum', what: 'Android engineer on banking and telecom apps' },
  {
    years: '2019–20',
    org: 'Amplitudo',
    what: 'Senior Android, then lead of six iOS and Android developers. Taught a six-month Android course.',
  },
  { years: '2018–19', org: 'GSS Media · Sportamix', what: 'Android TV video services and a youth-sports app' },
  { years: '2017–18', org: 'SAFE Group', what: 'Remote Android for a Los Angeles health startup' },
  { years: '2016–18', org: 'GTV Corp', what: 'Streaming apps for Android TV and Fire TV' },
  { years: '2014–16', org: 'Fleka · Codingo · freelance', what: 'Internship, Android and Laravel, first client apps' },
  { years: '2013–14', org: 'Telenor', what: 'SurfWisely, a volunteer internet-safety app, launched Jan 2014' },
] as const;

export type Product = {
  name: string;
  kind: string;
  description: string;
  stack: string[];
  href: string;
  repo?: string;
  image: string;
};

export const FEATURED: Product[] = [
  {
    name: 'LokalBot',
    kind: 'Open-source macOS app',
    description:
      'A private AI workspace for the Mac: meeting notes and transcription, dictation and searchable work history. Everything runs on the device.',
    stack: ['Swift', 'SwiftUI', 'On-device AI'],
    href: 'https://lokalbot.com',
    repo: 'https://github.com/stevyhacker/lokalbot',
    image: '/img/lokalbot.png',
  },
  {
    name: 'BizStats',
    kind: 'Data product · Montenegro',
    description:
      'Company financials, public tenders and business search built from official filings. More than 33,000 companies, year by year.',
    stack: ['TypeScript', 'Next.js', 'Hono', 'PostgreSQL'],
    href: 'https://bizstats.me',
    image: '/img/bizstats.png',
  },
];

export const MORE_PRODUCTS = [
  {
    name: 'IT Stats',
    description: 'Salaries, company finances and jobs in Montenegro’s IT sector.',
    stack: 'React · TypeScript',
    href: 'https://itstats.me',
  },
  {
    name: 'Toddler’s Toons',
    description: 'Turns a kid’s photo into a themed comic page, with a free preview first.',
    stack: 'Next.js · AI',
    href: 'https://www.toddlertoons.app/',
  },
  {
    name: 'Aimons',
    description: 'AI character generation with NFT minting.',
    stack: 'Next.js · Solidity',
    href: 'https://ai-mons-frontend.vercel.app',
  },
  {
    name: 'Chain Art',
    description: 'NFT minting with images and metadata stored fully on-chain.',
    stack: 'React · Solidity',
    href: 'https://chain-art-frontend.vercel.app',
  },
  {
    name: 'Token Locker',
    description: 'Locks ERC-20 tokens until a date you choose.',
    stack: 'Solidity · React · ethers.js',
    href: 'https://token-locker.vercel.app',
  },
] as const;

export const PRINCIPLES = [
  {
    title: 'Failure modes before features',
    body: 'I agree the failure cases and the acceptance boundary before writing code. Anything beyond that goes on a list, not into the pull request.',
  },
  {
    title: 'Every fix ships with its test',
    body: 'An audit finding gets a regression test next to the fix, so the same bug can’t come back quietly.',
  },
  {
    title: 'Changes a reviewer can hold',
    body: 'Small pull requests with the invariants written down. I review other people’s work the same way.',
  },
  {
    title: 'AI speeds the work, I own it',
    body: 'Agents help with implementation, tests and review. I sign off every invariant myself.',
  },
] as const;

export const NOTES = [
  {
    date: 'Jan 2019',
    title: 'Nedostaci i problemi rada od “kuće”',
    excerpt: 'What several years of remote work taught me, before distributed work was normal.',
    href: '/blog/posts/nedostaci-i-problemi-rada-od-kuce/',
  },
  {
    date: 'Dec 2017',
    title: 'Rudarenje kriptovaluta: Bitcoin i Ethereum',
    excerpt: 'An early note on mining, hardware and the economics of public blockchains.',
    href: '/blog/posts/rudarenjemining-kriptovaluta-bitcoin-i-ethereum/',
  },
  {
    date: 'Nov 2012',
    title: 'Prvi crnogorski hakaton',
    excerpt: 'Montenegro’s first hackathon, and the builder community that started there.',
    href: '/blog/posts/prvi-crnogorski-hakaton/',
  },
] as const;
