import type { Metadata } from 'next'

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.startsWith('http')
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://alazharschool.com'

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Al-Azhar School'

export const LOGO_PATH = '/logo/image.png'

export const DEFAULT_OG_IMAGE = '/og-image.jpg'

export function absoluteUrl(path = ''): string {
  return new URL(path, SITE_URL).toString()
}

type PageMetaInput = {
  title: string
  description: string
  path: string
  ogImage?: string
  noIndex?: boolean
  type?: 'website' | 'article'
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  type = 'website',
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path)
  const fullTitle = `${title} | ${SITE_NAME}`

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}

export const privatePageMetadata = buildPageMetadata({
  title: 'Private',
  description: 'Private area',
  path: '/',
  noIndex: true,
})
