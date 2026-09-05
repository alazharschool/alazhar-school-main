"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, BookOpen, Video, Music, Image, File, MessageCircle, HelpCircle } from "lucide-react";
import { FadeInSection } from "@/components/fade-in-section";
import { StaggeredFadeIn } from "@/components/staggered-fade-in";
import { AnimatedButton } from "@/components/animated-button";
import { ShimmerBackground } from "@/components/shimmer-background";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MaterialsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: "all", label: "All Materials", icon: File },
    { id: "quran", label: "Quran Studies", icon: BookOpen },
    { id: "arabic", label: "Arabic Language", icon: FileText },
    { id: "islamic", label: "Islamic Studies", icon: BookOpen },
    { id: "video", label: "Video Lessons", icon: Video },
    { id: "audio", label: "Audio Files", icon: Music },
  ];

  const materials = [
    {
      id: 1,
      title: "Quran Memorization Guide",
      category: "quran",
      type: "pdf",
      size: "2.5 MB",
      downloads: 156,
      description: "Complete guide for Quran memorization with Tajweed rules",
      icon: FileText
    },
    {
      id: 2,
      title: "Arabic Alphabet Workbook",
      category: "arabic",
      type: "pdf",
      size: "1.8 MB",
      downloads: 89,
      description: "Interactive workbook for learning Arabic alphabet",
      icon: FileText
    },
    {
      id: 3,
      title: "Islamic Studies Syllabus",
      category: "islamic",
      type: "pdf",
      size: "3.2 MB",
      downloads: 234,
      description: "Comprehensive syllabus for Islamic studies course",
      icon: BookOpen
    },
    {
      id: 4,
      title: "Tajweed Rules Video",
      category: "video",
      type: "mp4",
      size: "45.2 MB",
      downloads: 67,
      description: "Video lesson covering essential Tajweed rules",
      icon: Video
    },
    {
      id: 5,
      title: "Quran Recitation Audio",
      category: "audio",
      type: "mp3",
      size: "12.8 MB",
      downloads: 123,
      description: "High-quality audio recitation of selected verses",
      icon: Music
    },
    {
      id: 6,
      title: "Islamic Calligraphy Practice",
      category: "arabic",
      type: "pdf",
      size: "4.1 MB",
      downloads: 78,
      description: "Practice sheets for Arabic calligraphy",
      icon: Image
    }
  ];

  const filteredMaterials = selectedCategory === "all" 
    ? materials 
    : materials.filter(material => material.category === selectedCategory);

  const handleDownload = async (material: any) => {
    setIsLoading(true);
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert(`${material.title} downloaded successfully!`);
    } catch (error) {
      alert("Failed to download. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactSupport = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      alert("Opening contact page...");
      router.push("/contact");
    } catch (error) {
      alert("Failed to open contact. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewFAQ = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 600));
      alert("Opening FAQ page...");
      router.push("/faq");
    } catch (error) {
      alert("Failed to open FAQ. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return FileText;
      case "mp4":
        return Video;
      case "mp3":
        return Music;
      case "jpg":
      case "png":
        return Image;
      default:
        return File;
    }
  };

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
              <h1 className="text-3xl md:text-4xl font-black text-[#5a2600] mb-4 text-center" style={{ fontFamily: 'Noto Serif', fontWeight: 900 }}>
                Learning Materials
              </h1>
              <p className="text-lg text-[#8b4513] font-semibold mb-8" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                Download educational resources to enhance your learning
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Materials Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <FadeInSection>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Filter by Category</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "border-amber-500 bg-amber-50 text-amber-700"
                        : "border-gray-200 hover:border-amber-300"
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="font-semibold">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Materials Grid */}
          <StaggeredFadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material) => {
              const FileIcon = getFileIcon(material.type);
              return (
                <Card key={material.id} className="enhanced-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-full bg-amber-100">
                        <FileIcon className="w-6 h-6 text-amber-600" />
                      </div>
                      <span className="text-xs font-medium text-gray-500 uppercase">{material.type}</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{material.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {material.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>Size: {material.size}</span>
                      <span>{material.downloads} downloads</span>
                    </div>
                    <button
                      onClick={() => handleDownload(material)}
                      disabled={isLoading}
                      className={`w-full py-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        isLoading 
                          ? "bg-gray-400 cursor-not-allowed text-gray-600" 
                          : "bg-amber-600 hover:bg-amber-700 text-white"
                      }`}
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Download className="w-4 h-4" />
                      )}
                      Download
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </StaggeredFadeIn>

          {/* Quick Actions */}
          <FadeInSection>
            <Card className="enhanced-card rounded-2xl shadow-lg mt-8">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Need Help?</CardTitle>
                <CardDescription>Get assistance with accessing materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={handleContactSupport}
                    disabled={isLoading}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 ${
                      isLoading 
                        ? "border-gray-300 bg-gray-50 cursor-not-allowed text-gray-500" 
                        : "border-amber-200 text-amber-700 hover:bg-amber-50"
                    }`}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <MessageCircle className="w-5 h-5" />
                    )}
                    Contact Support
                  </button>
                  <button
                    onClick={handleViewFAQ}
                    disabled={isLoading}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 ${
                      isLoading 
                        ? "border-gray-300 bg-gray-50 cursor-not-allowed text-gray-500" 
                        : "border-amber-200 text-amber-700 hover:bg-amber-50"
                    }`}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <HelpCircle className="w-5 h-5" />
                    )}
                    View FAQ
                  </button>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
} 