import type { CVData } from '../models/CVData';
import type { Locale } from '@/core/shared/i18n/locale';

export interface CVRepository {
  getAll(locale: Locale): CVData;
}
