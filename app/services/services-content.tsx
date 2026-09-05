import { Card } from "@/components/ui/card"
import { BookOpen, Globe, Award, Users, Clock, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeInSection } from "@/components/fade-in-section"
import { AnimatedButton } from "@/components/animated-button"
import { HeroAnimatedBackground, CardAnimatedBackground } from "@/components/animated-background"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <FadeInSection>
            <HeroAnimatedBackground className="max-w-4xl mx-auto p-8 rounded-3xl">
              <div
                className="content-overlay card-3d-stroke"
                style={{ border: '3px solid #6d4c2b', boxShadow: '0 8px 32px 0 rgba(90,38,0,0.25), 0 1.5px 0 #fff inset', borderRadius: '2rem', background: '#fff' }}
              >
                <h1
                  className="text-lg md:text-xl font-bold text-gray-900 mb-6 text-center animated-underline"
                  style={{ fontFamily: 'Noto Serif', fontWeight: 900, borderBottom: '3px solid #6d4c2b', display: 'inline-block', transition: 'border-bottom-width 0.3s cubic-bezier(0.4,0,0.2,1)' }}
                >
                  Our Services
                </h1>
                <p className="text-sm text-gray-600">
                  Comprehensive Islamic education programs designed to meet your spiritual and academic needs
                </p>
              </div>
            </HeroAnimatedBackground>
          </FadeInSection>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Quran Memorization */}
          <FadeInSection direction="right" delay={200}>
            <CardAnimatedBackground className="enhanced-card brown-stroke rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto group overflow-hidden">
                  <Image
                    src="/studentboy.png"
                    alt="Student memorizing Quran with teacher guidance"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 lg:p-12 content-overlay-light">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mr-4 hover:scale-110 hover:rotate-12 transition-all duration-300">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="force-22px">Quran Memorization</div>
                      <p className="force-22px">Hifz Program</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="force-22px">
                      Master the art of Quran memorization with our comprehensive Hifz program. Our certified teachers
                      provide personalized guidance to help you memorize the Holy Quran with proper Tajweed and
                      understanding.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center group">
                        <Users className="w-5 h-5 text-amber-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700">Individual & Group Lessons</span>
                      </div>
                      <div className="flex items-center group">
                        <Star className="w-5 h-5 text-amber-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700">Tajweed Focus</span>
                      </div>
                      <div className="flex items-center group">
                        <Clock className="w-5 h-5 text-amber-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700">Flexible Scheduling</span>
                      </div>
                      <div className="flex items-center group">
                        <Award className="w-5 h-5 text-amber-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700">Certified Teachers</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="block w-fit mx-auto bg-[#ffb300] hover:bg-[#ffb300]/90 text-white px-6 py-2 rounded-full font-bold text-base border border-[#8B4513] transition-all duration-300 shadow"
                    style={{ borderWidth: '1.2px', boxShadow: '0 6px 24px #000b', fontFamily: 'Noto Serif', fontWeight: 900 }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </CardAnimatedBackground>
          </FadeInSection>

          {/* Arabic Language */}
          <FadeInSection direction="up" delay={400}>
            <CardAnimatedBackground className="enhanced-card brown-stroke rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 order-2 lg:order-1 content-overlay-light">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mr-4 hover:scale-110 hover:rotate-12 transition-all duration-300">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '22px !important' }}>Arabic Language</h2>
                      <p style={{ fontSize: '22px !important' }}>From Letters to Fluency</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p style={{ fontSize: '22px !important' }}>
                      Learn Arabic from basic letters to advanced fluency with our structured curriculum. Whether you're
                      a complete beginner or looking to improve your existing skills, our courses cater to all levels.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center group">
                        <BookOpen className="w-5 h-5 text-amber-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700">All Levels Welcome</span>
                      </div>
                      <div className="flex items-center group">
                        <Users className="w-5 h-5 text-amber-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700">Interactive Classes</span>
                      </div>
                      <div className="flex items-center group">
                        <Globe className="w-5 h-5 text-amber-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700">Cultural Context</span>
                      </div>
                      <div className="flex items-center group">
                        <Award className="w-5 h-5 text-amber-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700">Progress Tracking</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="block w-fit mx-auto bg-[#ffb300] hover:bg-[#ffb300]/90 text-white px-8 py-3 rounded-full font-bold text-lg border border-[#8B4513] transition-all duration-300 shadow"
                    style={{ borderWidth: '1.2px', boxShadow: '0 6px 24px #000b', fontFamily: 'Noto Serif', fontWeight: 900 }}
                  >
                    Book Your Lesson Now
                  </a>
                </div>
                <div className="relative h-64 lg:h-auto order-1 lg:order-2 group overflow-hidden">
                  <Image
                    src="/GERL.jpg"
                    alt="Arabic language learning session with alphabet and vocabulary"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </CardAnimatedBackground>
          </FadeInSection>

          {/* Islamic Studies */}
          <FadeInSection direction="up" delay={600}>
            <CardAnimatedBackground className="enhanced-card brown-stroke rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto group overflow-hidden">
                  <Image
                    src="/boy.png"
                    alt="Islamic studies class covering Fiqh, Seerah, and Tafseer"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 lg:p-12 content-overlay-light">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mr-4 hover:scale-110 hover:rotate-12 transition-all duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '20px !important' }}>Islamic Studies</h2>
                      <p style={{ fontSize: '20px !important' }}>Comprehensive Islamic Education</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p style={{ fontSize: '22px !important' }}>
                      Deepen your understanding of Islam through our comprehensive Islamic Studies program covering the basics of creed (Aqeedah), jurisprudence (Fiqh), Prophet's biography (Seerah), and Quranic interpretation (Tafseer).
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center group">
                        <BookOpen className="w-5 h-5 text-amber-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700">Aqeedah & Fiqh</span>
                      </div>
                      <div className="flex items-center group">
                        <Star className="w-5 h-5 text-amber-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700">Seerah Studies</span>
                      </div>
                      <div className="flex items-center group">
                        <Award className="w-5 h-5 text-amber-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700">Tafseer Classes</span>
                      </div>
                      <div className="flex items-center group">
                        <Users className="w-5 h-5 text-amber-600 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700">Discussion Forums</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="block w-fit mx-auto bg-[#ffb300] hover:bg-[#ffb300]/90 text-white px-8 py-3 rounded-full font-bold text-lg border border-[#8B4513] transition-all duration-300 shadow"
                    style={{ borderWidth: '1.2px', boxShadow: '0 6px 24px #000b', fontFamily: 'Noto Serif', fontWeight: 900 }}
                  >
                    Book Your Lesson Now
                  </a>
                </div>
              </div>
            </CardAnimatedBackground>
          </FadeInSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center relative overflow-hidden" style={{ position: 'relative' }}>
        <img src="/backgrund1.svg" alt="background decorative" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, pointerEvents: 'none' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInSection>
            <HeroAnimatedBackground className="p-8 rounded-2xl">
              <div
                className="content-overlay-heavy bg-white/90 text-[#5a2600] rounded-2xl p-8 shadow-lg w-full"
                style={{
                  border: '4px solid #8B4513', // بني داكن
                  boxShadow: '0 4px 32px #8B451344', // ظل بني خفيف
                  padding: '2.5rem 1.5rem'
                }}
              >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin?</h2>
              <p className="text-xl mb-8 opacity-90">
                Choose the program that best fits your learning goals and start your journey with our expert teachers
                today.
              </p>
              <a
                href="/pricing"
                className="block w-fit mx-auto bg-white text-amber-600 px-8 py-4 text-lg rounded-full font-bold border border-[#8B4513] transition-all duration-200 hover:bg-[#ffb300] hover:text-white"
                style={{ borderWidth: '1.2px', boxShadow: '0 6px 24px #000b', fontFamily: 'Noto Serif', fontWeight: 900 }}
              >
                View Our Pricing
              </a>
              </div>
            </HeroAnimatedBackground>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
