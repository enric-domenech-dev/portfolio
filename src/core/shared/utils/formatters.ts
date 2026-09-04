export function joinList(items: string[], separator = ', '): string {
  return items.join(separator);
}

export function mailtoHref(email: string): string {
  return `mailto:${email}`;
}

export function telHref(phone: string): string {
  return `tel:${phone}`;
}

export function staggerDelay(index: number, stepMs: number): string {
  return `animation-delay:${index * stepMs}ms`;
}
