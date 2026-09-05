import { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms of Service',
  description: 'Terms of Service for Al-Azhar School. Read our terms and conditions for using our online Quran and Arabic education platform.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16 px-4" style={{ backgroundColor: '#0d1f19' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#d4af37]" style={{ fontFamily: 'var(--font-amiri), Amiri, serif' }}>
          Terms of Service
        </h1>
        <div className="space-y-6 text-[#f8fafc]" style={{ fontFamily: 'var(--font-cairo), Cairo, sans-serif' }}>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#d4af37]">Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using Al-Azhar School's services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#d4af37]">Educational Services</h2>
            <p className="leading-relaxed">
              Al-Azhar School provides online Quran, Arabic language, and Islamic studies education. We reserve the right to modify, suspend, or discontinue any service at any time.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#d4af37]">User Responsibilities</h2>
            <p className="leading-relaxed">
              Students are expected to attend scheduled classes, complete assignments, and maintain respectful behavior towards teachers and fellow students.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#d4af37]">Payment Terms</h2>
            <p className="leading-relaxed">
              Payment for courses is due as specified at the time of enrollment. Refunds are handled according to our refund policy.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#d4af37]">Contact Us</h2>
            <p className="leading-relaxed">
              For questions about these Terms of Service, please contact us at al.azhar.school.london@gmail.com
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
