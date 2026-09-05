import { buildPageMetadata } from '@/lib/seo'
import { breadcrumbSchema, JsonLd } from '@/lib/structured-data'
import { PageBreadcrumbs } from '@/components/page-breadcrumbs'
import ArticlesPageContent from './articles-content'

export const metadata = buildPageMetadata({
  title: 'Islamic Education Articles',
  description:
    'Read articles about Quran learning, Tajweed, Islamic education for children, and online Islamic studies from Al-Azhar School scholars.',
  path: '/blog/articles',
})

export default function ArticlesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Articles', url: '/blog/articles' },
        ])}
      />
      <PageBreadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Articles' },
        ]}
      />
      <ArticlesPageContent />
    </>
  )
}
