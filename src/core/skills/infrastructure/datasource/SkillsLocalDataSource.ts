import cvData from '../../../../data/cv.json';
import type { SkillsDto } from '../dto/SkillDto';

export class SkillsLocalDataSource {
  getAll(): SkillsDto {
    return cvData.skills;
  }
}
