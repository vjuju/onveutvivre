import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/appel/', '/nos-trois-plans/', '/agir/', '/actualites/', '/kits/', '/signataires/', '/mentions-legales/', '/confidentialite/'];
  return pages.map((p) => ({
    url: `${site.url}${p || '/'}`,
    lastModified: new Date(),
    changeFrequency: p === '' ? 'daily' : 'monthly',
    priority: p === '' ? 1 : 0.6,
  }));
}
