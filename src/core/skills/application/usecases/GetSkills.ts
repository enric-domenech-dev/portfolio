import type { SkillCategory } from '../../domain/models/Skill';
import type { SkillsRepository } from '../../domain/repository/SkillsRepository';

export class GetSkills {
  constructor(private readonly repository: SkillsRepository) {}

  execute(): SkillCategory[] {
    return this.repository.getAll();
  }
}
