import type { Experience } from '../../domain/models/Experience';
import type { ExperienceRepository } from '../../domain/repository/ExperienceRepository';
import { ExperienceLocalDataSource } from '../datasource/ExperienceLocalDataSource';
import { ExperienceDtoMapper } from '../mapper/ExperienceDtoMapper';

export class ExperienceRepositoryImpl implements ExperienceRepository {
  constructor(private readonly dataSource: ExperienceLocalDataSource) {}

  getAll(): Experience[] {
    return ExperienceDtoMapper.toDomainList(this.dataSource.getAll());
  }

  getById(index: number): Experience | undefined {
    return this.getAll()[index];
  }
}
