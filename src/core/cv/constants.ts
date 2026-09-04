import type { Locale } from '@/core/shared/i18n/locale';
import { getDictionary } from '@/core/shared/i18n/dictionary';

export function getCvLabels(locale: Locale) {
  return getDictionary(locale).cv;
}

export const PDF_EXPORT_OPTIONS = {
  margin: 10,
  filename: 'Enric_Domenech_CV.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
} as const;
