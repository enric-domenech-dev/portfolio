import cvData from '../../../../data/cv.json';
import type { LanguageItem, PersonalInfo } from '../../domain/models/CVData';

export class CVLocalDataSource {
  getPersonal(): PersonalInfo {
    return cvData.personal;
  }

  getLanguages(): LanguageItem[] {
    return cvData.languages;
  }
}
