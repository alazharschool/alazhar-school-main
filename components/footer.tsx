'use client'

import Link from "next/link"
import { Mail, MessageCircle, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import Image from "next/image"

// Custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
)

// Custom Telegram icon component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="relative overflow-hidden footer-shift-right" style={{ backgroundColor: "#e8d5b7" }}>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 footer-main-content">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Company Info with Logo */}
            <div className="md:col-span-2 space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/logo/image.png"
                    alt="Al-Azhar School"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3
                    className="text-base sm:text-lg font-black text-gray-900"
                    style={{ fontFamily: "Noto Serif", fontWeight: 900 }}
                  >
                    Al-Azhar School
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-700 font-semibold" style={{ fontFamily: "Noto Serif" }}>
                    Learn Quran Online
                  </p>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-amber-200/30">
                <p
                  className="text-sm sm:text-sm md:text-base text-gray-800 leading-relaxed"
                  style={{ fontFamily: "Noto Serif", fontWeight: 400 }}
                >
                  Learn the Holy Quran from certified Al-Azhar scholars anywhere in the world. Join thousands of
                  students in their Islamic education journey with authentic teaching methods and modern technology.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                  <span
                    className="text-sm sm:text-sm md:text-base text-gray-800"
                    style={{ fontFamily: "Noto Serif", fontWeight: 600 }}
                  >
                    al.azhar.school.london@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                  <a
                    href="https://wa.me/201023594533"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm sm:text-sm md:text-base text-gray-800 underline"
                    style={{ fontFamily: "Noto Serif", fontWeight: 600 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" className="inline-block sm:w-5 sm:h-5" style={{ marginRight: '4px' }}>
                      <g>
                        <circle cx="16" cy="16" r="16" fill="#25D366"/>
                        <path d="M16 6.667c-5.13 0-9.333 4.203-9.333 9.333 0 1.646.44 3.25 1.273 4.646l-1.36 4.973a.667.667 0 0 0 .82.82l4.973-1.36A9.26 9.26 0 0 0 16 25.333c5.13 0 9.333-4.203 9.333-9.333S21.13 6.667 16 6.667zm0 16a7.94 7.94 0 0 1-4.073-1.13.667.667 0 0 0-.5-.06l-3.36.92.92-3.36a.667.667 0 0 0-.06-.5A7.94 7.94 0 0 1 8 16c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.36-5.227c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.36.1-.48.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.54.58.2 1.04.32 1.4.42.58.18 1.1.16 1.52.1.46-.06 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" fill="#fff"/>
                      </g>
                    </svg>
                    002-01023594533
                  </a>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                  <span
                    className="text-sm sm:text-sm md:text-base text-gray-800"
                    style={{ fontFamily: "Noto Serif", fontWeight: 600 }}
                  >
                    Cairo, Egypt
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 sm:space-y-6">
              <div className="relative">
                <h4
                  className="text-sm sm:text-base font-black text-gray-900 mb-4 sm:mb-6"
                  style={{ fontFamily: "Noto Serif", fontWeight: 900 }}
                >
                  Quick Links
                </h4>
                <div className="absolute -bottom-2 left-0 w-10 sm:w-12 h-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"></div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Our Services" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/blog", label: "Blog" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm sm:text-sm md:text-base text-gray-800 hover:text-amber-700 hover:translate-x-2 transition-all duration-300 group"
                    style={{ fontFamily: "Noto Serif", fontWeight: 600 }}
                  >
                    <span className="group-hover:border-b group-hover:border-amber-700">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media & Services */}
            <div className="space-y-4 sm:space-y-6">
              <div className="relative">
                <h4
                  className="text-sm sm:text-base font-black text-gray-900 mb-4 sm:mb-6"
                  style={{ fontFamily: "Noto Serif", fontWeight: 900 }}
                >
                  Connect With Us
                </h4>
                <div className="absolute -bottom-2 left-0 w-10 sm:w-12 h-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"></div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3 sm:space-x-4 justify-center items-center mt-2">
                {[
                  { Icon: Youtube, href: "https://www.youtube.com/@Al-AzharSchool-london", label: "YouTube", color: "#FF0000" },
                  { Icon: Facebook, href: "https://www.facebook.com/al.azhar.school.2025", label: "Facebook", color: "#1877F3" },
                  { Icon: Twitter, href: "https://x.com/AlAzharSchool19", label: "Twitter", color: "#1DA1F2" },
                  { Icon: TelegramIcon, href: "https://t.me/+SN-s-3GtM6FlMWQ0", label: "Telegram", color: "#229ED9" },
                  { Icon: Instagram, href: "https://www.instagram.com/school.alazhar/", label: "Instagram", color: "#E1306C" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/al-azhar-school-a67598332", label: "LinkedIn", color: "#0077B5" },
                  { Icon: TikTokIcon, href: "https://www.tiktok.com/@alazhar.school?_t=8pt46ygpr4q&_r=1", label: "TikTok", color: "#000" },
                ].map(({ Icon, href, label, color }, idx) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#e8d5b7] rounded-full flex items-center justify-center shadow-lg"
                    style={{ 
                      color: color
                    }}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </a>
                ))}
              </div>

              {/* Services List */}
              <div className="space-y-1 sm:space-y-2">
                {["Quran Memorization", "Arabic Language", "Islamic Studies", "Tajweed Classes"].map((service) => (
                  <div
                    key={service}
                    className="text-sm sm:text-sm md:text-base text-gray-800"
                    style={{ fontFamily: "Noto Serif", fontWeight: 500 }}
                  >
                    <span>• {service}</span>
                  </div>
                ))}
                <Link
                  href="/blog/"
                  className="text-sm sm:text-sm md:text-base text-gray-800"
                  style={{ fontFamily: "Noto Serif", fontWeight: 500 }}
                >
                  <span>• Blog Page</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Gold Accent Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-6 sm:mb-8"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div
              className="text-sm sm:text-sm md:text-base text-gray-700"
              style={{ fontFamily: "Noto Serif", fontWeight: 600 }}
            >
              © 2024 Al-Azhar School. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm sm:text-sm md:text-base text-gray-700"
                style={{ fontFamily: "Noto Serif", fontWeight: 600 }}
              >
                Privacy Policy
              </Link>
                <Link
                href="/terms"
                className="text-sm sm:text-sm md:text-base text-gray-700"
                style={{ fontFamily: "Noto Serif", fontWeight: 600 }}
                >
                Terms of Service
                </Link>
                <Link
                href="/admin-login"
                className="text-sm sm:text-sm md:text-base text-red-600"
                style={{ fontFamily: "Noto Serif", fontWeight: 600 }}
                >
                Admin
                </Link>
            </div>
          </div>

      </div>
      
      {/* Custom CSS for mobile responsiveness */}
      <style jsx>{`
        @media (max-width: 640px) {
          .footer-shift-right {
            padding-right: 18px !important;
          }
        }
      `}</style>
    </footer>
  )
}
