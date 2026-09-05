import type { Metadata } from 'next'
import { buildPageMetadata, SITE_NAME } from '@/lib/seo'
import HomePageContent from './home-content'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: SITE_NAME,
    description:
      'Learn the Holy Quran from Al-Azhar scholars anywhere in the world. Online Quran memorization, Arabic language, and Islamic studies courses.',
    path: '/',
  }),
  title: { absolute: SITE_NAME },
}

export default function HomePage() {
  return <HomePageContent />
}
