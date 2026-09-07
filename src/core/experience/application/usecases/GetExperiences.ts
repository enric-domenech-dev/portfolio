import type { Experience } from '../../domain/models/Experience';
import type { ExperienceRepository } from '../../domain/repository/ExperienceRepository';
import type { Locale } from '@/core/shared/i18n/locale';

export class GetExperiences {
  constructor(private readonly repository: ExperienceRepository) {}

  execute(locale: Locale): Experience[] {
    return this.repository.getAll(locale);
  }
}
