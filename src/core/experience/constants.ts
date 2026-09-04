import type { Locale } from '@/core/shared/i18n/locale';
import { getDictionary } from '@/core/shared/i18n/dictionary';

export function getExperienceSection(locale: Locale) {
  return getDictionary(locale).experience;
}
