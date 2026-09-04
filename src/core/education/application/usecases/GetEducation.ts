import type { Education } from '../../domain/models/Education';
import type { EducationRepository } from '../../domain/repository/EducationRepository';

export class GetEducation {
  constructor(private readonly repository: EducationRepository) {}

  execute(): Education[] {
    return this.repository.getAll();
  }
}
