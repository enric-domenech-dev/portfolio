export type EducationLevel = 'superior' | 'universitari';

export interface Education {
  degree: string;
  institution: string;
  year: string;
  status?: string;
  level: EducationLevel;
}
