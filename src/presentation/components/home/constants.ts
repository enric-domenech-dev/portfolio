import type { Locale } from '@/core/shared/i18n/locale';
import { localizedPath } from '@/core/shared/i18n/locale';
import { getDictionary } from '@/core/shared/i18n/dictionary';
import type { IconName } from '@/core/shared/constants/icons';

interface QuickAccessCard {
  href: string;
  title: string;
  description: string;
  icon: IconName;
}

export function getQuickAccessCards(locale: Locale): QuickAccessCard[] {
  const { quickAccess } = getDictionary(locale);
  return [
    { href: localizedPath('/skills', locale), title: quickAccess.skills.title, description: quickAccess.skills.description, icon: 'sparkles' },
    { href: localizedPath('/contacto', locale), title: quickAccess.contacto.title, description: quickAccess.contacto.description, icon: 'mail' },
  ];
}
