"use client";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ post }: { post: any }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transform transition-transform duration-300"
      style={{
        border: '3px solid #8B4513',
        boxShadow: '0 4px 32px #8B451344',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        minHeight: '270px',
        maxHeight: 'none'
      }}
    >
      <div className="article-img-container relative w-full bg-gradient-to-br from-[#fffbe6] to-[#d4af37] rounded-t-2xl overflow-hidden flex items-center justify-center" style={{height:'160px',background:'#fffbe6'}}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="article-img object-cover rounded-t-2xl"
          style={{objectFit: 'cover', objectPosition: 'center', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}
        />
        <style jsx>{`
          @media (max-width: 640px) {
            .article-img-container {
              min-height: 120px !important;
              height: 120px !important;
              max-height: 120px !important;
              width: 100% !important;
              border-top-left-radius: 0.9rem !important;
              border-top-right-radius: 0.9rem !important;
            }
            .article-img {
              width: 100% !important;
              height: 100% !important;
              min-height: 120px !important;
              max-height: 120px !important;
              object-fit: cover !important;
              object-position: center !important;
              border-top-left-radius: 0.9rem !important;
              border-top-right-radius: 0.9rem !important;
              display: block !important;
            }
          }
        `}</style>
      </div>
      <div className="pt-2 pb-2 px-4 flex-1 flex flex-col justify-between">
        <h3
          className="font-bold mb-1"
          style={{
            color: "#5a2600",
            fontFamily: "Noto Serif",
            fontWeight: 900,
            fontSize: "18px !important",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            minHeight: "60px"
          }}
        >
          {post.title}
        </h3>
        <p className="text-[#a67c52] text-sm mb-1" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
          {post.excerpt}
        </p>
        <Link 
          href={`/blog/articles/${post.id}`}
          className="text-[#8B4513] font-bold hover:underline transition flex items-center gap-2 group"
          style={{ fontFamily: "Noto Serif", fontWeight: 700 }}
        >
          Read More 
        </Link>
      </div>
    </div>
  );
} 