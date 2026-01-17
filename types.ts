
export enum ProjectStatus {
  PROTOTYPE = 'Prototype',
  LIVE = 'Live / MVP',
  IN_PROGRESS = 'In Progress',
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
