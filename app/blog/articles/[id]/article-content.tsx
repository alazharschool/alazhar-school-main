"use client";

import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { FadeInSection } from "@/components/fade-in-section"
import { AnimatedButton } from "@/components/animated-button"
import Link from "next/link"
import type { Article } from "@/lib/articles"

export default function ArticlePageContent({ article }: { article: Article }) {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link href="/blog/articles">
          <AnimatedButton
            variant="ghost"
            className="flex items-center gap-2 text-[#8b4513] hover:text-[#5a2600]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </AnimatedButton>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <FadeInSection>
          <div className="mb-8">
            <div className="relative w-full aspect-[3/2] rounded-t-2xl overflow-hidden mb-6" style={{minHeight:'140px', maxHeight:'260px', background:'#f8f3eb'}}>
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover w-full h-full rounded-t-2xl"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: '1.5rem',
                  borderTopRightRadius: '1.5rem',
                  background: '#f8f3eb'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#8b4513] mb-4">
              <div className="flex items-center gap-2 group">
                <div className="icon-3d w-5 h-5 group-hover:scale-110 transition-transform duration-300" style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                  transform: "perspective(1000px) rotateX(5deg)"
                }}>
                  <Calendar className="w-4 h-4" />
                </div>
                <span>{new Date(article.publishDate).toLocaleDateString('en-GB')}</span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="icon-3d w-5 h-5 group-hover:scale-110 transition-transform duration-300" style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                  transform: "perspective(1000px) rotateX(5deg)"
                }}>
                  <Clock className="w-4 h-4" />
                </div>
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="icon-3d w-5 h-5 group-hover:scale-110 transition-transform duration-300" style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                  transform: "perspective(1000px) rotateX(5deg)"
                }}>
                  <User className="w-4 h-4" />
                </div>
                <span>{article.author}</span>
              </div>
            </div>

            <h1 className="font-bold mb-4" style={{ 
              fontFamily: "Noto Serif", 
              fontWeight: 900, 
              fontSize: "36px !important",
              color: "white",
              textShadow: "3px 3px 0px rgba(0,0,0,0.7), 4px 4px 12px rgba(0,0,0,0.6), 6px 6px 16px rgba(0,0,0,0.5)",
              lineHeight: "1.4"
            }}>
              {article.title}
            </h1>

            <p className="text-lg text-[#8b4513] mb-6 leading-relaxed" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
              {article.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, idx) => (
                <span key={idx} className="bg-amber-50 text-[#8b4513] px-3 py-1 rounded-full text-sm font-bold border border-[#8b4513]" style={{
                  boxShadow: "0 2px 4px rgba(139, 69, 19, 0.3)"
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <>
            <style>{`
              .article-content-small, .article-content-small h1, .article-content-small h2, .article-content-small h3, .article-content-small h4, .article-content-small h5, .article-content-small h6, .article-content-small p, .article-content-small li, .article-content-small ul, .article-content-small ol, .article-content-small blockquote {
                font-size: 110% !important;
              }
            `}</style>
            <div 
              className="prose prose-lg max-w-none mb-12 article-content-small"
              style={{ fontFamily: "Noto Serif" }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </>
        </FadeInSection>

        <FadeInSection>
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-8 text-center" style={{
            backgroundImage: "url('/islamic.svg'), linear-gradient(to right, #f59e42, #ff9800)",
            backgroundSize: "cover, cover",
            backgroundPosition: "center, center",
            backgroundRepeat: "no-repeat, no-repeat",
            border: "3px solid #8B4513"
          }}>
            <h2 className="font-bold mb-4" style={{ 
              fontFamily: "Noto Serif", 
              fontWeight: 900, 
              fontSize: "30px !important",
              color: "white",
              textShadow: "3px 3px 0px #8B4513, 4px 4px 12px rgba(0,0,0,0.9), 6px 6px 16px rgba(0,0,0,0.7)",
              lineHeight: "1.4"
            }}>
              Ready to Start Your Islamic Learning Journey?
            </h2>
            <p className="text-lg mb-6 opacity-90" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
              Join our community of learners and discover the beauty of Islamic education with certified Al-Azhar scholars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                asChild
                size="lg"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-full"
              >
                <Link href="/register">Get Started Today</Link>
              </AnimatedButton>
              <AnimatedButton
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-full"
              >
                <Link href="/contact">Contact Us</Link>
              </AnimatedButton>
            </div>
          </div>
        </FadeInSection>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .relative.w-full.aspect-\\[3\\/2\\] {
            min-height: 120px !important;
            max-height: 180px !important;
            height: 38vw !important;
          }
          .object-cover.w-full.h-full.rounded-t-2xl {
            min-height: 120px !important;
            max-height: 180px !important;
            height: 38vw !important;
            border-top-left-radius: 1.2rem !important;
            border-top-right-radius: 1.2rem !important;
          }
        }
      `}</style>
    </div>
  )
}
