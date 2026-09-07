import type { IconName } from '@/core/shared/constants/icons';
import type { Locale } from '@/core/shared/i18n/locale';
import { getDictionary } from '@/core/shared/i18n/dictionary';
import type { SkillCategoryKey, SkillGroup } from './domain/models/Skill';

export function getSkillsSection(locale: Locale) {
  return getDictionary(locale).skillsSection;
}

export const BASE_CATEGORIES: Array<{ key: SkillCategoryKey; group: SkillGroup; showInCv: boolean; icon: IconName }> = [
  { key: 'mobile', group: 'hard', showInCv: true, icon: 'smartphone' },
  { key: 'tools', group: 'hard', showInCv: false, icon: 'wrench' },
  { key: 'backend', group: 'hard', showInCv: true, icon: 'server' },
  { key: 'frontend', group: 'hard', showInCv: true, icon: 'monitor' },
  { key: 'databases', group: 'hard', showInCv: true, icon: 'database' },
  { key: 'gamedev', group: 'hard', showInCv: false, icon: 'gamepad' },
  { key: 'other', group: 'hard', showInCv: false, icon: 'sparkles' },
  { key: 'soft', group: 'soft', showInCv: false, icon: 'heart' },
];

export const SKILL_GROUPS: SkillGroup[] = ['hard', 'soft'];

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
