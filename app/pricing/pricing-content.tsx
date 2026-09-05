"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Users, Gift } from "lucide-react"
import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { StaggeredFadeIn } from "@/components/staggered-fade-in"
import { AnimatedButton } from "@/components/animated-button"
import { ShimmerBackground } from "@/components/shimmer-background"
import { useState } from "react"

export default function PricingPage() {
  const [move, setMove] = useState(false)

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/islamic-pattern-new.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center"
      }}
    >
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <ShimmerBackground />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <FadeInSection>
            <div
              className={`content-overlay max-w-4xl mx-auto bg-white rounded-3xl p-8 transition-all duration-500 ${move ? 'animate-shake' : ''}`}
              onClick={() => { setMove(true); setTimeout(() => setMove(false), 600); }}
              style={{
                cursor: 'pointer',
                marginTop: '1cm',
                border: '3px solid #5a2600',
                boxShadow: '0 8px 32px 0 #5a260088, 0 2px 8px #5a260044'
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                  fontFamily: 'Noto Serif',
                  fontWeight: 900,
                  color: '#fff',
                  lineHeight: 1.2,
                  marginTop: '0.2cm',
                  marginBottom: '0.4cm',
                  WebkitTextStroke: '0.8px #5a2600',
                  textShadow: '0 16px 64px #000c, 0 8px 32px #000a, 0 4px 16px #0008',
                }}
              >
                Simple, Transparent Pricing
              </div>
              <p className="text-sm text-gray-600"
                style={{ marginTop: '0', marginBottom: '0.2cm', lineHeight: '1.6', color: '#5a2600' }}
              >
                Choose the plan that works best for your learning journey. All plans include access to certified
                Al-Azhar teachers.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <StaggeredFadeIn className="grid md:grid-cols-3 gap-8">
            {/* Quran Memorization */}
            <Card className="enhanced-card rounded-3xl overflow-hidden shadow-lg transition-all duration-700 cursor-pointer hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2 hover:scale-110 hover:animate-pulse">
              <CardHeader className="bg-gradient-to-br from-amber-100/80 to-orange-100/80 pb-8">
                <div className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">Basic</CardTitle>
                  <CardDescription className="text-sm text-gray-600">Ideal for beginners who want to try and get familiar with the system.</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-2xl font-bold text-amber-600 mb-2 hover:scale-110 transition-transform duration-300">
                    $8
                  </div>
                  <div className="text-gray-600 mb-4">per lesson</div>
                  <div className="content-overlay-light">
                    <div className="text-xl font-bold text-amber-600">$32</div>
                    <div className="text-gray-600">per month</div>
                    <div className="text-sm text-gray-500">(4 Lessons)</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700"> 4 sessions x 60 minutes</span>
                  </div>
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">Total hours: 4 hours</span>
                  </div>
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">Price per session: $8</span>
                  </div>
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700"> Total price: 4 x 8 = $32</span>
                  </div>
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">Certificate upon completion</span>
                  </div>
                </div>

                <AnimatedButton
                  asChild
                  animation="bounce"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full text-sm"
                >
                  <Link href="/contact">Register Now</Link>
                </AnimatedButton>
              </CardContent>
            </Card>

            {/* Arabic Language */}
            <Card className="enhanced-card rounded-3xl overflow-hidden shadow-lg transition-all duration-700 cursor-pointer hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2 hover:scale-110 hover:animate-pulse relative">
              <Badge className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full animate-pulse">
                Most Popular
              </Badge>
              <CardHeader className="bg-gradient-to-br from-amber-200/80 to-orange-200/80 pb-8">
                <div className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">Standard</CardTitle>
                  <CardDescription className="text-sm text-gray-600">Suitable for continuing learners who want consistency while saving.</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-2xl font-bold text-amber-600 mb-2 hover:scale-110 transition-transform duration-300">
                    $7
                  </div>
                  <div className="text-gray-600 mb-4">per lesson</div>
                  <div className="text-center mb-8">
                    <div className="inline-block bg-amber-50 border border-amber-200 rounded-xl px-20 py-6 shadow hover:shadow-md transition">
                      <div className="flex items-center justify-center space-x-2 mb-1">
                        <div className="text-xl font-bold text-gray-500 line-through">$64</div> 
                        <div className="text-xl font-bold text-amber-600">$56</div>
                      </div>
                      <div className="text-gray-600">per month</div>
                      <div className="text-sm text-gray-500">(10 lessons)</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">8 sessions x 60 minutes</span>
                  </div>
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">Total hours: 8 hours</span>
                  </div>
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">Price per session: $8</span>
                  </div>
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">Original price: 8 x 8 = $64</span>
                  </div>
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">Special discount: Price after discount = $56</span>
                  </div>
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">Certificate upon completion</span>
                  </div>
                </div>

                <AnimatedButton
                  asChild
                  animation="bounce"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full text-sm"
                >
                  <Link href="/contact">Register Now</Link>
                </AnimatedButton>
              </CardContent>
            </Card>

            {/* Islamic Studies */}
            <Card className="enhanced-card rounded-3xl overflow-hidden shadow-lg transition-all duration-700 cursor-pointer hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2 hover:scale-110 hover:animate-pulse">
              <CardHeader className="bg-gradient-to-br from-amber-100/80 to-orange-100/80 pb-8">
                <div className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">Premium</CardTitle>
                  <CardDescription className="text-sm text-gray-600">Ideal for serious students who want rapid and consistent progress.</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-2xl font-bold text-amber-600 mb-2 hover:scale-110 transition-transform duration-300">
                    $8
                  </div>
                  <div className="text-gray-600 mb-4">per lesson</div>
                  <div className="content-overlay-light">
                    <div className="text-xl font-bold text-amber-600">$96</div>
                    <div className="text-gray-600">per month</div>
                    <div className="text-sm text-gray-500">(12 lessons)</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">12 sessions x 60 minutes</span>
                  </div>
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">Total hours: 12 hours</span>
                  </div>
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">Session price: $8</span>
                  </div>
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">Total price: 12 x 8 = $96</span>
                  </div>
                  <div className="flex items-center group">
                    <Check className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">Certificate upon completion</span>
                  </div>
                </div>

                <AnimatedButton
                  asChild
                  animation="bounce"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full text-sm"
                >
                  <Link href="/contact">Register Now</Link>
                </AnimatedButton>
              </CardContent>
            </Card>
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 px-4 section-light">
        <div className="max-w-6xl mx-auto">
          <StaggeredFadeIn className="grid md:grid-cols-2 gap-8">
            <Card className="enhanced-card rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-black/40 hover:animate-pulse">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Family Discount</h3>
                <p className="text-gray-600 mb-4">
                  Register multiple family members and save up to 20% on monthly packages.
                </p>
                <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-full animate-pulse">
                  Up to 20% Off
                </Badge>
              </CardContent>
            </Card>

            <Card className="enhanced-card rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-black/40 hover:animate-pulse">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Group Classes</h3>
                <p className="text-gray-600 mb-4">
                  Join group classes with friends and enjoy reduced rates while learning together.
                </p>
                <Badge className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full animate-pulse">15% Off</Badge>
              </CardContent>
            </Card>
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <div className="content-overlay"
              style={{
                border: '3px solid #5a2600',
                boxShadow: '0 8px 32px 0 #5a260088, 0 2px 8px #5a260044',
                borderRadius: '1.5rem',
                background: 'white',
                padding: '2rem',
              }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-8">Payment Methods</h2>
              <p className="text-sm text-gray-600 mb-6">We accept various payment methods for your convenience:</p>
              <div className="grid md:grid-cols-3 gap-6 text-gray-700">
                <div className="group">
                  <div className="font-semibold mb-2 group-hover:text-amber-600 transition-colors duration-200">
                    Credit/Debit Cards
                  </div>
                  <div className="text-sm">Visa, Mastercard, American Express</div>
                </div>
                <div className="group">
                  <div className="font-semibold mb-2 group-hover:text-amber-600 transition-colors duration-200">
                    Digital Wallets
                  </div>
                  <div className="text-sm">PayPal, Apple Pay, Google Pay</div>
                </div>
                <div className="group">
                  <div className="font-semibold mb-2 group-hover:text-amber-600 transition-colors duration-200">
                    Bank Transfer
                  </div>
                  <div className="text-sm">Direct bank transfers accepted</div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="py-20 px-4 text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: 'url(/backgrund1.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInSection>
            <div
              className="bg-white/90 text-[#5a2600] rounded-2xl p-8 shadow-lg w-full"
              style={{
                border: '4px solid #8B4513', // بني داكن
                boxShadow: '0 4px 32px #8B451344', // ظل بني خفيف
                padding: '2.5rem 1.5rem'
              }}
            >
              <h2>Register Now</h2>
              <p>Start your Islamic education journey today with our affordable and flexible pricing plans.</p>
              <a
                href="/pricing"
                className="block w-fit mx-auto bg-white text-amber-600 px-8 py-4 text-lg rounded-full font-bold border border-[#8B4513] transition-all duration-200 hover:bg-[#ffb300] hover:text-white"
                style={{ borderWidth: '1.2px', boxShadow: '0 6px 24px #000b', fontFamily: 'Noto Serif', fontWeight: 900 }}
              >
                Choose Your Plan
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
