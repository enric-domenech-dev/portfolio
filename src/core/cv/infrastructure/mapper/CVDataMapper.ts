import type { Education } from '../../../education/domain/models/Education';
import type { Experience } from '../../../experience/domain/models/Experience';
import type { SkillCategory } from '../../../skills/domain/models/Skill';
import type { CVData, LanguageItem, PersonalInfo } from '../../domain/models/CVData';

export class CVDataMapper {
  static toDomain(
    personal: PersonalInfo,
    languages: LanguageItem[],
    experience: Experience[],
    education: Education[],
    skills: SkillCategory[]
  ): CVData {
    return { personal, languages, experience, education, skills };
  }
}
