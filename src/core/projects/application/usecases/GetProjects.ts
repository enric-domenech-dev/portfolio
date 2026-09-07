import type { Project } from '../../domain/models/Project';
import type { ProjectsRepository } from '../../domain/repository/ProjectsRepository';
import type { Locale } from '@/core/shared/i18n/locale';

export class GetProjects {
  constructor(private readonly repository: ProjectsRepository) {}

  execute(locale: Locale): Project[] {
    return this.repository.getAll(locale);
  }
}
