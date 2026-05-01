export interface Project {
  id: number;
  title: string;
  desc: string;
  features: string[];
  tech: string[];
  repo: string;
  demo?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  iconClass: string;
}