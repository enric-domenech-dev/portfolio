import type { Experience } from '../models/Experience';

export interface ExperienceRepository {
  getAll(): Experience[];
  getById(index: number): Experience | undefined;
}
