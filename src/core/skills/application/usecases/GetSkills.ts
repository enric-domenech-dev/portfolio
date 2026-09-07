import type { SkillCategory } from '../../domain/models/Skill';
import type { SkillsRepository } from '../../domain/repository/SkillsRepository';
import type { Locale } from '@/core/shared/i18n/locale';

export class GetSkills {
  constructor(private readonly repository: SkillsRepository) {}

  execute(locale: Locale): SkillCategory[] {
    return this.repository.getAll(locale);
  }
}
