import type { Project } from '../models/Project';
import type { Locale } from '@/core/shared/i18n/locale';

export interface ProjectsRepository {
  getAll(locale: Locale): Project[];
}
