import type { IconName } from '@/core/shared/constants/icons';

export type SkillCategoryKey =
  | 'mobile'
  | 'backend'
  | 'frontend'
  | 'databases'
  | 'gamedev'
  | 'tools'
  | 'other';

export interface SkillCategory {
  key: SkillCategoryKey;
  title: string;
  cvTitle: string;
  showInCv: boolean;
  icon: IconName;
  items: string[];
}
