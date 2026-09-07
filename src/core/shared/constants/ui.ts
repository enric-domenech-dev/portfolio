import type { Locale } from '../i18n/locale';
import { getDictionary } from '../i18n/dictionary';

export function getSiteDefaults(locale: Locale) {
  const { site } = getDictionary(locale);
  return { lang: locale, title: site.title, description: site.description };
}
