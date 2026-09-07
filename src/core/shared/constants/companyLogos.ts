const COMPANY_LOGOS: Record<string, string> = {
  'APP2U': '/logos/app2u.png',
  'STRATEGYING': '/logos/strategying.png',
  'SOPRA STERIA': '/logos/sopra-steria.png',
};

export function getCompanyLogo(company: string): string | undefined {
  return COMPANY_LOGOS[company.trim().toUpperCase()];
}
