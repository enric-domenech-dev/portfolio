import type { Project } from '../../domain/models/Project';
import type { ProjectsRepository } from '../../domain/repository/ProjectsRepository';

export class GetProjects {
  constructor(private readonly repository: ProjectsRepository) {}

  execute(): Project[] {
    return this.repository.getAll();
  }
}
