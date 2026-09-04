import cvData from '../../../../data/cv.json';
import type { ExperienceDto } from '../dto/ExperienceDto';

export class ExperienceLocalDataSource {
  getAll(): ExperienceDto[] {
    return cvData.experience;
  }
}
