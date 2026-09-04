import type { Education } from '../../domain/models/Education';
import type { EducationDto } from '../dto/EducationDto';

export class EducationDtoMapper {
  static toDomain(dto: EducationDto): Education {
    return {
      degree: dto.degree,
      institution: dto.institution,
      year: dto.year,
      status: dto.status,
    };
  }

  static toDomainList(dtos: EducationDto[]): Education[] {
    return dtos.map(EducationDtoMapper.toDomain);
  }
}
