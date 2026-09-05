import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Al-Azhar School. Learn how we protect your personal information and data privacy.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-16 px-4" style={{ backgroundColor: '#0d1f19' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#d4af37]" style={{ fontFamily: 'var(--font-amiri), Amiri, serif' }}>
          Privacy Policy
        </h1>
        <div className="space-y-6 text-[#f8fafc]" style={{ fontFamily: 'var(--font-cairo), Cairo, sans-serif' }}>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#d4af37]">Information We Collect</h2>
            <p className="leading-relaxed">
              Al-Azhar School collects information you provide directly, such as when you create an account, enroll in courses, or contact us. This may include your name,.email address, phone number, and payment information.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#d4af37]">How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use your information to provide educational services, process payments, communicate with you about your courses, and improve our services. We do not sell your personal information to third parties.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#d4af37]">Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#d4af37]">Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at al.azhar.school.london@gmail.com
            </p>
          </section>
          <p className="text-sm text-gray-400 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}
