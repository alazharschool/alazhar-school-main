import { buildPageMetadata } from '@/lib/seo'
import { breadcrumbSchema, JsonLd } from '@/lib/structured-data'
import { PageBreadcrumbs } from '@/components/page-breadcrumbs'
import PricingPageContent from './pricing-content'

export const metadata = buildPageMetadata({
  title: 'Pricing & Plans',
  description:
    'Affordable online Quran, Arabic, and Islamic studies courses. Flexible payment plans and free trial lessons with certified Al-Azhar teachers.',
  path: '/pricing',
})

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Pricing', url: '/pricing' },
        ])}
      />
      <PageBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]} />
      <PricingPageContent />
    </>
  )
}
