import type { Skills } from '../types/cv';

export const SECTION_TITLES = {
  experience: 'Experiencia Profesional',
  education: 'Formación Académica',
  skills: 'Competencias',
} as const;

export const NAV_LINKS = [
  { href: '#experience', label: 'Experiencia' },
  { href: '#education', label: 'Educación' },
  { href: '#skills', label: 'Skills' },
] as const;

export const SKILL_CATEGORIES: Array<{
  key: keyof Skills;
  title: string;
  cvTitle: string;
  showInCv: boolean;
}> = [
  { key: 'mobile', title: '📱 Mobile', cvTitle: 'Desarrollo Mobile', showInCv: true },
  { key: 'backend', title: '🧠 Backend', cvTitle: 'Backend', showInCv: true },
  { key: 'frontend', title: '🖥️ Frontend', cvTitle: 'Frontend', showInCv: true },
  { key: 'databases', title: '🗄️ Databases', cvTitle: 'Bases de Datos', showInCv: true },
  { key: 'gamedev', title: '🎮 Game Development', cvTitle: 'Game Development', showInCv: false },
  { key: 'tools', title: '🛠️ Dev Tools', cvTitle: 'Dev Tools', showInCv: false },
  { key: 'other', title: '✨ Otras', cvTitle: 'Otras', showInCv: false },
];
