import type { Locale } from '@/core/shared/i18n/locale';
import { getDictionary } from '@/core/shared/i18n/dictionary';

export function getProjectsSection(locale: Locale) {
  return getDictionary(locale).projects;
}
