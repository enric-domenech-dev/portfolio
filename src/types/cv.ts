export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  birthDate?: string;
  links: {
    portfolio?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  startDate?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  status?: string;
}

export interface Skills {
  mobile: string[];
  backend: string[];
  frontend: string[];
  databases: string[];
  gamedev: string[];
  tools: string[];
  other: string[];
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface CvData {
  personal: PersonalInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: Skills;
  languages: LanguageItem[];
}
