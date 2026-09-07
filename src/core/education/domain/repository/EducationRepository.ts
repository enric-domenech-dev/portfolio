import type { Education } from '../models/Education';
import type { Locale } from '@/core/shared/i18n/locale';

export interface EducationRepository {
  getAll(locale: Locale): Education[];
}
