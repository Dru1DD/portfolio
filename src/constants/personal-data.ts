import { Github, Linkedin, Send, Twitter, Mail, type LucideIcon } from 'lucide-react';

// ─── Personal Info ───────────────────────────────────────────────────────────
export const PERSONAL_INFO = {
  name: 'Oleksandr Andriichuk',
  title: 'Blockchain Developer',
  domains: ['Blockchain', 'Cryptocurrency', 'Tokenization'],
} as const;

export type SocialLinkData = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const SOCIAL_LINKS: SocialLinkData[] = [
  { label: 'GitHub', href: 'https://github.com/Dru1DD', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oleksandr-andriichuk-7ba94b224/', icon: Linkedin },
  { label: 'Telegram', href: 'https://t.me/Dru1DD', icon: Send },
  { label: 'X', href: 'https://x.com/Dru1DDDD', icon: Twitter },
  { label: 'Email', href: 'mailto:olexandrandrichuk@gmail.com', icon: Mail },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['TypeScript', 'JavaScript', 'Solidity', 'Rust'],
  },
  {
    title: 'Front-end',
    skills: [
      'React',
      'Next.js',
      'Redux',
      'MobX',
      'Zustand',
      'Apollo GraphQL',
      'Axios',
      'React Query',
      'Socket.io',
      'MUI',
      'Styled Components',
      'Tailwind',
      'PostCSS',
      'Framer Motion',
      'Three.js',
      'Jest',
      'React Testing Library',
      'Cypress',
      'Playwright',
      'I18Next',
    ],
  },
  {
    title: 'Back-end',
    skills: [
      'Node.js',
      'NestJS',
      'Express.js',
      'Prisma',
      'TypeORM',
      'Mongoose',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'RxJS',
      'BullMQ',
      'Passport.js',
      'JWT',
      'WebSockets',
      'Swagger',
      'AWS (S3, EC2)',
    ],
  },
  {
    title: 'Blockchain',
    skills: [
      'Hardhat',
      'EVM Chains',
      'Solana',
      'Ethers.js',
      'Viem',
      'Web3.js',
      'ThirdWeb',
      'Web3Modal',
      'Wagmi',
      'Solana Web3.js',
      'SPL Token',
      'Anchor',
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub', 'GitLab', 'Bitbucket'],
  },
];

export type ProjectData = {
  name: string;
  period: string;
  role: string;
  description: string;
  responsibilities: string[];
  environment: string[];
};

export const PROJECTS: ProjectData[] = [
  {
    name: 'Unknown Labs',
    period: '07.2025 – Present',
    role: 'Full-Stack Engineer',
    description:
      'High-performance decentralized platform for token generation and initial distribution (IDO) on Solana. Handles the entire lifecycle of a token launch: from automated SPL-token minting and metadata configuration to vesting schedules and public presales. Engineered for high-concurrency traffic during launch events.',
    responsibilities: [
      'Integrate with Jupiter and Meteora',
      'Optimize RPC node interactions',
      'Created architecture',
      'Code review',
    ],
    environment: [
      'TypeScript',
      'React',
      'Next.js',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'AWS',
      'Zustand',
      'Solana Web3.js',
      'Rust',
      'TailwindCSS',
    ],
  },
  {
    name: 'Toby',
    period: '03.2025 – 06.2025',
    role: 'Full-Stack Engineer',
    description:
      'AI agent based on ElizaOS for management of LP positions on Raydium. Automated liquidity provision strategies with intelligent rebalancing.',
    responsibilities: [
      'Integrate with Jupiter and Meteora',
      'Optimize RPC node interactions',
      'Created architecture',
      'Code review',
    ],
    environment: [
      'TypeScript',
      'React',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'AWS',
      'Zustand',
      'Solana Web3.js',
      'TailwindCSS',
    ],
  },
  {
    name: 'Bakstag',
    period: '06.2024 – 05.2025',
    role: 'Full-Stack Engineer',
    description:
      'Decentralized OTC marketplace enabling secure, trustless asset swaps across EVM, Tron and Solana networks. Leverages LayerZero protocol for cross-chain messaging and state validation.',
    responsibilities: [
      'Smart contracts configuration and deployment',
      'Creating custom UI packages',
      'Creating custom FE-BE-mobile solutions',
      'Optimizing React / Next.js performance',
      'Writing unit tests',
    ],
    environment: [
      'TypeScript',
      'React',
      'Next.js',
      'NestJS',
      'Zustand',
      'Ethers',
      'PostgreSQL',
      'Tailwind',
      'I18Next',
      'Jest',
      'ThirdWeb SDK',
      'TronWeb',
      'Web3.js',
      'Wagmi/Viem',
    ],
  },
  {
    name: 'Bandaworks',
    period: '01.2023 – 06.2024',
    role: 'Full-Stack Engineer',
    description:
      'Cross-platform mobile app (React Native / Expo) for digital reading and educational content. Provides a curated library of book summaries with a highly optimized reading engine, featuring robust offline caching and responsive typography.',
    responsibilities: [
      'Integrate Firebase into React Native',
      'Designing responsive UI components',
      'Optimizing React Native performance',
      'Multi-language support (i18n)',
      'Manage release cycle in Google Play',
      'Writing unit tests',
    ],
    environment: [
      'TypeScript',
      'React Native',
      'Expo',
      'React Navigation',
      'React Native Animation',
      'Firebase',
      'Firebase Functions',
    ],
  },
];

export const EDUCATION = {
  degree: 'Computer Science and Software Engineering',
} as const;

export type LanguageProficiency = {
  language: string;
  level: string;
};

export const LANGUAGES: LanguageProficiency[] = [
  { language: 'English', level: 'B2' },
  { language: 'Polish', level: 'B2' },
  { language: 'Ukrainian', level: 'C2' },
  { language: 'Russian', level: 'C1' },
];
