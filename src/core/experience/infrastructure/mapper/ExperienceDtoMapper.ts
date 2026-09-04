import type { Experience } from '../../domain/models/Experience';
import type { ExperienceDto } from '../dto/ExperienceDto';

export class ExperienceDtoMapper {
  static toDomain(dto: ExperienceDto): Experience {
    return {
      company: dto.company,
      position: dto.position,
      duration: dto.duration,
      description: dto.description,
      startDate: dto.startDate,
    };
  }

  static toDomainList(dtos: ExperienceDto[]): Experience[] {
    return dtos.map(ExperienceDtoMapper.toDomain);
  }
}
