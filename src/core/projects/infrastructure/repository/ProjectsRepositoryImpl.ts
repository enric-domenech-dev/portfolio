import type { Project } from '../../domain/models/Project';
import type { ProjectsRepository } from '../../domain/repository/ProjectsRepository';
import type { Locale } from '@/core/shared/i18n/locale';
import { ProjectsLocalDataSource } from '../datasource/ProjectsLocalDataSource';
import { ProjectDtoMapper } from '../mapper/ProjectDtoMapper';

export class ProjectsRepositoryImpl implements ProjectsRepository {
  constructor(private readonly dataSource: ProjectsLocalDataSource) {}

  getAll(locale: Locale): Project[] {
    return ProjectDtoMapper.toDomainList(this.dataSource.getAll(locale));
  }
}
