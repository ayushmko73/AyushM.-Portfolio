
export enum ProjectStatus {
  PROTOTYPE = 'Prototype',
  LIVE = 'Live / MVP',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
}

export interface SubLink {
  name: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  description: string;
  outcome: string;
  role: string;
  tags: string[];
  leftToIntegrate?: string[];
  link?: string;
  github?: string;
  type?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  isPrivate?: boolean;
  subLinks?: SubLink[];
}

export interface Skill {
  title: string;
  description: string;
  icon: string;
}

export interface AutomationSystem {
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  avatar?: string;
}
