import type { SkillCategory } from '../../domain/models/Skill';
import type { SkillsRepository } from '../../domain/repository/SkillsRepository';
import { SkillsLocalDataSource } from '../datasource/SkillsLocalDataSource';
import { SkillDtoMapper } from '../mapper/SkillDtoMapper';

export class SkillsRepositoryImpl implements SkillsRepository {
  constructor(private readonly dataSource: SkillsLocalDataSource) {}

  getAll(): SkillCategory[] {
    return SkillDtoMapper.toDomainList(this.dataSource.getAll());
  }
}
