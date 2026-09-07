import type { IconName } from '@/core/shared/constants/icons';

export type SkillCategoryKey =
  | 'mobile'
  | 'backend'
  | 'frontend'
  | 'databases'
  | 'gamedev'
  | 'tools'
  | 'other'
  | 'soft';

export type SkillGroup = 'dev' | 'hard' | 'soft';

export interface SkillCategory {
  key: SkillCategoryKey;
  group: SkillGroup;
  showInCv: boolean;
  icon: IconName;
  items: string[];
}
