import type { CVData } from '../../domain/models/CVData';
import type { CVRepository } from '../../domain/repository/CVRepository';
import type { Locale } from '@/core/shared/i18n/locale';

export class GetCVData {
  constructor(private readonly repository: CVRepository) {}

  execute(locale: Locale): CVData {
    return this.repository.getAll(locale);
  }
}
