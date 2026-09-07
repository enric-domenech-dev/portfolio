import type { IconName } from '@/core/shared/constants/icons';
import type { Locale } from '@/core/shared/i18n/locale';
import { getDictionary } from '@/core/shared/i18n/dictionary';
import type { SkillCategoryKey, SkillGroup } from './domain/models/Skill';

export function getSkillsSection(locale: Locale) {
  return getDictionary(locale).skillsSection;
}

export const BASE_CATEGORIES: Array<{ key: SkillCategoryKey; group: SkillGroup; showInCv: boolean; icon: IconName }> = [
  { key: 'mobile', group: 'dev', showInCv: true, icon: 'smartphone' },
  { key: 'backend', group: 'dev', showInCv: true, icon: 'server' },
  { key: 'frontend', group: 'dev', showInCv: true, icon: 'monitor' },
  { key: 'databases', group: 'dev', showInCv: true, icon: 'database' },
  { key: 'gamedev', group: 'dev', showInCv: false, icon: 'gamepad' },
  { key: 'tools', group: 'dev', showInCv: false, icon: 'wrench' },
  { key: 'other', group: 'hard', showInCv: false, icon: 'sparkles' },
  { key: 'soft', group: 'soft', showInCv: false, icon: 'heart' },
];

export const SKILL_GROUPS: SkillGroup[] = ['dev', 'hard', 'soft'];

export function getSkillCategoryMeta(locale: Locale): Array<{
  key: SkillCategoryKey;
  group: SkillGroup;
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
