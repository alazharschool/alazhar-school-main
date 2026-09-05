import { buildPageMetadata } from '@/lib/seo'
import { courseSchema, breadcrumbSchema, JsonLd } from '@/lib/structured-data'
import { PageBreadcrumbs } from '@/components/page-breadcrumbs'
import ServicesPageContent from './services-content'

export const metadata = buildPageMetadata({
  title: 'Our Services',
  description:
    'Comprehensive online Islamic education: Quran memorization with Tajweed, Arabic language courses, and Islamic studies taught by certified Al-Azhar scholars.',
  path: '/services',
})

const courses = [
  {
    name: 'Quran Memorization',
    description:
      'Master the art of Quran memorization with our comprehensive Hifz program guided by certified Al-Azhar teachers.',
  },
  {
    name: 'Arabic Language',
    description:
      'Learn Arabic from basic letters to advanced fluency with our structured online curriculum.',
  },
  {
    name: 'Islamic Studies',
    description:
      'Comprehensive Islamic education covering Aqeedah, Fiqh, Seerah, and Tafseer.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          ...courses.map((course) => courseSchema(course)),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
          ]),
        ]}
      />
      <PageBreadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />
      <ServicesPageContent />
    </>
  )
}
