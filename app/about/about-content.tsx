"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeInSection } from "@/components/fade-in-section"
import { StaggeredFadeIn } from "@/components/staggered-fade-in"
import { AnimatedButton } from "@/components/animated-button"
import { ShimmerBackground } from "@/components/shimmer-background"
import { useState } from "react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundImage: "url('/islamic-pattern-new.jpg')", backgroundSize: 'cover', backgroundRepeat: 'repeat', backgroundPosition: 'center' }}>
        <ShimmerBackground />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div
            className="content-overlay max-w-4xl mx-auto card-3d-stroke about-hero-card"
            style={{
              border: '3px solid #6d4c2b',
              boxShadow: '0 8px 32px 0 rgba(90,38,0,0.25), 0 1.5px 0 #fff inset',
              borderRadius: '2rem',
              backgroundColor: '#fff',
              backgroundImage: `url('/backgrund1.svg')`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          >
            <h1
              className="text-lg md:text-xl font-bold text-gray-900 mb-6 text-center"
              style={{
                fontFamily: 'Noto Serif',
                fontWeight: 900,
                borderBottom: '3px solid #6d4c2b',
                display: 'inline-block',
                color: '#fff',
                WebkitTextStroke: '1.4px #8B4513',
                textShadow: '0 4px 16px #000, 0 2px 8px #000'
              }}
            >
              About Al-Azhar School
            </h1>
            <p className="text-sm" style={{
              fontFamily: "Noto Serif",
              fontWeight: 600,
              color: '#fff',
              WebkitTextStroke: '0.8px #8B4513',
              textShadow: '0 3px 12px #000, 0 1px 4px #000'
            }}>
              Bridging traditional Islamic education with modern technology to serve students worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 section-light" style={{ backgroundImage: 'url(/islamic-pattern-new.jpg)', backgroundSize: 'cover', backgroundRepeat: 'repeat', backgroundPosition: 'center' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <FadeInSection direction="left">
              <div className="content-overlay story-card flex flex-col h-full justify-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: 'url(/islamic-pattern-new.jpg)', backgroundSize: 'cover', backgroundRepeat: 'repeat', backgroundPosition: 'center', backgroundColor: 'rgba(255,255,255,0.92)', height: '100%' }}>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <strong>Assalam Alikum!</strong> We're an international, non-profit Egyptian Islamic school with one heartfelt mission: helping Muslim children truly love and understand their faith.
                  </p>
                  <p>
                    Through exploring the Holy Qur'an and the Sunnah of Prophet Muhammad (peace be upon him), we aim to bring knowledge to life in a way that's authentic, reliable, and inspiring.
                  </p>
                  <p>
                    Learning with us isn't just about memorizing – it's about connecting hearts, minds, and values.
                  </p>
                  <p>
                    With our dynamic online classrooms, dedicated teachers, and interactive tools, we make learning Islam an engaging journey wherever you are in the world.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={300}>
              <div className="relative group h-full flex items-center justify-center">
                <Image
                  src="/OURSTORYPIC.png"
                  alt="Our Story"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-full max-h-[500px] transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: '1/1', minHeight: '350px' }}
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
{/* Teacher Image Section */}
<section className="py-16 px-4 section-light" style={{ backgroundImage: "url('/islamic-pattern-new.jpg')", backgroundSize: 'cover', backgroundRepeat: 'repeat', backgroundPosition: 'center' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <FadeInSection direction="left" delay={200}>
              <div className="relative group h-full flex items-center justify-center">
                <Image
                  src="/TEACHERS1.png"
                  alt="Certified Al-Azhar teacher conducting online class with international students"
                  width={600}
                  height={500}
                  className="rounded-2xl object-cover w-full h-full max-h-[500px] transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: '1/1', minHeight: '350px' }}
                />
              </div>
            </FadeInSection>
            <FadeInSection direction="right" delay={400}>
              <div className="content-overlay flex flex-col justify-center h-full w-full rounded-2xl p-3 sm:p-6 md:p-8 shadow-lg border border-amber-200 bg-white/90" style={{ minHeight: '350px', maxHeight: '500px', aspectRatio: '1/1', backgroundImage: "url('/islamic-pattern-new.jpg')", backgroundSize: 'cover', backgroundRepeat: 'repeat', backgroundPosition: 'center' }}>
                <div className="custom-learn-title font-bold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base md:text-lg">Learn from the Best</div>
                <div className="custom-learn-text space-y-1 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base text-gray-600 leading-tight sm:leading-relaxed">
                  <div>Our teachers are carefully selected graduates from Al-Azhar University, the world's most prestigious Islamic institution. Each instructor brings years of experience in traditional Islamic scholarship combined with modern pedagogical methods.</div>
                  <div>Through our interactive online platform, students from different continents come together in virtual classrooms, creating a diverse and enriching learning environment that mirrors the global nature of the Muslim ummah.</div>
                  <div>We believe that quality education knows no boundaries, and our technology enables us to deliver the same level of excellence that has been the hallmark of Al-Azhar for over a thousand years.</div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="content-overlay text-center max-w-2xl mx-auto mb-12 foundation-btn-style" style={{ border: '2px solid #6d4c2b', borderRadius: '2rem', boxShadow: '0 8px 32px 0 rgba(90,38,0,0.18), 0 1.5px 0 #fff inset', background: '#fff', padding: '1.5rem 0' }}>
              <h2 className="text-xl font-bold text-gray-900">Our Foundation</h2>
            </div>
          </FadeInSection>

          <StaggeredFadeIn className="grid md:grid-cols-3 gap-8">
            <Card className="enhanced-card rounded-2xl overflow-hidden group transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2 hover:scale-105 hover:border-amber-400 hover:ring-4 hover:ring-yellow-300/40 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100" style={{ border: '2px solid #6d4c2b' }}>
              <CardContent className="p-8 text-center">
                <div className="icon-3d w-16 h-16 mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" style={{ background: 'radial-gradient(circle, #ffe9b3 60%, #fffbe6 100%)' }}>
                  <Target className="w-8 h-8" style={{ color: '#6d4c2b' }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To provide authentic, high-quality Islamic education through innovative online platforms, making the
                  teachings of the Quran and Arabic language accessible to Muslims worldwide while preserving
                  traditional scholarship methods.
                </p>
              </CardContent>
            </Card>

            <Card className="enhanced-card rounded-2xl overflow-hidden group transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2 hover:scale-105 hover:border-amber-400 hover:ring-4 hover:ring-yellow-300/40 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100" style={{ border: '2px solid #6d4c2b' }}>
              <CardContent className="p-8 text-center">
                <div className="icon-3d w-16 h-16 mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" style={{ background: 'radial-gradient(circle, #ffe9b3 60%, #fffbe6 100%)' }}>
                  <Lightbulb className="w-8 h-8" style={{ color: '#6d4c2b' }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To become the world's leading online Islamic education institution, fostering a global community of
                  knowledgeable Muslims who are well-versed in Quranic studies, Arabic language, and Islamic sciences.
                </p>
              </CardContent>
            </Card>

            <Card className="enhanced-card rounded-2xl overflow-hidden group transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2 hover:scale-105 hover:border-amber-400 hover:ring-4 hover:ring-yellow-300/40 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-yellow-100" style={{ border: '2px solid #6d4c2b' }}>
              <CardContent className="p-8 text-center">
                <div className="icon-3d w-16 h-16 mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" style={{ background: 'radial-gradient(circle, #ffe9b3 60%, #fffbe6 100%)' }}>
                  <Heart className="w-8 h-8" style={{ color: '#6d4c2b' }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Authenticity in teaching, excellence in service, accessibility for all, respect for diversity,
                  continuous improvement, and unwavering commitment to the sacred knowledge we share with our students.
                </p>
              </CardContent>
            </Card>
          </StaggeredFadeIn>
        </div>
      </section>

      
      {/* Final CTA Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden" style={{ backgroundColor: "#5a2600", backgroundImage: "url('/backgrund1.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#a0522d] via-[#8b4513] to-[#a0522d] animate-pulse opacity-20"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInSection>
            <div className="content-overlay-heavy bg-white/80 text-[#5a2600] rounded-2xl p-8 shadow-lg border border-amber-200 brown-stroke">
              <h2 className="text-lg md:text-xl font-bold mb-6" style={{ fontFamily: "Noto Serif", fontWeight: 900, color: "#5a2600" }}>Ready to Begin?</h2>
              <p className="text-sm mb-8 text-[#8b4513]" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                Join thousands of students who have transformed their understanding of Islam through our comprehensive
                programs. Your journey towards authentic Islamic knowledge begins with a single step.
              </p>
              <AnimatedButton
                asChild
                size="lg"
                animation="pulse"
                className="bg-[#e8b007] text-black hover:bg-[#d4a006] px-8 py-4 text-lg rounded-full hover:shadow-2xl hover:shadow-amber-500/25 font-bold"
              >
                <Link href="/contact">Begin Your Learning Journey</Link>
              </AnimatedButton>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Arabic Language Section */}
      <section className="py-12 px-4">
        <FadeInSection>
          <Link href="/services" passHref legacyBehavior>
            <a className="block max-w-3xl mx-auto bg-white/90 rounded-2xl p-8 shadow-brown brown-stroke border border-amber-200 transition-all duration-300 hover:shadow-brown-lg hover:-translate-y-2 active:scale-95 cursor-pointer text-center no-underline">
              <h2 className="text-base md:text-lg mb-4 text-[#5a2600] font-bold" style={{ fontFamily: 'Noto Serif', fontWeight: 900 }}>Our Services</h2>
              <p className="text-sm text-[#8b4513] font-bold" style={{ fontFamily: 'Noto Serif', fontWeight: 700 }}>
                Comprehensive Islamic education programs designed to meet your spiritual and academic needs
              </p>
            </a>
          </Link>
        </FadeInSection>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl p-8 shadow-brown brown-stroke border border-amber-200 transition-all duration-300 hover:shadow-brown-lg hover:-translate-y-2 active:scale-95 cursor-pointer text-center">
          <h2 className="text-base md:text-lg mb-4 text-[#5a2600] font-bold" style={{ fontFamily: 'Noto Serif', fontWeight: 900 }}>Simple, Transparent Pricing</h2>
          <p className="text-sm text-[#8b4513] font-bold" style={{ fontFamily: 'Noto Serif', fontWeight: 700 }}>
            Choose the plan that fits your needs with no hidden fees or surprises.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 text-center">
        <PaymentMethodsButton />
      </section>
    </div>
  )
}

function PaymentMethodsButton() {
  const [show, setShow] = useState(false);
  const [pulse, setPulse] = useState(false);
  return (
    <div>
      <button
        onClick={() => { setShow(!show); setPulse(true); setTimeout(() => setPulse(false), 400); }}
        className={`bg-[#e8b007] text-black font-bold py-3 px-8 rounded-full shadow-brown brown-stroke border border-yellow-500 text-xl transition-all duration-300 focus:outline-none ${pulse ? 'animate-pulse' : ''}`}
        style={{ fontFamily: 'Noto Serif', fontWeight: 900 }}
      >
        Payment Methods
      </button>
      {show && (
        <div className="mt-6 text-lg text-[#5a2600] font-bold animate-fade-in-up">
          Visa, MasterCard, PayPal, Fawry, Vodafone Cash, Western Union ...
        </div>
      )}
    </div>
  );
}

