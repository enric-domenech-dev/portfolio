import type { SkillCategory } from '../../domain/models/Skill';
import { SKILL_CATEGORY_META } from '../../constants';
import type { SkillsDto } from '../dto/SkillDto';

export class SkillDtoMapper {
  static toDomainList(dto: SkillsDto): SkillCategory[] {
    return SKILL_CATEGORY_META.map((meta) => ({
      ...meta,
      items: dto[meta.key],
    }));
  }
}
