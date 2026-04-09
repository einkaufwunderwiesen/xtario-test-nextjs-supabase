export function formatDate(date: Date): string {
  return date.toLocaleDateString('de-DE');
}

export function validateEmail(email: string): boolean {
  return email.includes('@');
}
