import { SITE_URL } from '@/lib/seo'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Al-Azhar School',
    description:
      'Learn the Holy Quran from Al-Azhar scholars anywhere in the world. Online Quran memorization, Arabic language, and Islamic studies courses.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44 (0) 20 1234 5678',
      contactType: 'customer service',
      email: 'al.azhar.school.london@gmail.com',
    },
    sameAs: [
      'https://facebook.com/alazharschool',
      'https://twitter.com/alazharschool',
      'https://instagram.com/alazharschool',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Islamic Education Courses',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Quran Memorization',
            description:
              'Learn to memorize the Holy Quran with certified Al-Azhar scholars',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Arabic Language',
            description: 'Learn Arabic language from beginner to advanced levels',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Islamic Studies',
            description: 'Comprehensive Islamic studies and religious education',
          },
        },
      ],
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Al-Azhar School',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog/articles?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function courseSchema(course: {
  name: string
  description: string
  educationalLevel?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Al-Azhar School',
      url: SITE_URL,
    },
    courseMode: 'online',
    educationalLevel: course.educationalLevel ?? 'beginner',
    inLanguage: ['en', 'ar'],
  }
}

export function articleSchema(article: {
  title: string
  description: string
  image: string
  publishedAt: string
  updatedAt?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image.startsWith('http')
      ? article.image
      : `${SITE_URL}${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Al-Azhar School',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Al-Azhar School',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }
}

type JsonLdData = Record<string, unknown> | Record<string, unknown>[]

export function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
