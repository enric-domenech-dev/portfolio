import { GetEducation } from '../education/application/usecases/GetEducation';
import { EducationLocalDataSource } from '../education/infrastructure/datasource/EducationLocalDataSource';
import { EducationRepositoryImpl } from '../education/infrastructure/repository/EducationRepositoryImpl';
import { GetExperienceById } from '../experience/application/usecases/GetExperienceById';
import { GetExperiences } from '../experience/application/usecases/GetExperiences';
import { ExperienceLocalDataSource } from '../experience/infrastructure/datasource/ExperienceLocalDataSource';
import { ExperienceRepositoryImpl } from '../experience/infrastructure/repository/ExperienceRepositoryImpl';
import { GetSkills } from '../skills/application/usecases/GetSkills';
import { SkillsLocalDataSource } from '../skills/infrastructure/datasource/SkillsLocalDataSource';
import { SkillsRepositoryImpl } from '../skills/infrastructure/repository/SkillsRepositoryImpl';
import { GetCVData } from '../cv/application/usecases/GetCVData';
import { CVLocalDataSource } from '../cv/infrastructure/datasource/CVLocalDataSource';
import { CVRepositoryImpl } from '../cv/infrastructure/repository/CVRepositoryImpl';
import { GetProjects } from '../projects/application/usecases/GetProjects';
import { ProjectsLocalDataSource } from '../projects/infrastructure/datasource/ProjectsLocalDataSource';
import { ProjectsRepositoryImpl } from '../projects/infrastructure/repository/ProjectsRepositoryImpl';

class Container {
  private readonly experienceRepository = new ExperienceRepositoryImpl(new ExperienceLocalDataSource());
  private readonly educationRepository = new EducationRepositoryImpl(new EducationLocalDataSource());
  private readonly skillsRepository = new SkillsRepositoryImpl(new SkillsLocalDataSource());
  private readonly projectsRepository = new ProjectsRepositoryImpl(new ProjectsLocalDataSource());
  private readonly cvRepository = new CVRepositoryImpl(
    new CVLocalDataSource(),
    this.experienceRepository,
    this.educationRepository,
    this.skillsRepository
  );

  readonly getExperiences = new GetExperiences(this.experienceRepository);
  readonly getExperienceById = new GetExperienceById(this.experienceRepository);
  readonly getEducation = new GetEducation(this.educationRepository);
  readonly getSkills = new GetSkills(this.skillsRepository);
  readonly getProjects = new GetProjects(this.projectsRepository);
  readonly getCVData = new GetCVData(this.cvRepository);
}

export const container = new Container();
