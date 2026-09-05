'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Globe, Award, Star, Clock, GraduationCap } from "lucide-react";
import Link from "next/link";
import { FadeInSection } from "@/components/fade-in-section";
import { StaggeredFadeIn } from "@/components/staggered-fade-in";
import { AnimatedButton } from "@/components/animated-button";
import { AnimatedCounter } from "@/components/animated-counter";
import HeroSection from "@/components/hero-section";
import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollingMarquee from "@/components/scrolling-marquee";
import Quran3DIcon from "@/components/quran-3d-icon";
import TestimonialsSection from "@/components/testimonials";
 

export default function HomePage() {
  return (
    <>
      {/* ديكور صورة القرآن في الخلفية يمين الصفحة */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "320px",
          height: "100vh",
          zIndex: 0,
          opacity: 0.10,
          pointerEvents: "none",
          background: "none"
        }}
      >
        <Image
          src="/quran_7221480.png"
          alt=""
          width={320}
          height={1080}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          draggable={false}
        />
      </div>
      {/* ديكور صورة كتاب في الخلفية يسار الصفحة */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "320px",
          height: "100vh",
          zIndex: 0,
          opacity: 0.10,
          pointerEvents: "none",
          background: "none"
        }}
      >
        <Image
          src="/book_13534590.png"
          alt=""
          width={320}
          height={1080}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          draggable={false}
        />
      </div>
      {/* باقي الصفحة */}
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
        {/* Decorative Divider below Hero, always fully visible */}
        <div className="relative z-20 mt-4 sm:mt-6">
      <FadeInSection>
      <Link href="/about">
        <button
          type="button"
          className="mx-auto block mb-8 sm:mb-12 bg-[#6d1811] rounded-2xl p-3 sm:px-16 shadow-[0_6px_32px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 active:scale-95 cursor-pointer border-2 border-yellow-400 font-bold text-white text-lg sm:text-xl md:text-2xl py-4 sm:py-6 px-12 sm:px-20 about-us-btn"
          style={{ fontFamily: 'Noto Serif', fontWeight: 900, textShadow: '2px 2px 8px rgba(255,183,0,0.10)' }}
        >
          About Us
        </button>
      </Link>
      <style jsx>{`
        @media (max-width: 768px) {
          .about-us-btn {
            margin-top: 3rem !important;
          }
        }
      `}</style>
        </FadeInSection>
        </div>
        {/* Decorative Divider perfectly centered between Book Now and About Us */}
        <FadeInSection>
          <section className="py-6 sm:py-8 px-4 section-light" style={{ backgroundImage: 'url(/islamic-pattern-new.jpg)', backgroundSize: 'cover', backgroundRepeat: 'repeat', backgroundPosition: 'center' }}>
        <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <FadeInSection direction="left">
              <div
                className="content-overlay"
                style={{
                  backgroundImage: 'url(/islamic-pattern-new.jpg)',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'repeat',
                  backgroundPosition: 'center',
                  border: '4px solid #8B4513',
                  borderRadius: '2rem',
                  padding: '2rem',
                  backgroundColor: 'white',
                  boxShadow: '0 12px 48px rgba(0,0,0,0.55)'
                }}
              >
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
                    <div className="space-y-2 text-xs sm:text-sm text-gray-600">
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
              <div className="relative group" style={{ border: '4px solid #8B4513', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 12px 48px rgba(0,0,0,0.55)' }}>
                <Image
                      src="/OURSTORYPIC.png"
                      alt="Our Story - Al-Azhar School"
                  width={600}
                  height={400}
                      className="rounded-2xl transition-transform duration-500 group-hover:scale-105 w-full h-auto"
                      style={{ borderRadius: '2rem' }}
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
        </FadeInSection>
      {/* Divider */}
      {/* Services Section */}
        <section className="py-12 sm:py-16 px-4 pattern-overlay-light">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <Link href="/services">
              <button
                type="button"
                className="mx-auto block mb-8 sm:mb-12 bg-[#6d1811] rounded-2xl p-3 sm:px-16 shadow-[0_6px_32px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 active:scale-95 cursor-pointer border-2 border-yellow-400 font-bold text-white text-lg sm:text-xl md:text-2xl py-4 sm:py-6 px-12 sm:px-20"
                style={{ fontFamily: 'Noto Serif', fontWeight: 900, textShadow: '2px 2px 8px rgba(255,183,0,0.10)' }}
              >
                Our Services
              </button>
            </Link>
          </FadeInSection>
            <StaggeredFadeIn className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
            {[
              {
                icon: BookOpen,
                title: (
                  <>
                    <span
                      className="block text-sm sm:text-base font-black text-[#5a2600] mb-1"
                      style={{ fontFamily: 'Noto Serif', letterSpacing: '0.5px', fontSize: '24px' }}
                    >
                      Quran Memorization
                    </span>
                    <span
                      className="block text-xs sm:text-sm font-bold text-[#e8b007] mb-2"
                      style={{ fontFamily: 'Noto Serif', letterSpacing: '0.2px', fontSize: '20px' }}
                    >
                      Hifz Program
                    </span>
                    <span
                      className="block text-sm sm:text-base md:text-lg text-[#5a2600] font-semibold leading-relaxed mb-2"
                      style={{ fontFamily: 'Noto Serif', lineHeight: 1.7 }}
                    >
                      Master the art of Quran memorization with our comprehensive Hifz program.<br />
                      <span className="text-[#8b4513] font-normal">
                        Our certified teachers provide personalized guidance to help you memorize the Holy Quran with proper Tajweed and understanding.
                      </span>
                    </span>
                  </>
                ),
                extra: (
                  <div className="flex flex-1 flex-col justify-end h-full">
                    <div className="text-center mt-2">
                    <Link
                      href="/contact"
                        className="bg-[#ffb300] hover:bg-[#ffb300]/90 text-white font-bold py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm"
                      style={{
                        fontFamily: 'Noto Serif',
                        fontWeight: 900,
                          width: '5cm',
                          minWidth: '5cm',
                          maxWidth: '5cm',
                          background: '#ffb300',
                          backgroundImage: 'none',
                          textAlign: 'center',
                          paddingLeft: 0,
                          paddingRight: 0,
                          display: 'inline-block',
                          fontSize: '15px',
                          letterSpacing: '0.5px',
                          border: '1.2px solid #8B4513',
                          boxShadow: '0 6px 24px 0 #000b',
                      }}
                    >
                      Book Now
                    </Link>
                    </div>
                  </div>
                )
              },
              {
                icon: Globe,
                title: (
                  <>
                    <span
                      className="block text-sm sm:text-base font-black text-[#5a2600] mb-1"
                      style={{ fontFamily: 'Noto Serif', letterSpacing: '0.5px', fontSize: '24px' }}
                    >
                      Arabic Language
                    </span>
                    <span
                      className="block text-xs sm:text-sm font-bold text-[#e8b007] mb-2"
                      style={{ fontFamily: 'Noto Serif', letterSpacing: '0.2px', fontSize: '20px', marginTop: '0.2cm' }}
                    >
                      From Letters to Fluency
                    </span>
                    <span
                      className="block text-sm sm:text-base md:text-lg text-[#5a2600] font-semibold leading-relaxed mb-2"
                      style={{ fontFamily: 'Noto Serif', lineHeight: 1.7, marginTop: '0.2cm' }}
                    >
                      Learn Arabic step by step — from mastering the alphabet to speaking confidently.<br/>
                      With expert Al-Azhar-certified teachers and flexible online lessons, unlock the beauty and depth of Arabic at your own pace.
                    </span>
                  </>
                ),
                desc: (
                  <>
                    <span
                      className="block text-sm sm:text-base font-black text-[#5a2600] mb-1"
                      style={{ fontFamily: 'Noto Serif', letterSpacing: '0.5px' }}
                    >
                      Arabic Language
                    </span>
                    <span
                      className="block text-xs sm:text-sm font-bold text-[#e8b007] mb-2"
                      style={{ fontFamily: 'Noto Serif', letterSpacing: '0.2px' }}
                    >
                      From Letters to Fluency
                    </span>
                    <span
                      className="block text-sm sm:text-base md:text-lg text-[#5a2600] font-semibold leading-relaxed mb-2"
                      style={{ fontFamily: 'Noto Serif', lineHeight: 1.7 }}
                    >
                      Learn Arabic step by step — from mastering the alphabet to speaking confidently.<br/>
                      With expert Al-Azhar-certified teachers and flexible online lessons, unlock the beauty and depth of Arabic at your own pace.
                    </span>
                  </>
                ),
                extra: (
                  <div className="flex flex-1 flex-col justify-end h-full">
                    <div className="text-center mt-2">
                    <Link
                      href="/contact"
                        className="bg-[#ffb300] hover:bg-[#ffb300]/90 text-white font-bold py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm"
                        style={{
                          fontFamily: 'Noto Serif',
                          fontWeight: 900,
                          width: '5cm',
                          minWidth: '5cm',
                          maxWidth: '5cm',
                          background: '#ffb300',
                          backgroundImage: 'none',
                          textAlign: 'center',
                          paddingLeft: 0,
                          paddingRight: 0,
                          display: 'inline-block',
                          fontSize: '15px',
                          letterSpacing: '0.5px',
                          border: '1.2px solid #8B4513',
                          boxShadow: '0 6px 24px 0 #000b',
                        }}
                    >
                      Book Now
                    </Link>
                    </div>
                  </div>
                )
              },
              {
                icon: Award,
                title: (
                  <>
                    <span
                      className="block text-sm sm:text-base font-black text-[#5a2600] mb-1"
                      style={{ fontFamily: 'Noto Serif', letterSpacing: '0.5px', fontSize: '24px' }}
                    >
                      Islamic Studies
                    </span>
                    <span
                      className="block text-xs sm:text-sm font-bold text-[#e8b007] mb-2"
                      style={{ fontFamily: 'Noto Serif', letterSpacing: '0.2px', fontSize: '20px', marginTop: '0.2cm' }}
                    >
                      Comprehensive Islamic Education
                    </span>
                    <span
                      className="block text-sm sm:text-base md:text-lg text-[#5a2600] font-semibold leading-relaxed mb-2"
                      style={{ fontFamily: 'Noto Serif', lineHeight: 1.7, marginBottom: '0.2cm' }}
                    >
                      Master Aqeedah, Fiqh, Seerah, and Tafseer with expert Al-Azhar teachers — blending deep tradition with modern, interactive methods to enrich your faith and knowledge.
                    </span>
                  </>
                ),
                desc: (
                  <>
                    <span
                      className="block text-sm sm:text-base font-black text-[#5a2600] mb-1"
                      style={{ fontFamily: 'Noto Serif', letterSpacing: '0.5px' }}
                    >
                      Islamic Studies
                    </span>
                    <span
                      className="block text-xs sm:text-sm font-bold text-[#e8b007] mb-2"
                      style={{ fontFamily: 'Noto Serif', letterSpacing: '0.2px' }}
                    >
                      Comprehensive Islamic Education
                    </span>
                    <span
                      className="block text-sm sm:text-base md:text-lg text-[#5a2600] font-semibold leading-relaxed mb-2"
                      style={{ fontFamily: 'Noto Serif', lineHeight: 1.7, marginTop: '0.2cm', marginBottom: '0.2cm' }}
                    >
                      Master Aqeedah, Fiqh, Seerah, and Tafseer with expert Al-Azhar teachers — blending deep tradition with modern, interactive methods to enrich your faith and knowledge.
                    </span>
                  </>
                ),
                extra: (
                  <div className="flex flex-1 flex-col justify-end h-full">
                    <div className="text-center mt-2">
                    <Link
                      href="/contact"
                        className="bg-[#ffb300] hover:bg-[#ffb300]/90 text-white font-bold py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm"
                        style={{
                          fontFamily: 'Noto Serif',
                          fontWeight: 900,
                          width: '5cm',
                          minWidth: '5cm',
                          maxWidth: '5cm',
                          background: '#ffb300',
                          backgroundImage: 'none',
                          textAlign: 'center',
                          paddingLeft: 0,
                          paddingRight: 0,
                          display: 'inline-block',
                          fontSize: '15px',
                          letterSpacing: '0.5px',
                          border: '1.2px solid #8B4513',
                          boxShadow: '0 6px 24px 0 #000b',
                        }}
                    >
                      Book Now
                    </Link>
                    </div>
                  </div>
                )
              }
            ].map(({ icon: Icon, title, desc, extra }, idx) => (
              idx === 0 ? (
                <FadeInSection key={idx} direction="left">
              <div
                    className={`animate-fade-in-up group transition-transform duration-500`}
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <Card
                  className="h-full min-h-[420px] w-full border-2 border-[#8B4513] transition-all duration-300 bg-white flex flex-col items-stretch justify-between overflow-hidden shadow-[0_6px_32px_rgba(0,0,0,0.5)] hover:shadow-black/70 hover:scale-105"
                  style={{
                    borderRadius: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'stretch'
                  }}
                >
                    <CardHeader className="bg-gradient-to-br from-yellow-100/80 to-orange-100/80 p-4" style={{ borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem' }}>
                        <div className="relative w-full h-32 sm:h-40 md:h-48 rounded-xl mx-auto group-hover:scale-105 transition border-2 border-yellow-400 overflow-hidden" style={{ boxShadow: '0 8px 32px 0 #000a, 0 1.5px 0 #fff' }}>
                          <Image
                            src="/quranbook.avif"
                            alt="Quran Memorization"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                            <div className="absolute bottom-2 left-2 text-white">
                              <div className="text-sm font-bold">Learn Quran Online</div>
                              <div className="text-xs opacity-90">with Alazahar</div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-col justify-between h-full p-6">
                        <div>{title}</div>
                        <div className="mt-auto">{extra}</div>
                      </CardContent>
                    </Card>
                  </div>
                </FadeInSection>
              ) : (
                <div
                  key={idx}
                  className={`animate-fade-in-up group transition-transform duration-500${idx === 2 ? ' hover:scale-110' : ''}`}
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <Card
                    className="h-full min-h-[420px] w-full border-2 border-[#8B4513] transition-all duration-300 bg-white flex flex-col items-stretch justify-between overflow-hidden shadow-[0_6px_32px_rgba(0,0,0,0.5)] hover:shadow-black/70 hover:scale-105"
                    style={{
                      borderRadius: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'stretch'
                    }}
                  >
                    <CardHeader className="bg-gradient-to-br from-yellow-100/80 to-orange-100/80 p-4" style={{ borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem' }}>
                      <div className="relative w-full h-32 sm:h-40 md:h-48 rounded-xl mx-auto group-hover:scale-105 transition border-2 border-yellow-400 overflow-hidden" style={{ boxShadow: '0 8px 32px 0 #000a, 0 1.5px 0 #fff' }}>
                        <Image
                          src={idx === 1 ? "/najad-arabic-.jpg" : "/islamicstudy.webp"}
                          alt={idx === 1 ? "Arabic Language" : "Islamic Studies"}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                          <div className="absolute bottom-2 left-2 text-white">
                            <div className="text-sm font-bold">{idx === 1 ? "Learn Arabic" : "Islamic Studies"}</div>
                            <div className="text-xs opacity-90">{idx === 1 ? "Language" : "Education"}</div>
                          </div>
                        </div>
                    </div>
                  </CardHeader>
                    <CardContent className="flex flex-col justify-between h-full p-6">
                      <div>{title}</div>
                      <div className="mt-auto">{extra}</div>
                    </CardContent>
                </Card>
              </div>
              )
            ))}
          </StaggeredFadeIn>
        </div>
      </section>
      {/* Testimonials */}
      <TestimonialsSection />
      {/* Divider */}
      {/* Statistics Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-amber-50 to-yellow-50 relative overflow-hidden" style={{
        backgroundImage: 'url(/BACK.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255,255,255,0.75)',
          zIndex: 1,
          pointerEvents: 'none',
        }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeInSection>
              <div className="flex flex-col items-center justify-center gap-0 mb-2">
                <div className="flex items-center justify-center gap-3 achievements-row">
                  <Image src="/sudent1.png" alt="Student Icon" width={160} height={160} className="achievements-icon w-32 h-32 sm:w-40 sm:h-40 object-contain" style={{marginRight:'1rem', background: 'none', filter: 'drop-shadow(0 4px 16px #e8b00788) drop-shadow(0 1px 4px #e8b00755)'}} />
                  <h2 className="achievements-title h2 text-[#5a2600] text-2xl sm:text-3xl md:text-4xl m-0 text-center" style={{ fontFamily: "Noto Serif", fontWeight: 900, textShadow: "0 8px 32px #e8b007cc, 0 2px 8px #e8b00799, 2px 2px 4px rgba(0,0,0,0.10)", lineHeight: 1.1, marginTop: 0 }}>
                      Our Achievements
                    </h2>
                  </div>
                <p className="achievements-desc text-base sm:text-lg md:text-xl text-[#8b4513] font-semibold text-center max-w-2xl mx-auto" style={{ fontFamily: "Noto Serif", fontWeight: 600, lineHeight: 1.5, letterSpacing: '0.2px', margin: 0, marginTop: '-2.2rem' }}>
                  Be part of a growing community<br />transforming their Islamic education journey with us.
              </p>
                <style jsx>{`
                  @media (max-width: 768px) {
                    .achievements-desc {
                      margin-top: 0 !important;
                    }
                  }
                `}</style>
            </div>
          </FadeInSection>
          <StaggeredFadeIn className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Users,
                title: "Active Students",
                value: 284,
                suffix: "",
                desc: "Students from 80+ countries"
              },
              {
                icon: () => (
                  <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                    <circle cx="20" cy="20" r="19" fill="#fff" stroke="#219653" strokeWidth="3" />
                    {/* أرقام الساعة */}
                    <text x="20" y="8" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#222" fontFamily="Arial,serif">12</text>
                    <text x="34" y="22.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#222" fontFamily="Arial,serif">3</text>
                    <text x="20" y="37" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#222" fontFamily="Arial,serif">6</text>
                    <text x="6" y="22.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#222" fontFamily="Arial,serif">9</text>
                    {/* علامات الساعة */}
                    {[...Array(12)].map((_, i) => (
                      <rect
                        key={i}
                        x={19.5}
                        y={3.5}
                        width={1}
                        height={i % 3 === 0 ? 0 : 3}
                        rx={0.5}
                        fill="#222"
                        transform={`rotate(${i * 30} 20 20)`}
                      />
                    ))}
                    {/* عقرب الساعة */}
                    <rect x="19.2" y="9" width="1.6" height="11" rx="0.8" fill="#219653" />
                      <rect x="19.2" y="9" width="1.6" height="11" rx="0.8" fill="#219653" transform="rotate(90 20 20)" />
                  </svg>
                ),
                title: "Teaching Hours",
                value: 973,
                suffix: "",
                desc: "Hours of quality education"
              },
              {
                  icon: Award,
                title: "Certified Teachers",
                value: 75,
                suffix: "",
                desc: "Al-Azhar certified scholars"
              }
            ].map(({ icon: Icon, title, value, suffix, desc }, idx) => (
                <div
                  key={idx}
                  className="animate-fade-in-up group transition-transform duration-500"
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition rounded-2xl group-hover:shadow-gold group-hover:-translate-y-3 luxury-card-bg h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.85)]" style={{ boxShadow: '0 12px 48px 0 #000a, 0 1.5px 0 #fff' }}>
                    <CardHeader className="bg-gradient-to-br from-yellow-100/80 to-orange-100/80 pb-4 sm:pb-6 md:pb-8">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#e8d5b7] rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition shadow-[0_6px_18px_0_rgba(90,38,0,0.18)] shadow-black/10 border border-yellow-200" style={{ boxShadow: '0 8px 24px 0 #5a260055, 0 1.5px 0 #fff' }}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-black drop-shadow-[0_2px_2px_rgba(90,38,0,0.18)]" style={{ filter: 'drop-shadow(0 2px 4px #5a260055)' }} />
                  </div>
                      <CardTitle className="text-center text-sm sm:text-base">{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 sm:p-4 md:p-6">
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#5a2600] mb-2" style={{ fontFamily: 'Noto Serif' }}>
                          <AnimatedCounter value={value} suffix={suffix} />
                  </div>
                        <CardDescription className="text-xs sm:text-sm md:text-base" style={{ color: '#5a2600' }}>{desc}</CardDescription>
                </div>
                    </CardContent>
                  </Card>
              </div>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>
      {/* Divider */}
        {/* Features Section */}
        <section className="py-12 sm:py-16 px-4 pattern-overlay-light">
          <div className="max-w-6xl mx-auto">
          <FadeInSection>
              <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
                <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 w-full">
                  <h2 className="h2 text-[#5a2600] text-xl sm:text-2xl md:text-3xl m-0" style={{ fontFamily: "Noto Serif", fontWeight: 900, textShadow: "0 8px 32px #fff, 0 2px 8px #fff, 2px 2px 4px rgba(0,0,0,0.1)" }}>
                    Why Choose Us
                  </h2>
                  <Image
                    src="/question-mark.png"
                    alt="?"
                    width={56}
                    height={56}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain ml-2"
                    style={{ filter: 'drop-shadow(0 2px 6px #fff8), drop-shadow(0 1px 0 #5a260033)' }}
                  />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#8b4513] mt-4" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                  Experience the difference with our comprehensive Islamic education approach
                </p>
            </div>
          </FadeInSection>
            <StaggeredFadeIn className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Star,
                  title: "Certified Teachers",
                  desc: "Learn from Al-Azhar University certified scholars with years of teaching experience."
                },
                {
                  icon: Clock,
                  title: "Flexible Schedule",
                  desc: "Choose your preferred time slots and learn at your own pace from anywhere in the world."
                },
                {
                  icon: GraduationCap,
                  title: "Comprehensive Curriculum",
                  desc: "From basic Arabic to advanced Islamic studies, we cover all aspects of Islamic education."
                }
            ].map(({ icon: Icon, title, desc }, idx) => (
                <div
                  key={idx}
                  className="animate-fade-in-up group transition-transform duration-500"
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition rounded-2xl group-hover:shadow-gold group-hover:-translate-y-3 luxury-card-bg h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.85)]" style={{ boxShadow: '0 12px 48px 0 #000a, 0 1.5px 0 #fff' }}>
                    <CardHeader className="bg-gradient-to-br from-yellow-100/80 to-orange-100/80 pb-4 sm:pb-6 md:pb-8">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#e8d5b7] rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition shadow-[0_6px_18px_0_rgba(90,38,0,0.18)] shadow-black/10 border border-yellow-200" style={{ boxShadow: '0 8px 24px 0 #5a260055, 0 1.5px 0 #fff' }}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-black drop-shadow-[0_2px_2px_rgba(90,38,0,0.18)]" style={{ filter: 'drop-shadow(0 2px 4px #5a260055)' }} />
                  </div>
                      <CardTitle className="text-center text-sm sm:text-base">
                        <span style={{ fontSize: '20px' }}>{title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 sm:p-4 md:p-6">
                      <CardDescription className="text-center text-xs sm:text-sm md:text-base">{desc}</CardDescription>
                    </CardContent>
                  </Card>
              </div>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>
        {/* CTA Section */}
        <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-amber-50 to-yellow-50 relative overflow-hidden" style={{
          backgroundImage: 'url(/BACK.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255,255,255,0.75)',
            zIndex: 1,
            pointerEvents: 'none',
          }} />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center mb-4 sm:mb-8 max-w-4xl mx-auto text-center">
          <h2
            className="flex items-center justify-center text-lg sm:text-3xl md:text-4xl font-black text-[#5a2600] m-0 drop-shadow-lg text-center leading-tight"
            style={{
              fontFamily: 'Noto Serif',
              fontWeight: 900,
              textShadow: '2px 2px 8px #e8b00755, 0 2px 0 #fff',
              lineHeight: 1.1,
              letterSpacing: '0.5px',
              wordBreak: 'break-word',
            }}
          >
            <Image
              src="/quran_16777693.png"
              alt="Quran Icon"
              width={128}
              height={128}
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain p-0"
              style={{
                background: 'transparent',
                transform: 'translateY(-18%)',
                marginRight: '2.2rem',
                filter: 'drop-shadow(0 4px 12px #2228) drop-shadow(0 1px 0 #fff)'
              }}
            />
            <span style={{display:'inline-block', whiteSpace:'normal', textAlign:'left'}}>
              Ready to Start Your Islamic<br />Education Journey?
            </span>
          </h2>
        </div>
        <p
          className="cta-description text-base sm:text-lg md:text-xl text-[#8b4513] mt-2 font-semibold max-w-2xl mx-auto text-center mb-6 sm:mb-8"
          style={{
            fontFamily: 'Noto Serif',
            fontWeight: 600,
            textShadow: '0 1px 6px #fffbe6',
            lineHeight: 1.6,
            letterSpacing: '0.2px',
            marginTop: '-1cm',
          }}
        >
          Join hundreds of students around the world and start your Quran learning journey today.
        </p>
        <style jsx>{`
          @media (max-width: 768px) {
            .cta-description {
              margin-top: 0.5rem;
            }
          }
        `}</style>
        <AnimatedButton
          asChild
          className="bg-[#6d1811] hover:bg-[#3e1800] text-white font-bold py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center border border-yellow-500 text-base sm:text-lg md:text-xl mx-auto mt-2 w-[6cm] min-w-[6cm] max-w-[6cm]"
        >
          <Link href="/contact" className="w-full text-center">Get Started Today</Link>
        </AnimatedButton>
      </FadeInSection>
        </div>
      </section>
      </div>
      {/* شريط متحرك في نهاية الصفحة */}
      <div className="w-screen fixed left-0 z-50 shadow border border-yellow-300 bg-white/80 py-0" style={{ height: '28px', bottom: '1cm', position: 'fixed' }}>
        <ScrollingMarquee />
    </div>
    </>
  );
}


