import type { ReactNode } from "react"
import { privateMetadata } from '@/lib/private-metadata'

export const metadata = privateMetadata('/admin')

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
