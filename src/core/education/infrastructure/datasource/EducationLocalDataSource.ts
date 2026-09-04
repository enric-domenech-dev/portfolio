import cvData from '../../../../data/cv.json';
import type { EducationDto } from '../dto/EducationDto';

export class EducationLocalDataSource {
  getAll(): EducationDto[] {
    return cvData.education;
  }
}
