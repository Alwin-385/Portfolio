/** Opens Gmail compose in-browser for @gmail.com; mailto for other providers */
export function getEmailHref(email: string): string {
  const address = email.trim();

  if (address.toLowerCase().endsWith("@gmail.com")) {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(address)}`;
  }

  return `mailto:${address}`;
}

export function isExternalEmailLink(href: string): boolean {
  return href.startsWith("http");
}
