import type { Locale } from '@/core/shared/i18n/locale';
import { getDictionary } from '@/core/shared/i18n/dictionary';
import type { EducationLevel } from './domain/models/Education';

export function getEducationSection(locale: Locale) {
  return getDictionary(locale).education;
}

export function getEducationLevelTitle(locale: Locale, level: EducationLevel): string {
  const { education } = getDictionary(locale);
  return level === 'superior' ? education.superior : education.universitari;
}
