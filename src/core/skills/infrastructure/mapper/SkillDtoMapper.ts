import type { SkillCategory } from '../../domain/models/Skill';
import { BASE_CATEGORIES } from '../../constants';
import type { SkillsDto } from '../dto/SkillDto';

export class SkillDtoMapper {
  static toDomainList(dto: SkillsDto): SkillCategory[] {
    return BASE_CATEGORIES.map((base) => ({
      ...base,
      items: dto[base.key],
    }));
  }
}
