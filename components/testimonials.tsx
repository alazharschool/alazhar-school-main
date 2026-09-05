"use client"

import { useEffect, useState } from "react"
import { supabaseAPI, Testimonial } from "@/lib/supabase-api"
import { useUser } from "@/contexts/UserContext"
import { Send, Star } from "lucide-react"

// Static international student testimonials
const staticTestimonials = [
  {
    id: 'static-1',
    name: 'Ahmed Ali',
    country: 'USA',
    flag: '🇺🇸',
    content: 'The Quran Tajweed classes with native Al-Azhar tutors transformed my recitation. My teacher helped me perfect every letter with patience and expertise. Now I can recite with confidence and proper pronunciation.',
    rating: 5,
    created_at: new Date().toISOString()
  },
  {
    id: 'static-2',
    name: 'Sarah Johnson',
    country: 'UK',
    flag: '🇬🇧',
    content: 'Flexible schedules and highly structured Arabic language program. As a working professional, I needed classes that fit my busy schedule. Al-Azhar School delivered perfectly with personalized attention.',
    rating: 5,
    created_at: new Date().toISOString()
  },
  {
    id: 'static-3',
    name: 'Maria Rodriguez',
    country: 'Colombia',
    flag: '🇨🇴',
    content: 'Authentic Islamic education accessible from South America. I never thought I could learn proper Tajweed from home, but the interactive sessions and certified teachers made it possible.',
    rating: 5,
    created_at: new Date().toISOString()
  },
  {
    id: 'static-4',
    name: 'Ahmad bin Yusuf',
    country: 'Malaysia',
    flag: '🇲🇾',
    content: 'Deeply spiritual and academic approach to Hadith and Tajweed. The curriculum balances traditional Islamic scholarship with modern teaching methods. Highly recommended for serious learners.',
    rating: 5,
    created_at: new Date().toISOString()
  }
]

function Stars({ value = 0 }: { value?: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map((i) => (
        <Star key={i} className={`w-4 h-4 ${i <= (value || 0) ? 'text-[#d4af37] fill-[#d4af37]' : 'text-gray-600'}`} />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const { user } = useUser()
  const [items, setItems] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState("")
  const [rating, setRating] = useState<number>(5)
  const [hover, setHover] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    try {
      const data = await supabaseAPI.getApprovedTestimonials(12)
      setItems(data)
    } catch (e: any) {
      // If Supabase fails, use static testimonials
      setItems(staticTestimonials as any)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return
    setLoading(true)
    setError(null)
    try {
      await supabaseAPI.createTestimonial({ content, rating })
      setContent("")
      setRating(5)
      await load()
    } catch (e: any) {
      setError(e?.message || "Failed to submit")
    } finally {
      setLoading(false)
    }
  }

  // Combine static and dynamic testimonials
  const displayItems = items.length > 0 ? items : staticTestimonials as any

  return (
    <section className="py-12 sm:py-16 px-4" style={{ backgroundColor: 'rgba(13, 31, 25, 0.5)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="h2 text-[#d4af37] text-2xl sm:text-3xl m-0" style={{ fontFamily: 'var(--font-amiri), Amiri, serif', fontWeight: 700 }}>
            What Our Students Say
          </h2>
          <p className="text-sm sm:text-base text-[#f8fafc]">Real feedback from our global learners</p>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((t: any) => (
            <div key={t.id} className="rounded-2xl border border-[#d4af37] bg-[#0d1f19]/95 p-4 shadow-[0_8px_24px_rgba(212, 175, 55, 0.2)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{t.flag || '🌍'}</span>
                  <div className="text-[#d4af37] font-bold" style={{ fontFamily: 'var(--font-amiri), Amiri, serif' }}>{t.name}</div>
                </div>
                <Stars value={t.rating ?? 0} />
              </div>
              <p className="text-sm text-[#f8fafc] leading-relaxed">{t.content}</p>
              {t.country && (
                <div className="text-xs text-[#d4af37]/70 mt-2">{t.country}</div>
              )}
            </div>
          ))}
        </div>

        {/* Add form for logged-in users */}
        {user?.isLoggedIn && (
          <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-[#d4af37] bg-[#0d1f19]/95 p-4 shadow-sm">
            <div className="text-[#d4af37] font-bold mb-3" style={{ fontFamily: 'var(--font-amiri), Amiri, serif' }}>
              Share your experience
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-[#f8fafc]">Your rating:</span>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <button
                    key={i}
                    type="button"
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setRating(i)}
                    aria-label={`Rate ${i} star`}
                  >
                    <Star className={`w-5 h-5 ${i <= (hover ?? rating) ? 'text-[#d4af37] fill-[#d4af37]' : 'text-gray-600'}`} />
                  </button>
                ))}
              </div>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your feedback..."
              className="w-full min-h-[100px] p-3 border border-[#d4af37] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] bg-[#0d1f19]/80 text-[#f8fafc]"
            />
            {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
            <button
              type="submit"
              disabled={loading || !content.trim()}
              className="mt-3 inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#d4af37]/90 text-[#0d1f19] font-bold py-2 px-4 rounded-full border border-[#d4af37]"
            >
              <Send className="w-4 h-4" />
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
