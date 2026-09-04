import type { LinkItem } from '../types/common';
import type { Locale } from '../i18n/locale';
import { localizedPath } from '../i18n/locale';
import { getDictionary } from '../i18n/dictionary';

export function getNavItems(locale: Locale): LinkItem[] {
  const { nav } = getDictionary(locale);
  return [
    { href: localizedPath('/', locale), label: nav.inicio },
    { href: localizedPath('/experiencia', locale), label: nav.experiencia },
    { href: localizedPath('/proyectos', locale), label: nav.proyectos },
    { href: localizedPath('/educacion', locale), label: nav.educacion },
    { href: localizedPath('/skills', locale), label: nav.skills },
    { href: localizedPath('/contacto', locale), label: nav.contacto },
    { href: localizedPath('/cv', locale), label: nav.cv },
  ];
}
