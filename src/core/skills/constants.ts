import type { SkillCategoryKey } from './domain/models/Skill';

export const SKILLS_SECTION = {
  title: 'Competencias',
} as const;

export const SKILL_CATEGORY_META: Array<{
  key: SkillCategoryKey;
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
