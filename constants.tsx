import React from 'react';
import { 
  Zap, 
  Cpu, 
  TrendingUp, 
  Hammer, 
  Mail, 
  Terminal, 
  BrainCircuit, 
  FileCode2,
  BookOpen,
  Cloud,
  LineChart,
  UserCircle,
  Activity,
  Instagram
} from 'lucide-react';
import { Project, ProjectStatus, Skill, AutomationSystem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'wealth-sprint',
    title: 'Wealth Sprint',
    status: ProjectStatus.PROTOTYPE,
    link: 'https://wealthsprint.vercel.app',
    description: 'A finance learning product that blends emotion + logic + real-world money decisions into an interactive system.',
    outcome: 'Blends emotion and logic into an interactive finance learning system.',
    role: 'Solo Product Designer & Builder',
    tags: ['Finance', 'Structured & Logical Thinking', 'Designing', 'Prompting'],
    seoDescription: 'Wealth Sprint is a revolutionary fintech product by Ayush M. designed to teach personal finance through logical systems and emotional intelligence.',
    seoKeywords: ['fintech', 'finance education', 'wealth sprint', 'money management']
  },
  {
    id: 'money-tracker',
    title: 'Money Tracker',
    status: ProjectStatus.IN_PROGRESS,
    link: 'https://moneytrackerr.vercel.app/',
    description: 'Tracks income, expenses, debt, and cashflow — built to understand money movement clearly.',
    outcome: 'A comprehensive MVP for tracking personal cashflow and debt.',
    role: 'Solo Product Builder',
    tags: ['Finance', 'Prompting', 'Database Integration'],
    leftToIntegrate: ['backend database integration', 'Auth & User security'],
    seoDescription: 'A clean, systematic approach to tracking personal cashflow, debt, and income built as an MVP for financial clarity.',
    seoKeywords: ['money tracker', 'cashflow tracking', 'debt management']
  },
  {
    id: 'ai-voice-agent',
    title: 'Personal AI Voice Agent',
    status: ProjectStatus.IN_PROGRESS,
    description: 'First AI voice Agent for Testing my abilities',
    outcome: 'Bridging the gap between spoken commands and digital execution.',
    role: 'Solo Building',
    tags: ['voice recognition integration', 'AI API integration', 'Database Integration'],
    leftToIntegrate: ['Database', 'Auth & data Security', 'Quick Response'],
    seoDescription: 'Developing a cutting-edge personal AI voice agent focusing on seamless productivity workflows and intelligent automation.',
    seoKeywords: ['AI voice agent', 'automation', 'productivity ai']
  },
  {
    id: 'book-project',
    title: 'No Longer Friends But Not Strangers Yet',
    status: ProjectStatus.IN_PROGRESS,
    type: 'Book / Writing project',
    link: 'https://drive.google.com/file/d/14PlOZVVgkrL5GZ8wIS7inXXYIIFg8lfk/view?usp=drivesdk',
    description: 'A Hinglish Novel which helps for deepen understanding about how Human behaviour works with Multiple aspects of Emotions.',
    outcome: 'Learnt about Real Human behaviour with own personal Experience',
    role: 'Author',
    tags: ['Deepen Human behaviour understanding', 'Emotional Resilience', 'Self Growth'],
    leftToIntegrate: ['Done only 3/4 of Story yet', 'Structuring & Format'],
    seoDescription: 'A Hinglish novel exploring human behavior, emotional distance, and psychological resilience by Ayush M.',
    seoKeywords: ['Hinglish novel', 'human behavior', 'psychology']
  }
];

export const SKILLS: Skill[] = [
  {
    title: 'AI Prompt Engineering',
    description: 'Writing structured prompts to generate accurate outputs, product flows, scripts, and automation logic.',
    icon: 'BrainCircuit'
  },
  {
    title: 'AI Automation',
    description: 'Exploring AI automation by building small workflows that deliver weekly financial updates to Gmail.',
    icon: 'Cpu'
  },
  {
    title: 'Finance + Product Strategy',
    description: 'Understanding money flow, risk, compounding, emotional decision, and turning them into a MVP product. ',
    icon: 'TrendingUp'
  },
  {
    title: 'Builder Mindset',
    description: 'Deeply focused on build fast → fail fast → learn fast → iterate fast. I believe in practical learning through building, teaching, and product design — not just theory.',
    icon: 'Hammer'
  }
];

export const SYSTEMS: AutomationSystem[] = [
  {
    title: 'Weekly Financial Data Analysis → Gmail',
    description: 'Automated pipeline fetching personal financial data from GoogleSheets, processed via LLM, delivered to inbox.'
  },
  {
    title: 'Prompt-based Productivity Workflows',
    description: 'Custom internal tools that translate complex mental models into actionable task structures.'
  },
  {
    title: 'AI-driven Tracking Systems Mindset',
    description: 'Building frameworks that self-correct based on historical performance data.'
  },
  {
    title: 'AI & Automation',
    description: 'Developing autonomous workflows that leverage Large Language Models to handle complex cognitive tasks and data operations.'
  }
];

export const LEARNING_ITEMS = [
  {
    title: 'AI & Automation',
    description: 'Studying autonomous agent frameworks and LLM orchestration to build self-operating business logic.',
    icon: 'BrainCircuit'
  },
  {
    title: 'Cloud Database Integration',
    description: 'Learning scalable database + cloud integrations for production apps.',
    icon: 'Cloud'
  },
  {
    title: 'Improving Financial Knowledge',
    description: 'Enhancing decision-making ability with deeper finance understanding.',
    icon: 'LineChart'
  },
  {
    title: 'Human Behaviour',
    description: 'Studying psychology and behavioral patterns behind money and decisions.',
    icon: 'UserCircle'
  },
  {
    title: 'Focus & Execution Systems',
    description: 'Improving consistency, discipline, and shipping speed through better routines and systems.',
    icon: 'Activity'
  }
];

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/ayushm_fintech?igsh=MW0ycnFneGJ2d2JrdA==",
  email: "ayushxma@gmail.com"
};

export const ICON_MAP: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-blue-400" />,
  Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-blue-400" />,
  Hammer: <Hammer className="w-6 h-6 text-emerald-400" />,
  Zap: <Zap className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />,
  Terminal: <Terminal className="w-5 h-5" />,
  FileCode2: <FileCode2 className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Cloud: <Cloud className="w-5 h-5 text-blue-400" />,
  LineChart: <LineChart className="w-5 h-5 text-emerald-400" />,
  UserCircle: <UserCircle className="w-5 h-5 text-purple-400" />,
  Activity: <Activity className="w-5 h-5 text-blue-400" />,
  Instagram: <Instagram className="w-5 h-5" />
};