"use client"

import React, { useState } from "react"
import { LOGO_PATH } from '@/lib/seo'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, BookOpen, LogOut } from "lucide-react"
import Image from "next/image"
import { useUser } from "@/contexts/UserContext"

const Navigation = React.memo(function Navigation() {
  const { user, logout } = useUser()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog/articles", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ]

  const userNavItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/schedule", label: "Schedule" },
    { href: "/materials", label: "Materials" },
    { href: "/profile", label: "Profile" },
    { href: "/settings", label: "Settings" },
    { href: "/login", label: "Login" },
  ]

  return (
    <nav className="nav-enhanced sticky top-0 z-50 shadow-premium bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 group">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="logo-container flex items-center justify-center transition-all duration-300 group-hover:scale-110 min-w-[48px] sm:min-w-[64px] md:min-w-[72px]">
                <Image
                  src={LOGO_PATH}
                  alt="Al-Azhar School"
                  width={80}
                  height={80}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 1px 2px #00000033)' }}
                  priority
                />
              </div>
            </div>
            <span
              className="brand-text text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black group-hover:text-yellow-600 transition-colors duration-300"
              style={{ 
                fontWeight: 900,
                textShadow: '0 8px 32px #000000cc, 0 4px 16px #00000099, 0 2px 8px #00000066, 0 1px 2px #00000044',
                WebkitTextStroke: '1.2px #fff'
              }}
            >
              <span style={{ color: '#5a2600', fontWeight: 900 }}>Al-Azhar </span>
              <span style={{ color: '#e8b007', fontWeight: 900 }}>School</span>
            </span>
          </Link>
          <style jsx>{`
            @media (max-width: 768px) {
              .logo-container {
                width: 3rem !important;
                height: 3rem !important;
                min-width: 3rem !important;
                min-height: 3rem !important;
              }
              .brand-text {
                font-size: 1.5rem !important;
                line-height: 1.2 !important;
              }
            }
          `}</style>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm xl:text-base font-bold text-[#5a2600] hover:text-yellow-700 transition-all duration-100 hover:scale-105 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <button
                    onClick={() => window.location.href = '/dashboard'}
                    className="text-sm font-semibold text-[#5a2600] underline hover:text-green-700 transition cursor-pointer bg-transparent border-none p-0 m-0"
                    style={{ background: 'none' }}
                  >
                    Welcome, {user.name}!
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      window.location.href = '/';
                    }}
                    className="block w-fit bg-[#8B4513] text-white px-6 py-2 text-base rounded-full font-bold border border-[#654321] transition-all duration-200 shadow hover:bg-[#654321]"
                    style={{ borderWidth: '1.2px', boxShadow: '0 6px 24px #000b', fontFamily: 'Noto Serif', fontWeight: 900, letterSpacing: '1.2px' }}
                  >
                    <LogOut className="w-4 h-4 inline mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <>
              <a
                href="/login"
                className="block w-fit bg-white text-amber-600 px-6 py-2 text-base rounded-full font-bold border border-[#8B4513] transition-all duration-200 shadow hover:bg-[#ffb300] hover:text-white"
                style={{ borderWidth: '1.2px', boxShadow: '0 6px 24px #000b', fontFamily: 'Noto Serif', fontWeight: 900, letterSpacing: '1.2px' }}
              >
                Login
              </a>
            <a
              href="/contact"
              className="block w-fit bg-white text-amber-600 px-5 py-2 text-sm rounded-xl font-bold border border-[#8B4513] transition-all duration-200 shadow hover:bg-[#ffb300] hover:text-white"
              style={{ borderWidth: '1.2px', boxShadow: '0 6px 24px #000b', fontFamily: 'Noto Serif', fontWeight: 900, letterSpacing: '1.2px' }}
            >
                    Get Started
            </a>
                </>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 hover:bg-yellow-50 transition-all duration-100"
              >
                <Menu className="w-9 h-9" style={{width: '2.25rem', height: '2.25rem', minWidth: '2.25rem', minHeight: '2.25rem', maxWidth: '2.25rem', maxHeight: '2.25rem', display: 'block', margin: '0 auto', zIndex: 9999}} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] section-light">
              <div className="flex flex-col space-y-4 sm:space-y-6 mt-6">
                <div className="flex items-center space-x-2 mb-6 sm:mb-8 group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-100">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                  <span className="text-sm sm:text-base group-hover:text-yellow-600 transition-colors duration-100" style={{ textShadow: '0 0 20px rgba(0,0,0,0.3)' }}>Al-Azhar School</span>
                </div>
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-text hover:text-yellow-600 transition-all duration-100 hover:translate-x-2 hover:scale-105 text-sm sm:text-base"
                    onClick={() => setIsOpen(false)}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 mt-4 sm:mt-6">
                  {user ? (
                    <>
                      <div className="text-center p-3 bg-amber-50 rounded-xl border border-amber-200">
                        <p className="text-sm font-semibold text-[#5a2600]">
                          Welcome, {user.name}!
                        </p>
                      </div>
                      <Button
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                          window.location.href = '/';
                        }}
                        className="bg-[#8B4513] hover:bg-[#654321] text-white rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-transparent hover:bg-yellow-50 text-[#5a2600] border-[#5a2600] rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  >
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Login
                    </Link>
                  </Button>
                <Button asChild className="bg-yellow-600 hover:bg-yellow-700 text-black rounded-full hover:scale-105 hover:shadow-gold transition-all duration-300 btn-premium text-sm sm:text-base">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
})

export default Navigation
