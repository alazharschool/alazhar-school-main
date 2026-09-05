import { buildPageMetadata } from '@/lib/seo'
import { breadcrumbSchema, JsonLd } from '@/lib/structured-data'
import { PageBreadcrumbs } from '@/components/page-breadcrumbs'
import AboutPageContent from './about-content'

export const metadata = buildPageMetadata({
  title: 'About Al-Azhar School',
  description:
    'Meet our certified Al-Azhar scholars and learn about our mission to teach Quran, Arabic, and Islamic studies online worldwide.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ])}
      />
      <PageBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <AboutPageContent />
    </>
  )
}
