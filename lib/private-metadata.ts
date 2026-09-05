import type { Metadata } from 'next'
import { buildPageMetadata } from './seo'

export function privateMetadata(path: string, title = 'Private'): Metadata {
  return buildPageMetadata({
    title,
    description: 'Private area',
    path,
    noIndex: true,
  })
}
