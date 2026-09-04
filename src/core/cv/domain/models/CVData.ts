import type { Education } from '../../../education/domain/models/Education';
import type { Experience } from '../../../experience/domain/models/Experience';
import type { SkillCategory } from '../../../skills/domain/models/Skill';

export interface PersonalLinks {
  portfolio?: string;
  linkedin?: string;
  github?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  birthDate?: string;
  dni?: string;
  links: PersonalLinks;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface CVData {
  personal: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: SkillCategory[];
  languages: LanguageItem[];
}
