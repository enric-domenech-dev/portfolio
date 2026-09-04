import type { Project } from '../../domain/models/Project';
import type { ProjectDto } from '../dto/ProjectDto';

export class ProjectDtoMapper {
  static toDomain(dto: ProjectDto): Project {
    return {
      title: dto.title,
      description: dto.description,
      stack: dto.stack,
      repoUrl: dto.repoUrl,
      demoUrl: dto.demoUrl,
    };
  }

  static toDomainList(dtos: ProjectDto[]): Project[] {
    return dtos.map(ProjectDtoMapper.toDomain);
  }
}
