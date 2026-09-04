import type { IconName } from '@/core/shared/constants/icons';
import type { Locale } from '@/core/shared/i18n/locale';
import { getDictionary } from '@/core/shared/i18n/dictionary';
import type { SkillCategoryKey } from './domain/models/Skill';

export function getSkillsSection(locale: Locale) {
  return getDictionary(locale).skillsSection;
}

export const BASE_CATEGORIES: Array<{ key: SkillCategoryKey; showInCv: boolean; icon: IconName }> = [
  { key: 'mobile', showInCv: true, icon: 'smartphone' },
  { key: 'backend', showInCv: true, icon: 'server' },
  { key: 'frontend', showInCv: true, icon: 'monitor' },
  { key: 'databases', showInCv: true, icon: 'database' },
  { key: 'gamedev', showInCv: false, icon: 'gamepad' },
  { key: 'tools', showInCv: false, icon: 'wrench' },
  { key: 'other', showInCv: false, icon: 'sparkles' },
];

export function getSkillCategoryMeta(locale: Locale): Array<{
  key: SkillCategoryKey;
  title: string;
  cvTitle: string;
  showInCv: boolean;
  icon: IconName;
}> {
  const { skillCategories } = getDictionary(locale);
  return BASE_CATEGORIES.map((base) => ({
    ...base,
    title: skillCategories[base.key].title,
    cvTitle: skillCategories[base.key].cvTitle,
  }));
}
