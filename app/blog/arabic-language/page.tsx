import { buildPageMetadata } from '@/lib/seo'
import ArabicLanguagePageContent from './arabic-language-content'

export const metadata = buildPageMetadata({
  title: 'Arabic Language Learning',
  description:
    'Learn Arabic language online with certified Al-Azhar teachers. From beginner to advanced levels with flexible scheduling.',
  path: '/blog/arabic-language',
})

export default function ArabicLanguagePage() {
  return <ArabicLanguagePageContent />
}
