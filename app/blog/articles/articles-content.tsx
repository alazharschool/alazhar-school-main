"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, Tag, ArrowRight, Search, Filter } from "lucide-react"
import Image from "next/image"
import { FadeInSection } from "@/components/fade-in-section"
import { StaggeredFadeIn } from "@/components/staggered-fade-in"
import { ShimmerBackground } from "@/components/shimmer-background"
import { AnimatedButton } from "@/components/animated-button"
import Link from "next/link"
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Footer from '../../../components/footer';

// Sample articles data
const articles = [
  {
    id: "islamic-values-children",
    title: "Instilling Islamic Values in Children: A Parent's Guide",
    excerpt: "Learn effective methods for teaching Islamic values to children in a way that's engaging, age-appropriate, and meaningful for their spiritual development.",
    coverImage: "/blog-44.jpg",
    author: "Parenting Experts",
    publishDate: "2025-01-01",
    readTime: "9 min read",
    category: "Parenting",
    tags: ["Islamic values", "parenting", "children", "spiritual development"],
    featured: true
  },
  {
    id: "learn-quran-online",
    title: "The Importance of Learning and Memorizing the Holy Quran Online",
    excerpt: "In today's fast-paced, connected world, learning the Holy Quran online has become an essential choice for Muslims everywhere. Thanks to modern technology and trusted platforms like Al-Azhar School, anyone can easily learn to recite and memorize the Quran with high quality, guided by certified teachers from Al-Azhar University.",
    coverImage: "/blog-2.jpg",
    author: "Al-Azhar Scholars",
    publishDate: "2025-02-01",
    readTime: "8 min read",
    category: "Quran Studies",
    tags: ["learn Quran online", "memorize Quran", "Al-Azhar teachers", "Tajweed"],
    featured: false
  },
  {
    id: "islamic-education-benefits",
    title: "Benefits of Islamic Education for Children in the Digital Age",
    excerpt: "Discover how modern Islamic education combines traditional values with contemporary learning methods to provide children with a balanced and meaningful educational experience.",
    coverImage: "/blog-girl.png",
    author: "Islamic Education Team",
    publishDate: "2025-03-01",
    readTime: "6 min read",
    category: "Education",
    tags: ["Islamic education", "children", "digital learning", "character building", "online Quran classes", "Al-Azhar teachers"],
    featured: false
  },
  {
    id: "tajweed-mastery",
    title: "Mastering Tajweed: The Art of Beautiful Quran Recitation",
    excerpt: "Learn the essential rules of Tajweed and how proper pronunciation enhances your connection with the Holy Quran. Our comprehensive guide covers everything from basic rules to advanced techniques.",
    coverImage: "/tajweed.jpg",
    author: "Quran Teachers",
    publishDate: "2025-04-01",
    readTime: "10 min read",
    category: "Quran Studies",
    tags: ["Tajweed", "Quran recitation", "pronunciation", "Islamic studies"],
    featured: false
  },
  {
    id: "ramadan-preparation",
    title: "Preparing for Ramadan: A Complete Guide for Families",
    excerpt: "Get ready for the blessed month of Ramadan with practical tips for families, including spiritual preparation, educational activities for children, and creating meaningful traditions.",
    coverImage: "/ramadan.jpg",
    author: "Islamic Scholars",
    publishDate: "2025-05-01",
    readTime: "12 min read",
    category: "Islamic Life",
    tags: ["Ramadan", "family", "spiritual preparation", "Islamic traditions"],
    featured: true
  },
  {
    id: "online-learning-tips",
    title: "Maximizing Your Online Islamic Learning Experience",
    excerpt: "Discover proven strategies to make the most of your online Islamic education journey, from creating the perfect study environment to staying motivated and engaged.",
    coverImage: "/studentboy.png",
    author: "Education Experts",
    publishDate: "2025-06-01",
    readTime: "7 min read",
    category: "Education",
    tags: ["online learning", "study tips", "motivation", "Islamic education"],
    featured: false
  },
  {
    id: "best-quran-platforms-kids",
    title: "Best Online Quran Learning Platforms for Kids",
    excerpt: "Discover the top trusted and engaging online Quran classes for children, with certified teachers and interactive tools.",
    coverImage: "/platform.jpg",
    author: "Al-Azhar School Team",
    publishDate: "2025-07-01",
    readTime: "7 min read",
    category: "Education",
    tags: ["learn Quran online for kids", "Quran classes for children", "Quran for beginners kids", "Al-Azhar teachers", "online Quran"],
    featured: false
  },
  {
    id: "learn-quran-tajweed-online",
    title: "Learn Quran Tajweed Online With Qualified Native Arabic Teachers",
    excerpt: "Master the Art of Quran Recitation with Tajweed. Learn from certified native Arabic-speaking teachers—anytime, anywhere. Perfect your pronunciation, get live correction, and enjoy flexible scheduling with modern online tools.",
    coverImage: "/tajweed.png",
    author: "Al-Azhar School",
    publishDate: "2025-08-10",
    readTime: "8 min read",
    category: "Quran Studies",
    tags: [
      "Learn Quran online",
      "Tajweed for non-Arabic speakers",
      "Arabic Quran teacher",
      "Quran teacher online",
      "Online Islamic education",
      "Virtual Quran classes",
      "Certified Tajweed tutor",
      "Read Quran for beginners",
      "Quran recitation course",
      "Zoom Quran classes",
      "Native Arabic tutor",
      "Online Tajweed lessons"
    ],
    featured: false
  }
]

