import type { Education } from '../models/Education';

export interface EducationRepository {
  getAll(): Education[];
}
