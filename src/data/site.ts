export const SITE = {
  name: 'Stevan Bogosavljević',
  title: 'Senior Software Engineer',
  tagline:
    'Smart contracts, DeFi, and full-stack products — from Solidity on EVM to React interfaces.',
  proof: '5+ years Solidity · DeFi & NFT protocols · React / TypeScript full-stack',
  email: 'stevan.bogosavljevic@gmail.com',
  cvUrl: '/Stevan_Bogosavljevic_Resume.pdf',
  availability: 'Open to senior engineering roles, smart-contract work, and interesting builds.',
  url: 'https://stevyhacker.github.io/',
  photo: '/img/pro.jpg',
} as const;

export const SOCIAL = [
  { href: 'https://github.com/stevyhacker', label: 'GitHub', icon: 'github' as const },
  { href: 'https://twitter.com/stevyhacker', label: 'Twitter', icon: 'twitter' as const },
  {
    href: 'https://linkedin.com/in/stevan-bogosavljevic/',
    label: 'LinkedIn',
    icon: 'linkedin' as const,
  },
] as const;

export const SKILLS = [
  'Solidity',
  'EVM',
  'Foundry / Hardhat',
  'DeFi',
  'React',
  'TypeScript',
] as const;

export const PILLARS = [
  {
    title: 'Smart contracts',
    detail: 'Solidity, EVM, Hardhat & Foundry — audits-minded patterns',
  },
  {
    title: 'DeFi & NFTs',
    detail: 'Token standards, marketplaces, lockers, on-chain art',
  },
  {
    title: 'Full-stack delivery',
    detail: 'React / Next.js UIs wired to wallets and live protocols',
  },
] as const;

export const ABOUT_LEAD =
  'Senior Solidity engineer — 11 years in software, 5+ years on EVM. DeFi protocol engineering, co-author of 5 ERCs, and full-stack delivery in React and TypeScript.';

export const ABOUT = [
  {
    icon: 'code' as const,
    title: 'Smart Contract Expert',
    description:
      '5+ years of Solidity with Foundry and Hardhat, shipping production contracts that hold real funds on mainnet.',
  },
  {
    icon: 'wallet' as const,
    title: 'DeFi Protocol Engineer',
    description:
      'Perpetuals, lending, stablecoin routing, and cross-chain treasury work — including bridge integrations for DAO fund flows.',
  },
  {
    icon: 'database' as const,
    title: 'Full Stack Developer',
    description:
      'React, Next.js, and TypeScript dApps with wallet integration — contracts, deployment, and UI shipped as one product.',
  },
  {
    icon: 'brain' as const,
    title: 'Standards & Leadership',
    description:
      'Co-authored 5 published ERCs for composable and soulbound NFTs. Former Android team lead and mobile development instructor.',
  },
] as const;

export const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
] as const;
