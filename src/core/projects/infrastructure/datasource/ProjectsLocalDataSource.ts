import projectsData from '../../../../data/projects.json';
import type { ProjectDto } from '../dto/ProjectDto';

export class ProjectsLocalDataSource {
  getAll(): ProjectDto[] {
    return projectsData as ProjectDto[];
  }
}
