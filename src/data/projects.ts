export type Project = {
  title: string;
  description: string;
  highlights: string[];
  image: string;
  tech: string[];
  url: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: 'IT Stats',
    description: 'Salary and job-market analytics for the IT industry.',
    highlights: [
      'Data visualization with Chart.js',
      'Public product at itstats.me',
    ],
    image: '/img/it_stats.png',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Chart.js'],
    url: 'https://itstats.me',
    featured: true,
  },
  {
    title: "Toddler's Toons",
    description:
      'AI comic keepsake gifts — turn a kid photo into a themed comic page with free preview and paid bundles.',
    highlights: [
      'Photo-to-comic flow with themes, pricing tiers, and Mini Comic PDF',
      'Live at toddlertoons.app — preview before pay, kid-safe generation',
    ],
    image: '/img/toddlertoons.png',
    tech: ['Next.js', 'TypeScript', 'AI', 'TailwindCSS'],
    url: 'https://www.toddlertoons.app/',
  },
  {
    title: 'Aimons',
    description:
      'AI-assisted digital character generator with NFT minting as the persistence layer.',
    highlights: [
      'End-to-end product: generation UI to on-chain mint',
      'Next.js frontend with Solidity contracts (OpenZeppelin)',
    ],
    image: '/img/aimon.png',
    tech: ['React', 'Next.js', 'Solidity', 'Hardhat', 'OpenZeppelin'],
    url: 'https://ai-mons-frontend.vercel.app',
  },
  {
    title: 'Chain Art',
    description: 'NFT minting with on-chain art generation and a marketplace experience.',
    highlights: [
      'On-chain generative art pipeline',
      'IPFS metadata and OpenZeppelin contracts',
    ],
    image: '/img/chainArt.png',
    tech: ['React', 'Solidity', 'IPFS', 'OpenZeppelin'],
    url: 'https://chain-art-frontend.vercel.app',
  },
  {
    title: 'Token Locker',
    description: 'ERC-20 lock protocol with a clear deposit and release flow.',
    highlights: [
      'Smart contracts plus wallet-connected UI',
      'ethers.js integration with Hardhat toolchain',
    ],
    image: '/img/token_locker.png',
    tech: ['React', 'TypeScript', 'Solidity', 'Hardhat', 'ethers.js'],
    url: 'https://token-locker.vercel.app',
  },
];
