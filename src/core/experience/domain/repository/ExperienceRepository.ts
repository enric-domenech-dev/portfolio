import type { Experience } from '../models/Experience';
import type { Locale } from '@/core/shared/i18n/locale';

export interface ExperienceRepository {
  getAll(locale: Locale): Experience[];
  getById(index: number, locale: Locale): Experience | undefined;
}
