import type { SkillCategory } from '../models/Skill';

export interface SkillsRepository {
  getAll(): SkillCategory[];
}
