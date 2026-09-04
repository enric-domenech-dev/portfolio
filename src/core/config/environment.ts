export const environment = {
  siteUrl: import.meta.env.SITE ?? 'https://enric-domenech.dev',
  isProduction: import.meta.env.PROD,
} as const;
