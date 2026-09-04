import type { EducationRepository } from '../../../education/domain/repository/EducationRepository';
import type { ExperienceRepository } from '../../../experience/domain/repository/ExperienceRepository';
import type { SkillsRepository } from '../../../skills/domain/repository/SkillsRepository';
import type { CVData } from '../../domain/models/CVData';
import type { CVRepository } from '../../domain/repository/CVRepository';
import { CVLocalDataSource } from '../datasource/CVLocalDataSource';
import { CVDataMapper } from '../mapper/CVDataMapper';

export class CVRepositoryImpl implements CVRepository {
  constructor(
    private readonly dataSource: CVLocalDataSource,
    private readonly experienceRepository: ExperienceRepository,
    private readonly educationRepository: EducationRepository,
    private readonly skillsRepository: SkillsRepository
  ) {}

  getAll(): CVData {
    return CVDataMapper.toDomain(
      this.dataSource.getPersonal(),
      this.dataSource.getLanguages(),
      this.experienceRepository.getAll(),
      this.educationRepository.getAll(),
      this.skillsRepository.getAll()
    );
  }
}
