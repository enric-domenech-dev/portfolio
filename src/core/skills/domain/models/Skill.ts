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
  items: string[];
}
