import { LucideIcon } from 'lucide-react';

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: 'AI/Healthcare' | 'Web' | 'Data Science' | 'Full-stack' | 'Coming Soon';
  image?: string;
}

export interface SkillType {
  name: string;
  level: number; // percentage out of 100
  category: 'languages' | 'web' | 'tools' | 'databases' | 'soft';
}

export interface ExperienceType {
  role: string;
  organization: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface CertificationType {
  title: string;
  issuer: string;
  date: string;
  badge?: string;
  verifyUrl?: string;
}

export interface AchievementType {
  stat: string;
  title: string;
  description: string;
  metric: number;
}

export interface EducationType {
  period: string;
  degree: string;
  major?: string;
  institution: string;
  score: string;
}
