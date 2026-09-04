export interface LinkItem {
  href: string;
  label: string;
}

export interface ExternalLink extends LinkItem {
  external: true;
}
