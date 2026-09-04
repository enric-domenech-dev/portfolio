import type { Locale } from '@/core/shared/i18n/locale';
import { getDictionary } from '@/core/shared/i18n/dictionary';

export function getHeroLabels(locale: Locale) {
  return getDictionary(locale).hero;
}

export const AVATAR_SRC = '/profile.jpg';
