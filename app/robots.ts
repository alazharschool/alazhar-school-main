import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

const PRIVATE_PATHS = [
  '/admin',
  '/admin-login',
  '/admin-dashboard',
  '/admin-settings',
  '/dashboard',
  '/api/',
  '/login',
  '/register',
  '/settings',
  '/profile',
  '/schedule',
  '/materials',
  '/welcome-new-student',
]

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NODE_ENV === 'production'

  return {
    rules: isProd
      ? {
          userAgent: '*',
          allow: '/',
          disallow: PRIVATE_PATHS,
        }
      : {
          userAgent: '*',
          disallow: '/',
        },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
