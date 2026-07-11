/**
 * Prefix internal paths with Astro base (e.g. /portfolio).
 * Directory routes get a trailing slash; files (pdf, svg, …) do not.
 * External URLs and hashes are left unchanged.
 */
export function withBase(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }

  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  const isFile = /\.[a-zA-Z0-9]+$/.test(clean);

  if (clean === '/') {
    return base ? `${base}/` : '/';
  }

  let result = base ? `${base}${clean}` : clean;
  if (!isFile && !result.endsWith('/')) {
    result = `${result}/`;
  }
  return result;
}
