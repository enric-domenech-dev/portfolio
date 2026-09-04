import type { IconName } from '@/core/shared/constants/icons';
import type { SkillCategoryKey } from './domain/models/Skill';

export const SKILLS_SECTION = {
  title: 'Competencias',
} as const;

export const SKILL_CATEGORY_META: Array<{
  key: SkillCategoryKey;
  title: string;
  cvTitle: string;
  showInCv: boolean;
  icon: IconName;
}> = [
  { key: 'mobile', title: 'Mobile', cvTitle: 'Desarrollo Mobile', showInCv: true, icon: 'smartphone' },
  { key: 'backend', title: 'Backend', cvTitle: 'Backend', showInCv: true, icon: 'server' },
  { key: 'frontend', title: 'Frontend', cvTitle: 'Frontend', showInCv: true, icon: 'monitor' },
  { key: 'databases', title: 'Databases', cvTitle: 'Bases de Datos', showInCv: true, icon: 'database' },
  { key: 'gamedev', title: 'Game Development', cvTitle: 'Game Development', showInCv: false, icon: 'gamepad' },
  { key: 'tools', title: 'Dev Tools', cvTitle: 'Dev Tools', showInCv: false, icon: 'wrench' },
  { key: 'other', title: 'Otras', cvTitle: 'Otras', showInCv: false, icon: 'sparkles' },
];
