import type { CVData } from '../models/CVData';

export interface CVRepository {
  getAll(): CVData;
}
