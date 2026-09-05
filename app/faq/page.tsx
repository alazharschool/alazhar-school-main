import { buildPageMetadata } from '@/lib/seo'
import { faqCategories } from '@/lib/faqs'
import { faqSchema, breadcrumbSchema, JsonLd } from '@/lib/structured-data'
import { PageBreadcrumbs } from '@/components/page-breadcrumbs'
import FAQPageContent from './faq-content'

export const metadata = buildPageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about online Quran classes, Arabic language courses, Islamic studies, pricing, and scheduling at Al-Azhar School.',
  path: '/faq',
})

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap((category) => category.questions)

  return (
    <>
      <JsonLd
        data={[
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'FAQ', url: '/faq' },
          ]),
        ]}
      />
      <PageBreadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
        ]}
      />
      <FAQPageContent />
    </>
  )
}
