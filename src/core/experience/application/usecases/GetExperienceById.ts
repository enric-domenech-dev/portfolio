import type { Experience } from '../../domain/models/Experience';
import type { ExperienceRepository } from '../../domain/repository/ExperienceRepository';

export class GetExperienceById {
  constructor(private readonly repository: ExperienceRepository) {}

  execute(index: number): Experience | undefined {
    return this.repository.getById(index);
  }
}
