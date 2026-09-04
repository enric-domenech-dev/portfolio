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
    { href: localizedPath('/proyectos', locale), title: quickAccess.proyectos.title, description: quickAccess.proyectos.description, icon: 'code' },
    { href: localizedPath('/skills', locale), title: quickAccess.skills.title, description: quickAccess.skills.description, icon: 'sparkles' },
    { href: localizedPath('/cv', locale), title: quickAccess.cv.title, description: quickAccess.cv.description, icon: 'download' },
    { href: localizedPath('/educacion', locale), title: quickAccess.educacion.title, description: quickAccess.educacion.description, icon: 'graduation-cap' },
  ];
}
