import type { Education } from '../../domain/models/Education';
import type { EducationRepository } from '../../domain/repository/EducationRepository';
import type { Locale } from '@/core/shared/i18n/locale';

export class GetEducation {
  constructor(private readonly repository: EducationRepository) {}

  execute(locale: Locale): Education[] {
    return this.repository.getAll(locale);
  }
}
