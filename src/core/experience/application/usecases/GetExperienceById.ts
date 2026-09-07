import type { Experience } from '../../domain/models/Experience';
import type { ExperienceRepository } from '../../domain/repository/ExperienceRepository';
import type { Locale } from '@/core/shared/i18n/locale';

export class GetExperienceById {
  constructor(private readonly repository: ExperienceRepository) {}

  execute(index: number, locale: Locale): Experience | undefined {
    return this.repository.getById(index, locale);
  }
}
