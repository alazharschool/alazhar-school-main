import { buildPageMetadata } from '@/lib/seo'
import { breadcrumbSchema, JsonLd } from '@/lib/structured-data'
import { PageBreadcrumbs } from '@/components/page-breadcrumbs'
import ContactPageContent from './contact-content'

export const metadata = buildPageMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with Al-Azhar School. Book a free trial lesson, ask questions, or start your online Quran learning journey today.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ])}
      />
      <PageBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <ContactPageContent />
    </>
  )
}
