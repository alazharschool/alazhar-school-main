import type React from 'react'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_Arabic, Noto_Serif } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingChatButton from '@/components/floating-chat-button'
import { UserProvider } from '@/contexts/UserContext'
import ErrorBoundary from '@/components/error-boundary'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@/components/google-analytics'
import { JsonLd, organizationSchema, websiteSchema } from '@/lib/structured-data'
import { SITE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/seo'

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '700', '900'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-noto-sans-arabic',
})

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'serif'],
  variable: '--font-noto-serif',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e8b007',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Learn the Holy Quran from Al-Azhar scholars anywhere in the world. Online Quran memorization, Arabic language, and Islamic studies courses.',
  keywords: [
    'Quran',
    'Arabic',
    'Islamic Studies',
    'Online Learning',
    'Al-Azhar',
    'Quran Memorization',
    'Islamic Education',
  ],
  authors: [{ name: 'Al-Azhar School' }],
  creator: 'Al-Azhar School',
  publisher: 'Al-Azhar School',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Al-Azhar School - Learn Quran & Arabic Online',
    description:
      'Learn the Holy Quran from Al-Azhar scholars anywhere in the world. Online Quran memorization, Arabic language, and Islamic studies courses.',
    siteName: 'Al-Azhar School',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Al-Azhar School - Islamic Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al-Azhar School - Learn Quran & Arabic Online',
    description:
      'Learn the Holy Quran from Al-Azhar scholars anywhere in the world.',
    images: [DEFAULT_OG_IMAGE],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: 'Education',
  classification: 'Islamic Education',
  referrer: 'origin-when-cross-origin',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Al-Azhar School',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${notoSansArabic.variable} ${notoSerif.variable} ${notoSansArabic.className}`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:text-[#5a2600]"
        >
          Skip to main content
        </a>
        <ErrorBoundary>
          <UserProvider>
            <Navigation />
            <main id="main-content">{children}</main>
            <Footer />
            <FloatingChatButton />
          </UserProvider>
        </ErrorBoundary>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  )
}
