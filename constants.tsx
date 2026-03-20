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
  Instagram,
  Linkedin,
  Award,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { Project, ProjectStatus, Skill, AutomationSystem, Certificate } from './types.ts';

export const PROJECTS: Project[] = [
  {
    id: 'wealth-sprint',
    title: 'Wealth Sprint',
    status: ProjectStatus.PROTOTYPE,
    link: 'https://wealthsprint.vercel.app',
    description: 'A finance learning product that blends emotion + logic + real-world money decisions into an interactive system. This is the central core of my entrepreneurial vision, where all other technical experiments converge into a single market-facing solution.',
    outcome: 'Blends emotion and logic into an interactive finance learning system.',
    role: 'Solo Product Designer & Builder',
    tags: ['FINANCE', 'STRUCTURED & LOGICAL THINKING', 'DESIGNING', 'PROMPTING'],
    seoDescription: 'Wealth Sprint is the primary compounding project by Ayush M., integrating AI automation, financial tracking, and behavioral psychology into one modular ecosystem.',
    seoKeywords: ['fintech ecosystem', 'compounding systems', 'wealth sprint', 'ayush m projects'],
    subLinks: [
      { 
        name: 'Confidential Data', 
        url: 'https://drive.google.com/file/d/1b560M9jk_fqhkAC9axU-WPGL9qgyz9IY/view?usp=drivesdk',
        description: 'ACCESS RESTRICTED • COLLABORATORS ONLY'
      }
    ]
  },
  {
    id: 'genapp-builder',
    title: 'GenApp Builder',
    status: ProjectStatus.LIVE,
    description: 'An autonomous AI orchestration platform designed to bridge the gap between natural language requirements and production-ready applications. It serves as the technological engine for Wealth Sprint, allowing for rapid iteration of financial modules.',
    outcome: 'Successful creation of a zero-code autonomous development agent capable of shipping functional utility apps.',
    role: 'Lead AI Systems Architect',
    tags: ['Autonomous Agents', 'LLM Orchestration', 'Zero-Code', 'Product Strategy'],
    isPrivate: true,
    link: 'https://genapp-builder-internal.app',
    subLinks: [
      { name: 'Calculator App', url: 'https://calculator-by-gen.vercel.app/' },
      { name: 'Multiplayer AI Chess', url: 'https://chess-multi-ai.vercel.app/' },
      { name: 'Tic-Tac-Toe', url: 'https://tic-tac-toe-bygenai.vercel.app/' }
    ],
    seoDescription: 'GenApp Builder: An autonomous AI agent software that creates functional applications through natural language processing and end-to-end automated workflows.',
    seoKeywords: ['AI agent', 'GenApp Builder', 'autonomous coding', 'AI software development']
  },
  {
    id: 'money-tracker',
    title: 'Money Tracker',
    status: ProjectStatus.IN_PROGRESS,
    link: 'https://moneytrackerr.vercel.app/',
    description: 'Tracks income, expenses, debt, and cashflow — built to understand money movement clearly. This provides the fundamental data architecture for Wealth Sprint\'s analytical core.',
    outcome: 'A comprehensive MVP for tracking personal cashflow and debt.',
    role: 'Solo Product Builder',
    tags: ['FINANCE', 'PROMPTING', 'DATABASE INTEGRATION'],
    leftToIntegrate: ['backend database integration', 'Auth & User security'],
    seoDescription: 'A clean, systematic approach to tracking personal cashflow, debt, and income built as an MVP for financial clarity.',
    seoKeywords: ['money tracker', 'cashflow tracking', 'debt management']
  },
  {
    id: 'ai-voice-agent',
    title: 'Personal AI Voice Agent',
    status: ProjectStatus.IN_PROGRESS,
    description: 'First AI voice Agent for testing capabilities. This experiment informs the future conversational interface of Wealth Sprint, making complex finance accessible through speech.',
    outcome: 'Bridging the gap between spoken commands and digital execution.',
    role: 'Solo Building',
    tags: ['VOICE RECOGNITION INTEGRATION', 'AI API INTEGRATION', 'DATABASE INTEGRATION'],
    leftToIntegrate: ['Database', 'Auth & data Security', 'Quick Response'],
    seoDescription: 'Developing a cutting-edge personal AI voice agent focusing on seamless productivity workflows and intelligent automation.',
    seoKeywords: ['AI voice agent', 'automation', 'productivity ai']
  },
  {
    id: 'book-project',
    title: 'No Longer Friends But Not Strangers Yet',
    status: ProjectStatus.LIVE,
    type: 'Book / Writing project',
    link: 'https://amzn.in/d/01vuCtQl',
    description: 'A English novel tracing a character navigating silent attachment, rejection, and self-growth, capturing the fragile space where relationships lose definition, and two people remain neither truly connected nor completely strangers.',
    outcome: 'Delivered a psychologically grounded novel translating human behaviour and emotional complexity into a narrative that explores identity, detachment, and the in-between state of modern relationships.',
    role: 'Author',
    tags: [
      'Human Behavior Analysis',
      'Emotional Intelligence & Depth',
      'Narrative Psychology',
      'Character Development & Storytelling',
      'AI-Assisted Creative Writing'
    ],
    seoDescription: 'An English novel exploring human behavior, emotional distance, and psychological resilience by Ayush M.',
    seoKeywords: ['English novel', 'human behavior', 'psychology'],
    subLinks: [
      {
        name: 'Confidential Manuscript Data',
        url: 'https://drive.google.com/file/d/1t64yJAJ3dJSn7X7pGOReQvSzH2cbV58f/view?usp=drivesdk',
        description: 'ACCESS RESTRICTED • AUTHOR APPROVAL REQUIRED'
      }
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    title: 'AI Prompt Engineering',
    description: 'Writing structured prompts to generate accurate outputs, product flows, scripts, and automation logic.',
    icon: 'BrainCircuit',
    proofOfWork: 'GenApp Builder +4 more',
    executions: [
      { name: 'GenApp Builder', description: 'Autonomous AI orchestration for zero-code app development.' },
      { name: 'AI Voice Agent', description: 'Conversational interface for testing voice-to-execution capabilities.' },
      { name: 'Wealth Sprint', description: 'Complex prompt structures for financial decision-making logic.' },
      { name: 'Money Tracker', description: 'Prompt-driven data architecture for personal cashflow tracking.' },
      { name: 'No Longer Friends...', description: 'Published novel leveraging AI-assisted narrative structuring and psychological depth.' }
    ]
  },
  {
    title: 'AI Automation',
    description: 'Exploring AI automation by building small workflows that deliver weekly financial updates to Gmail.',
    icon: 'Cpu',
    proofOfWork: 'Deployed Weekly Analysis Pipeline',
    executions: [
      { name: 'Gmail Automation', description: 'Weekly financial data analysis delivered directly to inbox.' },
      { name: 'Auto Client Numbers Extractor', description: 'AI-driven system extracting client data from Google Maps to structured Google Sheets.' }
    ]
  },
  {
    title: 'Finance + Product Strategy',
    description: 'Understanding money flow, risk, compounding, emotional decision, and turning them into a MVP product. ',
    icon: 'TrendingUp',
    proofOfWork: 'Architected Wealth Sprint & Money Tracker',
    executions: [
      { name: 'Wealth Sprint', description: 'A multi-modular financial learning system blending emotion and logic.' },
      { name: 'Money Tracker', description: 'Comprehensive MVP for tracking personal cashflow and debt.' }
    ]
  },
  {
    title: 'Narrative Psychology',
    description: 'Translating complex human behavior and emotional depth into structured, professional narratives and character-driven insights.',
    icon: 'BookOpen',
    proofOfWork: 'Published Novel: "No Longer Friends..."',
    executions: [
      { name: 'Published Novel', description: '"No Longer Friends But Not Strangers Yet" - A psychologically grounded literary work.' }
    ]
  },
  {
    title: 'Builder Mindset',
    description: 'Focused on rapid execution and practical iteration. I transform theoretical concepts into published products and functional systems through design and engineering.',
    icon: 'Hammer',
    proofOfWork: 'From Concept to Published Reality',
    executions: [
      { name: 'Published Novel', description: 'Transitioned from creative concept to a market-ready published book.' },
      { name: 'Functional Systems', description: 'Shipped multiple functional utility applications and financial architectures.' },
      { name: 'Wealth Sprint Ecosystem', description: 'A central project where technical experiments converge into a market-facing solution.' }
    ]
  }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    title: 'Business Analysis Basics',
    issuer: 'Industry Certification',
    level: 'Foundational',
    link: 'https://drive.google.com/file/d/1zUmSMRR6Pq-u4fI1AEsF2yk0TO8ScSyz/view?usp=drivesdk',
    icon: 'Award'
  },
  {
    title: 'Image Captioning AI Model',
    issuer: 'Technical Specialization',
    level: 'Beginner',
    link: 'https://drive.google.com/file/d/1hX73fiDKgEsRmpyR-gHA8Qqf4WDau51p/view?usp=drivesdk',
    icon: 'ShieldCheck'
  },
  {
    title: 'AI in Finance',
    issuer: 'Technical Specialization',
    level: 'Foundational',
    link: 'https://drive.google.com/file/d/1IEYhqpzL0lL5VF9z5EBZv-5FRbVSHgGd/view?usp=drivesdk',
    icon: 'BrainCircuit'
  },
  {
    title: 'Published Novelist Certification',
    issuer: 'Literary Achievement',
    level: 'Professional',
    link: 'https://drive.google.com/file/d/1py8lvuzSHxoyKCTX7d2GIQajT01G8Cta/view?usp=drivesdk',
    icon: 'BookOpen'
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
  }
];

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/ayushm_fintech?igsh=MW0ycnFneGJ2d2JrdA==",
  linkedin: "https://www.linkedin.com/in/ayush--b8a46a3a8",
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
  Instagram: <Instagram className="w-5 h-5" />,
  Linkedin: <Linkedin className="w-5 h-5 text-blue-400" />,
  Award: <Award className="w-5 h-5 text-blue-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  ExternalLink: <ExternalLink size={14} />
};