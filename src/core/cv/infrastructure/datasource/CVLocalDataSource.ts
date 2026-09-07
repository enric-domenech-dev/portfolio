import cvEs from '../../../../data/cv.es.json';
import cvCa from '../../../../data/cv.ca.json';
import cvEn from '../../../../data/cv.en.json';
import type { Locale } from '@/core/shared/i18n/locale';
import type { LanguageItem, PersonalInfo } from '../../domain/models/CVData';

const CV_BY_LOCALE: Record<Locale, { personal: PersonalInfo; languages: LanguageItem[] }> = {
  es: cvEs,
  ca: cvCa,
  en: cvEn,
};

export class CVLocalDataSource {
  getPersonal(locale: Locale): PersonalInfo {
    return CV_BY_LOCALE[locale].personal;
  }

  getLanguages(locale: Locale): LanguageItem[] {
    return CV_BY_LOCALE[locale].languages;
  }
}
