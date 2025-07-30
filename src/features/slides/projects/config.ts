import { Project, ProjectStatus } from "./types";

export const projects: Project[] = [
    {
        title: 'Bakstag',
        description: 'Omnichain OTC market. Seamless peer-to-peer transactions through any network',
        link: 'https://bakstag-landing.vercel.app/',
        status: ProjectStatus.Closed,
        tech: ['React', 'Node.js', 'PostgreSQL', 'Solidity', 'Web3'],
    },
    {
        title: 'Toby Ai',
        description: 'AI agent for managment LP position on Solana',
        link: 'https://tobyai.xyz/',
        status: ProjectStatus.Closed,
        tech: ['Next.js', 'Tailwind', 'Web3'],
    },
    {
        title: 'Babushka',
        description: 'Tamagochi like game in Telegram Mini App & Line Mini App',
        link: 'https://t.me/babushkaagamebot/babushka_app',
        status: ProjectStatus.Beta,
        tech: ['React', 'NestJs', 'AWS'],
    },
    {
        title: 'LP simulator',
        description: 'Analytics tools for simulation of how LP works',
        link: 'https://pools-simulator-lppj.vercel.app/',
        status: ProjectStatus.Concept,
        tech: ['React', 'Web3'],
    },
];
