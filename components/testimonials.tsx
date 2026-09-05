"use client"

import { useEffect, useState } from "react"
import { supabaseAPI, Testimonial } from "@/lib/supabase-api"
import { useUser } from "@/contexts/UserContext"
import { Send, Star } from "lucide-react"

function Stars({ value = 0 }: { value?: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map((i) => (
        <Star key={i} className={`w-4 h-4 ${i <= (value || 0) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
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
      setError(e?.message || "Failed to load testimonials")
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

  return (
    <section className="py-12 sm:py-16 px-4 pattern-overlay-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="h2 text-[#5a2600] text-2xl sm:text-3xl m-0" style={{ fontFamily: "Noto Serif", fontWeight: 900 }}>
            What Our Students Say
          </h2>
          <p className="text-sm sm:text-base text-[#8b4513]">Real feedback from our learners</p>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.id} className="rounded-2xl border border-yellow-200 bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
              <div className="flex items-center justify-between">
                <div className="text-[#5a2600] font-bold mb-2" style={{ fontFamily: 'Noto Serif' }}>{t.name}</div>
                <Stars value={t.rating ?? 0} />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{t.content}</p>
              <div className="text-xs text-gray-500 mt-2">{new Date(t.created_at).toLocaleDateString()}</div>
            </div>
          ))}
          {!items.length && !loading && (
            <div className="text-center col-span-full text-gray-500">No testimonials yet.</div>
          )}
        </div>

        {/* Add form for logged-in users */}
        {user?.isLoggedIn && (
          <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
            <div className="text-[#5a2600] font-bold mb-3" style={{ fontFamily: 'Noto Serif' }}>
              Share your experience
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-gray-600">Your rating:</span>
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
                    <Star className={`w-5 h-5 ${i <= (hover ?? rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                  </button>
                ))}
              </div>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your feedback..."
              className="w-full min-h-[100px] p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
            <button
              type="submit"
              disabled={loading || !content.trim()}
              className="mt-3 inline-flex items-center gap-2 bg-[#ffb300] hover:bg-[#ffb300]/90 text-white font-bold py-2 px-4 rounded-full border border-yellow-500"
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
