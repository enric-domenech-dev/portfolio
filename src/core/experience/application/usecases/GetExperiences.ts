import type { Experience } from '../../domain/models/Experience';
import type { ExperienceRepository } from '../../domain/repository/ExperienceRepository';

export class GetExperiences {
  constructor(private readonly repository: ExperienceRepository) {}

  execute(): Experience[] {
    return this.repository.getAll();
  }
}
