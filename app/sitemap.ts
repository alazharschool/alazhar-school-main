import type { MetadataRoute } from 'next'
import { articlesData } from '@/lib/articles'
import { SITE_URL } from '@/lib/seo'

const staticRoutes: {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/articles', priority: 0.8, changeFrequency: 'weekly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  )

  const articleEntries: MetadataRoute.Sitemap = Object.values(articlesData).map(
    (article) => ({
      url: `${SITE_URL}/blog/articles/${article.id}`,
      lastModified: new Date(article.publishDate),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  )

  return [...staticEntries, ...articleEntries]
}
