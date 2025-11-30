import React from 'react';
import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  link: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  achievements?: string[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools';
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  component: React.FC;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone?: string;
}