import { notFound } from 'next/navigation'
import { buildPageMetadata, absoluteUrl } from '@/lib/seo'
import { articlesData, getArticle } from '@/lib/articles'
import { articleSchema, breadcrumbSchema, JsonLd } from '@/lib/structured-data'
import { PageBreadcrumbs } from '@/components/page-breadcrumbs'
import ArticlePageContent from './article-content'

export function generateStaticParams() {
  return Object.keys(articlesData).map((id) => ({ id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = getArticle(id)
  if (!article) return {}

  return buildPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/articles/${id}`,
    ogImage: article.coverImage,
    type: 'article',
  })
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = getArticle(id)
  if (!article) notFound()

  const url = absoluteUrl(`/blog/articles/${id}`)

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: article.title,
            description: article.excerpt,
            image: article.coverImage,
            publishedAt: article.publishDate,
            url,
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Articles', url: '/blog/articles' },
            { name: article.title, url: `/blog/articles/${id}` },
          ]),
        ]}
      />
      <PageBreadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Articles', href: '/blog/articles' },
          { label: article.title },
        ]}
      />
      <ArticlePageContent article={article} />
    </>
  )
}
