"use client";

import ArticleCard from "@/components/article-card";

export default function ArabicLanguagePage() {
  // بيانات المقال (يمكنك تعديلها لاحقًا أو جلبها من API)
  const post = {
    id: "arabic-language",
    title: "Learn Arabic Language: From Letters to Fluency",
    excerpt: "Learn Arabic step by step — from mastering the alphabet to speaking confidently. With expert Al-Azhar-certified teachers and flexible online lessons, unlock the beauty and depth of Arabic at your own pace.",
    image: "/najad-arabic-.jpg" // استخدام صورة موجودة بالفعل في المشروع
  };

  if (!post || !post.id) {
    // في حال لم تتوفر البيانات لأي سبب
    return <div className="text-center py-20 text-red-600 font-bold">المقال غير متوفر حالياً</div>;
  }

  return (
    <ArticleCard post={post} key={post.id} />
  );
} 