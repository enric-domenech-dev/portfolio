import type { Education } from '../../domain/models/Education';
import type { EducationRepository } from '../../domain/repository/EducationRepository';
import { EducationLocalDataSource } from '../datasource/EducationLocalDataSource';
import { EducationDtoMapper } from '../mapper/EducationDtoMapper';

export class EducationRepositoryImpl implements EducationRepository {
  constructor(private readonly dataSource: EducationLocalDataSource) {}

  getAll(): Education[] {
    return EducationDtoMapper.toDomainList(this.dataSource.getAll());
  }
}