const categories = [
  "All",
  "Quran Studies",
  "Education",
  "Islamic Life",
  "Parenting",
  "Tajweed"
]

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  // فلترة المقالات حسب البحث والتصنيف
  const filteredArticles = articles.filter(article => {
    const q = search.toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q) ||
      (article.tags && article.tags.some(tag => tag.toLowerCase().includes(q)));
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  function handleSubscribe(e?: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) {
    if (e) e.preventDefault();
    // تحقق من صحة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    toast({ title: "Subscribed!", description: "You have been subscribed to our newsletter." });
    setEmail("");
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <ShimmerBackground />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <FadeInSection>
            <div
              className="content-overlay max-w-4xl mx-auto rounded-3xl shadow-2xl"
              style={{
                border: '4px solid #8B4513',
                boxShadow: '0 8px 32px #8B451344',
                borderRadius: '2rem',
                backgroundImage: "url('/islamic-pattern-bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat',
                // يمكنك إضافة طبقة بيضاء شفافة فوق النقش إذا أردت تخفيفه:
                // backgroundColor: 'rgba(255,255,255,0.92)',
                // backgroundBlendMode: 'lighten',
              }}
            >
              <h1
                className="hero-title-mobile"
                style={{
                  fontFamily: 'Noto Serif',
                  fontWeight: 900,
                  color: '#fff',
                  WebkitTextStroke: '1px #8B4513',
                  textShadow: '3px 3px 6px #000',
                  fontSize: '2.5rem',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}
              >
                Islamic Articles & Insights
              </h1>
              <style jsx>{`
                @media (max-width: 768px) {
                  .hero-title-mobile {
                    WebkitTextStroke: '0px !important';
                    textShadow: 'none !important';
                  }
                }
              `}</style>
              <p className="text-sm md:text-base text-gray-600 mb-8" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                Discover valuable insights, practical tips, and spiritual guidance from our certified Al-Azhar scholars
              </p>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200"
                style={{
                  border: '2px solid #FFD700', // استروك ذهبي
                  boxShadow: '0 4px 24px 0 #0008', // شادو أسود واضح
                  borderRadius: '1.5rem',
                  background: 'rgba(255,255,255,0.92)',
                }}
              >
                <p className="text-sm md:text-base text-gray-800 leading-relaxed" style={{ fontFamily: "Noto Serif", fontWeight: 500 }}>
                  Our articles cover everything from Quran studies and Tajweed to Islamic parenting and modern education methods. 
                  Stay informed and inspired with our regularly updated content.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 w-full max-w-none mb-3 md:mb-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border-2 rounded-full focus:outline-none bg-white/90 backdrop-blur-sm"
                style={{
                  fontFamily: "Noto Serif",
                  border: '2px solid #8B4513',
                  color: '#5a2600',
                }}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full border-2 transition-colors whitespace-nowrap font-bold flex-shrink-0 ${activeCategory === category ? 'bg-[#8B4513] text-white' : ''}`}
                  style={{
                    fontFamily: "Noto Serif",
                    fontWeight: 600,
                    border: '2px solid #8B4513',
                    color: activeCategory === category ? '#fff' : '#5a2600',
                    background: activeCategory === category ? '#8B4513' : 'transparent',
                    cursor: 'pointer',
                  }}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2
              className="featured-title-mobile"
              style={{
                fontFamily: 'Noto Serif',
                fontWeight: 900,
                color: '#fff',
                WebkitTextStroke: '1px #8B4513',
                textShadow: '3px 3px 6px #000',
                fontSize: '3.2rem',
                marginBottom: '2rem',
                textAlign: 'center',
                lineHeight: 1.1,
              }}
            >
              Featured Articles
            </h2>
            <style jsx>{`
              .featured-title-mobile {
                font-size: 3.2rem !important;
              }
              @media (max-width: 768px) {
                .featured-title-mobile {
                  font-size: 2.2rem !important;
                }
              }
            `}</style>
          </FadeInSection>
          
          <StaggeredFadeIn className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredArticles.filter(article => article.featured).map((article) => (
              <Card key={article.id} className="border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-gold hover:-translate-y-2 overflow-hidden h-auto" style={{
                border: '2px solid #FFD700',
                boxShadow: '0 4px 24px 0 #0008',
                  borderRadius: '1.5rem',
                  background: '#fff',
                minHeight: '480px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}>
                <div className="relative w-full overflow-hidden rounded-t-2xl mb-6" style={{background:'#f8f3eb'}}>
                  {article.coverImage && (
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                      width={600}
                      height={400}
                      
                      className="rounded-t-2xl"
                      style={{
                        objectFit: 'cover',
                        borderTopLeftRadius: '1.5rem',
                        borderTopRightRadius: '1.5rem',
                        background: '#f8f3eb',
                      }}
                  />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </span>
                  </div>
                </div>
                <CardHeader className="bg-gradient-to-br from-amber-50/80 to-orange-50/80">
                  <div className="flex items-center gap-2 text-xs text-[#8b4513] mb-2">
                    <div className="icon-3d w-4 h-4" style={{
                      filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
                      transform: "perspective(1000px) rotateX(5deg)"
                    }}>
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span>{new Date(article.publishDate).toLocaleDateString('en-GB')}</span>
                    <div className="icon-3d w-4 h-4 ml-4" style={{
                      filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
                      transform: "perspective(1000px) rotateX(5deg)"
                    }}>
                      <Clock className="w-4 h-4" />
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg text-[#5a2600]" style={{ fontFamily: "Noto Serif", fontWeight: 900 }}>
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-[#8b4513]" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#8b4513]" />
                      <span className="text-sm text-[#8b4513]" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                        {article.author}
                      </span>
                    </div>
                    <Link href={`/blog/articles/${article.id}`}>
                      <AnimatedButton
                        size="sm"
                        className="bg-amber-600 hover:bg-amber-700 text-white"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </AnimatedButton>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2
              className="all-articles-title-mobile"
              style={{
                fontFamily: 'Noto Serif',
                fontWeight: 900,
                color: '#fff',
                WebkitTextStroke: '1px #8B4513',
                textShadow: '3px 3px 6px #000',
                fontSize: '3.5rem',
                marginBottom: '1.5rem',
                textAlign: 'center',
                lineHeight: 1.1,
              }}
            >
              All Articles
            </h2>
            <style jsx>{`
              .all-articles-title-mobile {
                font-size: 3.5rem !important;
              }
              @media (max-width: 768px) {
                .all-articles-title-mobile {
                  font-size: 2.5rem !important;
                }
              }
            `}</style>
          </FadeInSection>
          
          <StaggeredFadeIn className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-gold hover:-translate-y-2 overflow-hidden h-full"
                style={{
                  border: '2px solid #FFD700', // استروك ذهبي
                  boxShadow: '0 4px 24px 0 #0008', // شادو أسود واضح
                  borderRadius: '1.5rem',
                  background: '#fff',
                }}
              >
                <div
                  className="relative w-full overflow-hidden rounded-t-2xl mb-0"
                  style={{
                    background: '#f8f3eb',
                  }}
                >
                  {article.coverImage && (
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                      width={600}
                      height={400}
                      
                      className="rounded-t-2xl"
                      style={{
                        objectFit: 'cover',
                        borderTopLeftRadius: '1.5rem',
                        borderTopRightRadius: '1.5rem',
                        background: '#f8f3eb',
                      }}
                  />
                  )}
                  {article.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <CardHeader className="bg-gradient-to-br from-amber-50/80 to-orange-50/80">
                  <div className="flex items-center gap-2 text-xs text-[#8b4513] mb-2">
                    <div className="icon-3d w-4 h-4" style={{
                      filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
                      transform: "perspective(1000px) rotateX(5deg)"
                    }}>
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span>{new Date(article.publishDate).toLocaleDateString('en-GB')}</span>
                    <div className="icon-3d w-4 h-4 ml-4" style={{
                      filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
                      transform: "perspective(1000px) rotateX(5deg)"
                    }}>
                      <Clock className="w-4 h-4" />
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-base text-[#5a2600]" style={{ fontFamily: "Noto Serif", fontWeight: 900 }}>
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-[#8b4513] line-clamp-3" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="bg-amber-50 text-[#8b4513] px-2 py-1 rounded-full text-xs font-bold border border-[#8b4513]" style={{
                        boxShadow: "0 1px 3px rgba(139, 69, 19, 0.2)"
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#8b4513]" />
                      <span className="text-xs text-[#8b4513]" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                        {article.author}
                      </span>
                    </div>
                    <Link href={`/blog/articles/${article.id}`}>
                      <AnimatedButton
                        size="sm"
                        className="bg-amber-600 hover:bg-amber-700 text-white text-xs"
                      >
                        Read
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </AnimatedButton>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 text-white"
        style={{
          backgroundImage: "url('/islamic-pattern-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2
              className="newsletter-title-mobile"
              style={{
                fontFamily: 'Noto Serif',
                fontWeight: 900,
                color: '#fff',
                WebkitTextStroke: '1px #8B4513',
                textShadow: '3px 3px 6px #000',
                fontSize: '3.2rem',
                marginBottom: '1.5rem',
                textAlign: 'center',
                lineHeight: 1.1,
              }}
            >
              Stay Updated with Our Latest Articles
            </h2>
            <style jsx>{`
              .newsletter-title-mobile {
                font-size: 3.2rem !important;
              }
              @media (max-width: 768px) {
                .newsletter-title-mobile {
                  font-size: 2.2rem !important;
                }
              }
            `}</style>
            <p className="text-lg mb-8 opacity-90" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
              Get notified when we publish new articles about Islamic education, Quran studies, and spiritual guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
                style={{
                  fontFamily: "Noto Serif",
                  border: '2px solid #8B4513', // استروك بنى
                  color: '#5a2600',
                }}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <AnimatedButton
                size="lg"
                className="bg-white text-white hover:text-[#8B4513] hover:bg-gray-100 px-8 py-3 rounded-full transition-colors duration-200 font-bold"
                onClick={() => handleSubscribe()}
              >
                Subscribe
              </AnimatedButton>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
} 