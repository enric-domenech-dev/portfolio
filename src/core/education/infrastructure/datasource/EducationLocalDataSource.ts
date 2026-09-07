import cvEs from '../../../../data/cv.es.json';
import cvCa from '../../../../data/cv.ca.json';
import cvEn from '../../../../data/cv.en.json';
import type { Locale } from '@/core/shared/i18n/locale';
import type { EducationDto } from '../dto/EducationDto';

const CV_BY_LOCALE: Record<Locale, { education: unknown }> = {
  es: cvEs,
  ca: cvCa,
  en: cvEn,
};

export class EducationLocalDataSource {
  getAll(locale: Locale): EducationDto[] {
    return CV_BY_LOCALE[locale].education as EducationDto[];
  }
}
