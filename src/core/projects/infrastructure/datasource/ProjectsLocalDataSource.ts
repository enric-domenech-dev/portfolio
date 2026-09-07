import projectsEs from '../../../../data/projects.es.json';
import projectsCa from '../../../../data/projects.ca.json';
import projectsEn from '../../../../data/projects.en.json';
import type { Locale } from '@/core/shared/i18n/locale';
import type { ProjectDto } from '../dto/ProjectDto';

const PROJECTS_BY_LOCALE: Record<Locale, ProjectDto[]> = {
  es: projectsEs as ProjectDto[],
  ca: projectsCa as ProjectDto[],
  en: projectsEn as ProjectDto[],
};

export class ProjectsLocalDataSource {
  getAll(locale: Locale): ProjectDto[] {
    return PROJECTS_BY_LOCALE[locale];
  }
}
