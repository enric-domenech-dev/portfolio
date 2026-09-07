import type { Experience } from '../../domain/models/Experience';
import type { ExperienceRepository } from '../../domain/repository/ExperienceRepository';
import type { Locale } from '@/core/shared/i18n/locale';
import { ExperienceLocalDataSource } from '../datasource/ExperienceLocalDataSource';
import { ExperienceDtoMapper } from '../mapper/ExperienceDtoMapper';

export class ExperienceRepositoryImpl implements ExperienceRepository {
  constructor(private readonly dataSource: ExperienceLocalDataSource) {}

  getAll(locale: Locale): Experience[] {
    return ExperienceDtoMapper.toDomainList(this.dataSource.getAll(locale));
  }

  getById(index: number, locale: Locale): Experience | undefined {
    return this.getAll(locale)[index];
  }
}
