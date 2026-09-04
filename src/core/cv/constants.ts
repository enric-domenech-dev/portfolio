export const CV_LABELS = {
  pageTitle: 'CV - Enric Domènech',
  eyebrow: 'Curriculum Vitae',
  downloadPdf: 'Descargar PDF',
  print: 'Imprimir',
  educationTitle: 'Formación Académica',
  experienceTitle: 'Experiencia Profesional',
  skillsTitle: 'Competencias',
  languagesTitle: 'Idiomas',
  pdfFileName: 'Enric_Domenech_CV.pdf',
} as const;

export const PDF_EXPORT_OPTIONS = {
  margin: 10,
  filename: CV_LABELS.pdfFileName,
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
} as const;
