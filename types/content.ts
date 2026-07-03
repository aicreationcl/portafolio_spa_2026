export interface DateRange {
  start: string;
  end: string | "present";
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  client?: string;
  location: string;
  range: DateRange;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  decisions: string[];
  challenges: string[];
  impact: string[];
  results: string;
  tech: string[];
  links?: { label: string; href: string }[];
}

export interface GithubProject {
  id: string;
  name: string;
  description: string;
  url: string;
  demoUrl?: string;
  tech: string[];
  language?: { name: string; colorClass: string };
  imageUrl?: string;
  imageAlt?: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  icon: "frontend" | "backend" | "devops" | "architecture";
  items: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  program: string;
  range: DateRange;
}

export interface Profile {
  name: string;
  handle: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  yearsOfExperience: number;
  coreSkills: string[];
}
