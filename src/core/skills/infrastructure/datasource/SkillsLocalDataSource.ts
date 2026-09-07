import cvEs from '../../../../data/cv.es.json';
import cvCa from '../../../../data/cv.ca.json';
import cvEn from '../../../../data/cv.en.json';
import type { Locale } from '@/core/shared/i18n/locale';
import type { SkillsDto } from '../dto/SkillDto';

const CV_BY_LOCALE: Record<Locale, { skills: SkillsDto }> = {
  es: cvEs,
  ca: cvCa,
  en: cvEn,
};

export class SkillsLocalDataSource {
  getAll(locale: Locale): SkillsDto {
    return CV_BY_LOCALE[locale].skills;
  }
}
