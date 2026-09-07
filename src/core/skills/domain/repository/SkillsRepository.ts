import type { SkillCategory } from '../models/Skill';
import type { Locale } from '@/core/shared/i18n/locale';

export interface SkillsRepository {
  getAll(locale: Locale): SkillCategory[];
}
