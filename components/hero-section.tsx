"use client"

import { LOGO_PATH } from '@/lib/seo'
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollingMarquee from "@/components/scrolling-marquee";

// Custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
)

// Custom Telegram icon component (circle blue with white paper plane)
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <circle cx="20" cy="20" r="20" fill="#229ED9" />
    <path d="M30.5 11.5L8.5 19.5C7.5 19.8333 7.5 20.5 8.33333 20.75L13.5 22.25L27.5 14.5C28.1667 14.1667 28.8333 14.3333 28.3333 14.8333L16.5 25.5V29.5C16.5 30.1667 17.1667 30.5 17.6667 30.1667L21.1667 27.6667L26.5 31.5C27.1667 32 28 31.6667 28 30.8333V12.5C28 11.6667 29 11.3333 29.5 12L30.5 11.5Z" fill="#fff"/>
  </svg>
)

export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle radial glow behind logo */}
      <div 
        className="hero-radial-glow hidden lg:block"
        style={{
          top: '20%',
          right: '10%',
        }}
      />
      
      {/* Main Hero Content */}
      <main
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20 overflow-visible"
        style={{
          minHeight: "100vh",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-20 items-center">
            {/* Left Side Content */}
            <div className="space-y-5 sm:space-y-7 lg:space-y-8 relative mt-0 sm:mt-0">
              {/* Greeting */}
              <div style={{ position: 'relative', animationDelay: '0.4s' }} className="hero-entrance">
                <p
                  className="assalam-alikom-title text-black mb-2 text-center lg:text-left text-lg sm:text-xl md:text-2xl"
                  style={{
                    fontFamily: "Noto Serif",
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    textShadow: '0 1px 3px rgba(255, 255, 255, 0.8)',
                  }}
                >
                  Assalam Alikom
                </p>
                <style>{`
                  .assalam-alikom-title {
                    font-size: 1.25rem !important;
                    text-shadow: 1px 1px 4px #fff !important;
                  }
                  @media (min-width: 640px) {
                    .assalam-alikom-title { font-size: 1.5rem !important; }
                  }
                  @media (min-width: 768px) {
                    .assalam-alikom-title { font-size: 2rem !important; }
                  }
                `}</style>
              </div>

              {/* Main Title */}
              <div className="hero-entrance" style={{ animationDelay: '0.6s' }}>
                <h1
                  className="hero-main-title text-center lg:text-left text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black"
                  style={{
                    fontFamily: 'var(--font-amiri), Amiri, serif',
                    fontWeight: 700,
                    color: '#d4af37',
                    letterSpacing: '0.05em',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.3)',
                    lineHeight: 1.15,
                  }}
                >
                  Master Quran Recitation & Arabic with Certified Al-Azhar Tutors
                </h1>
              </div>
              <style jsx>{`
                @media (max-width: 768px) {
                  .hero-main-title {
                    font-size: 2.5rem !important;
                    line-height: 1.1 !important;
                  }
                }
              `}</style>

              {/* Subheading */}
              <div className="hero-entrance" style={{ animationDelay: '1.0s' }}>
                <p
                  className="text-sm sm:text-base md:text-lg text-[#f8fafc] leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
                  style={{
                    fontFamily: "var(--font-cairo), Cairo, sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                    textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
                    lineHeight: 1.7,
                  }}
                >
                  Learn Quran online with certified Al-Azhar teachers.<br/>
                  Flexible online Quran classes for kids and adults.<br/>
                  Study Tajweed, Hifz, and Quran recitation anytime, anywhere. Affordable private and group Quran lessons tailored for non-Arabic speakers.<br/>
                  Discover modern Quran e-learning with native Arabic tutors and build a strong connection to the Holy Quran from home.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="hero-entrance flex items-center justify-center lg:justify-start space-x-2 sm:space-x-4" style={{ animationDelay: '1.2s' }}>
                <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 flex-wrap justify-center lg:justify-start">
                  {[
                    { Icon: Youtube, href: "https://www.youtube.com/@Al-AzharSchool-london", color: "#FF0000" },
                    { Icon: Facebook, href: "https://www.facebook.com/al.azhar.school.2025", color: "#1877F3" },
                    { Icon: Twitter, href: "https://x.com/AlAzharSchool19", color: "#1DA1F2" },
                    { Icon: TelegramIcon, href: "https://t.me/+SN-s-3GtM6FlMWQ0", color: "#229ED9" },
                    { Icon: Instagram, href: "https://www.instagram.com/school.alazhar/", color: "#E1306C" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/al-azhar-school-a67598332", color: "#0077B5" },
                    { Icon: TikTokIcon, href: "https://www.tiktok.com/@alazhar.school?_t=8pt46ygpr4q&_r=1", color: "#000" },
                  ].map(({ Icon, href, color }, index) => (
                    <Link
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 border-[#5a2600] bg-[#fde6c3] rounded-full flex items-center justify-center shadow-[0_4px_16px_#c9a063,0_1.5px_0_#fff_inset] hover:shadow-lg hover:shadow-black/30 hover:scale-105 hover:rotate-6 active:scale-95 transition-all duration-300 will-change-transform animate-social-fadein"
                      style={{ color: color || '#000', animationDelay: `${index * 0.1 + 0.2}s` }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main CTA Button */}
              <div className="hero-entrance flex justify-center lg:justify-start mt-3 sm:mt-4" style={{ animationDelay: '1.2s' }}>
                <Link
                  href="/contact"
                  className="font-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full border transition-all duration-300 hover:scale-102 hover:shadow-xl w-full sm:w-auto flex items-center justify-center"
                  style={{
                    fontFamily: "var(--font-amiri), Amiri, serif",
                    fontWeight: 700,
                    background: '#D4AF37',
                    color: '#0D1F19',
                    border: '2px solid #D4AF37',
                    boxShadow: '0 4px 16px rgba(212, 175, 55, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Right Side - Logo + Learn Quran Online + Divider */}
            <div className="flex flex-col items-center justify-center order-first lg:order-last w-full mt-4 sm:mt-0 hero-entrance" style={{ animationDelay: '0.2s' }}>
                <div className="logo-float-premium logo-glow transition-all duration-500 hover:scale-103 hover:rotate-1 cursor-pointer">
                  <Image
                    src={LOGO_PATH}
                    alt="Al-Azhar School"
                    width={520}
                    height={270}
                    className="hero-logo w-40 sm:w-[220px] md:w-[320px] lg:w-[420px] xl:w-[520px] max-w-full h-auto object-contain"
                    priority
                    unoptimized
                  />
                </div>
                <style jsx>{`
                  @media (max-width: 768px) {
                    .hero-logo {
                      width: 18rem !important;
                      min-width: 18rem !important;
                    }
                  }
                  .hover\:scale-103:hover {
                    transform: scale(1.03) rotate(1deg);
                  }
                  .hover\:scale-102:hover {
                    transform: scale(1.02);
                  }
                `}</style>
              <span
                className="hero-subtitle block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-center mt-3 sm:mt-4 hero-entrance"
                style={{
                  fontFamily: 'var(--font-amiri), Amiri, serif',
                  color: '#d4af37',
                  WebkitTextStroke: '0.8px #0d1f19',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.3)',
                  letterSpacing: '0.05em',
                  whiteSpace: 'normal',
                  margin: '0 0 8px 0',
                  display: 'block',
                  animationDelay: '0.8s',
                }}
              >
                Learn Quran Online
              </span>
              <style jsx>{`
                @media (max-width: 768px) {
                  .hero-subtitle {
                    font-size: 1.5rem !important;
                    line-height: 1.2 !important;
                  }
                }
                @keyframes divider-fadein {
                  0% { opacity: 0; transform: translateY(20px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
              `}</style>
              <img 
                src="/LINE3.svg" 
                alt="divider" 
                className="hidden sm:block hero-entrance"
                style={{ 
                  display: 'block', 
                  marginTop: '8px',
                  width: 'fit-content', 
                  maxWidth: '100%', 
                  height: '36px', 
                  objectFit: 'contain',
                  filter: 'brightness(1.05) sepia(0.8) hue-rotate(-15deg) saturate(6) contrast(1.1) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
                  position: 'static',
                  opacity: 0,
                  animation: 'divider-fadein 1s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards',
                }} 
              />
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Elements - Subtle and refined */}
      <div className="hidden sm:block absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 border border-[#e8b007]/10 rotate-45 rounded-lg" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-20 h-20 sm:w-24 sm:h-24 border border-[#e8b007]/10 rotate-12 rounded-lg" style={{ animation: 'float 9s ease-in-out infinite 1s' }}></div>
      <div className="hidden sm:block absolute top-1/2 left-20 w-2 h-2 bg-[#e8b007]/20 rounded-full" style={{ animation: 'float 6s ease-in-out infinite 0.5s' }}></div>
      <div className="hidden sm:block absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#e8b007]/20 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 0.7s' }}></div>
    </div>
  )
}
