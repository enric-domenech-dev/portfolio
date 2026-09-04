import type { CVData } from '../../domain/models/CVData';
import type { CVRepository } from '../../domain/repository/CVRepository';

export class GetCVData {
  constructor(private readonly repository: CVRepository) {}

  execute(): CVData {
    return this.repository.getAll();
  }
}
