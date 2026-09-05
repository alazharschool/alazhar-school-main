import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";
import { FadeInSection } from "@/components/fade-in-section";
import { AnimatedButton } from "@/components/animated-button";
import { ShimmerBackground } from "@/components/shimmer-background";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <ShimmerBackground />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <FadeInSection>
            <div
              className="content-overlay max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl"
              style={{
                border: '4px solid #8B4513',
                boxShadow: '0 8px 32px #8B451344',
                borderRadius: '2rem'
              }}
            >
              <div className="text-6xl md:text-8xl font-black text-amber-600 mb-4">404</div>
              <h1 className="text-3xl md:text-4xl font-black text-[#5a2600] mb-4 text-center" style={{ fontFamily: 'Noto Serif', fontWeight: 900 }}>
                Page Not Found
              </h1>
              <p className="text-lg text-[#8b4513] font-semibold mb-8" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                عذراً، الصفحة التي تبحث عنها غير متوفرة
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <Card className="enhanced-card rounded-2xl shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Search className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What happened?</h2>
                  <p className="text-gray-600 mb-6">
                    The page you're looking for might have been moved, deleted, or you entered the wrong URL.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Popular Pages</h3>
                    <div className="space-y-2">
                      <Link href="/" className="block text-amber-600 hover:text-amber-700 font-medium">
                        Home
                      </Link>
                      <Link href="/services" className="block text-amber-600 hover:text-amber-700 font-medium">
                        Our Services
                      </Link>
                      <Link href="/about" className="block text-amber-600 hover:text-amber-700 font-medium">
                        About Us
                      </Link>
                      <Link href="/contact" className="block text-amber-600 hover:text-amber-700 font-medium">
                        Contact Us
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                    <div className="space-y-2">
                      <Link href="/login" className="block text-amber-600 hover:text-amber-700 font-medium">
                        Login to Dashboard
                      </Link>
                      <Link href="/pricing" className="block text-amber-600 hover:text-amber-700 font-medium">
                        View Pricing
                      </Link>
                      <Link href="/faq" className="block text-amber-600 hover:text-amber-700 font-medium">
                        FAQ
                      </Link>
                      <Link href="/blog" className="block text-amber-600 hover:text-amber-700 font-medium">
                        Blog
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AnimatedButton
                    asChild
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-bold"
                  >
                    <Link href="/" className="flex items-center gap-2">
                      <Home className="w-5 h-5" />
                      Go Home
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton
                    asChild
                    variant="outline"
                    className="border-amber-200 text-amber-700 hover:bg-amber-50 px-6 py-3 rounded-xl font-bold"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      <ArrowLeft className="w-5 h-5" />
                      Contact Support
                    </Link>
                  </AnimatedButton>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
} 