import type { Project } from '../models/Project';

export interface ProjectsRepository {
  getAll(): Project[];
}
