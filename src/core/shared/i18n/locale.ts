export type Locale = 'es' | 'ca' | 'en';

export const LOCALES: Locale[] = ['es', 'ca', 'en'];
export const DEFAULT_LOCALE: Locale = 'es';

export const LOCALE_LABELS: Record<Locale, string> = {
  es: 'Español',
  ca: 'Català',
  en: 'English',
};

/** Resolves Astro.currentLocale (string | undefined) to a known Locale, falling back to the default. */
export function resolveLocale(currentLocale: string | undefined): Locale {
  return LOCALES.includes(currentLocale as Locale) ? (currentLocale as Locale) : DEFAULT_LOCALE;
}

/**
 * Builds the locale-prefixed path for a canonical (default-locale) route.
 * `path` must be a canonical route starting with '/', e.g. '/', '/experiencia'.
 */
export function localizedPath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

/** Strips the current locale's prefix (if any) from a pathname, returning the canonical (default-locale) path. */
export function canonicalPath(pathname: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return pathname || '/';
  const prefix = `/${locale}`;
  if (pathname === prefix) return '/';
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  return pathname;
}
