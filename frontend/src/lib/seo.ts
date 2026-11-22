export const SITE_URL = 'https://repukeel.com';

/**
 * Returns an absolute canonical URL with consistent https://repukeel.com origin,
 * apex root with trailing slash (https://repukeel.com/), and no trailing slashes for subpaths.
 */
export function canonicalFor(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/' || cleanPath === '') {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${cleanPath.replace(/\/+$/, '')}`;
}
