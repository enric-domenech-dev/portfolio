import cvEs from '../../../../data/cv.es.json';
import cvCa from '../../../../data/cv.ca.json';
import cvEn from '../../../../data/cv.en.json';
import type { Locale } from '@/core/shared/i18n/locale';
import type { ExperienceDto } from '../dto/ExperienceDto';

const CV_BY_LOCALE: Record<Locale, { experience: ExperienceDto[] }> = {
  es: cvEs,
  ca: cvCa,
  en: cvEn,
};

export class ExperienceLocalDataSource {
  getAll(locale: Locale): ExperienceDto[] {
    return CV_BY_LOCALE[locale].experience;
  }
}
