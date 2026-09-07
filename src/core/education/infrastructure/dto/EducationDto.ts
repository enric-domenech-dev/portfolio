export interface EducationDto {
  degree: string;
  institution: string;
  year: string;
  status?: string;
  level: 'superior' | 'universitari';
}
