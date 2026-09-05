"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, BookOpen, CheckCircle, XCircle, Video, MessageCircle, Download, Home } from "lucide-react";
import { FadeInSection } from "@/components/fade-in-section";
import { StaggeredFadeIn } from "@/components/staggered-fade-in";
import { AnimatedButton } from "@/components/animated-button";
import { ShimmerBackground } from "@/components/shimmer-background";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SchedulePage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  // Fixed schedule - cannot be modified by users
  const weeklySchedule = [
    {
      day: "Monday",
      lessons: [
        { time: "09:00 AM", teacher: "Sheikh Ahmed", course: "Quran Memorization", status: "confirmed" },
        { time: "11:00 AM", teacher: "Ustadha Fatima", course: "Arabic Language", status: "confirmed" },
        { time: "02:00 PM", teacher: "Sheikh Omar", course: "Islamic Studies", status: "confirmed" }
      ]
    },
    {
      day: "Tuesday", 
      lessons: [
        { time: "10:00 AM", teacher: "Sheikh Ahmed", course: "Quran Memorization", status: "confirmed" },
        { time: "12:00 PM", teacher: "Ustadha Fatima", course: "Arabic Language", status: "confirmed" },
        { time: "03:00 PM", teacher: "Sheikh Omar", course: "Islamic Studies", status: "confirmed" }
      ]
    },
    {
      day: "Wednesday",
      lessons: [
        { time: "09:00 AM", teacher: "Sheikh Ahmed", course: "Quran Memorization", status: "confirmed" },
        { time: "11:00 AM", teacher: "Ustadha Fatima", course: "Arabic Language", status: "confirmed" },
        { time: "02:00 PM", teacher: "Sheikh Omar", course: "Islamic Studies", status: "confirmed" }
      ]
    },
    {
      day: "Thursday",
      lessons: [
        { time: "10:00 AM", teacher: "Sheikh Ahmed", course: "Quran Memorization", status: "confirmed" },
        { time: "12:00 PM", teacher: "Ustadha Fatima", course: "Arabic Language", status: "confirmed" },
        { time: "03:00 PM", teacher: "Sheikh Omar", course: "Islamic Studies", status: "confirmed" }
      ]
    },
    {
      day: "Friday",
      lessons: [
        { time: "09:00 AM", teacher: "Sheikh Ahmed", course: "Quran Memorization", status: "confirmed" },
        { time: "11:00 AM", teacher: "Ustadha Fatima", course: "Arabic Language", status: "confirmed" }
      ]
    }
  ];

  const upcomingLessons = [
    {
      date: "2024-01-15",
      time: "10:00 AM",
      course: "Quran Memorization",
      teacher: "Sheikh Ahmed",
      status: "confirmed",
      zoomLink: "https://zoom.us/j/123456789?pwd=AlAzhar2024"
    },
    {
      date: "2024-01-16",
      time: "02:00 PM",
      course: "Arabic Language",
      teacher: "Ustadha Fatima",
      status: "confirmed",
      zoomLink: "https://zoom.us/j/987654321?pwd=AlAzhar2024"
    },
    {
      date: "2024-01-17",
      time: "11:00 AM",
      course: "Islamic Studies",
      teacher: "Sheikh Omar",
      status: "confirmed",
      zoomLink: "https://zoom.us/j/456789123?pwd=AlAzhar2024"
    }
  ];

  const handleJoinLesson = async (lesson: any) => {
    setIsLoading(true);
    try {
      // Check if it's lesson time (within 10 minutes before or after)
      const now = new Date();
      const lessonTime = new Date(`${lesson.date} ${lesson.time}`);
      const timeDiff = Math.abs(now.getTime() - lessonTime.getTime()) / (1000 * 60); // minutes
      
      if (timeDiff <= 10) {
        // Open Zoom link
        window.open(lesson.zoomLink, '_blank');
        alert(`Joining Zoom lesson with ${lesson.teacher}...`);
      } else {
        alert(`⚠️ Lesson is not active yet.\n\n📅 Date: ${lesson.date}\n⏰ Time: ${lesson.time}\n\nPlease join only during the scheduled lesson time.`);
      }
    } catch (error) {
      alert("Failed to join lesson. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadMaterials = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Opening materials page...");
      router.push("/materials");
    } catch (error) {
      alert("Failed to open materials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewDashboard = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 600));
      alert("Opening dashboard...");
      router.push("/dashboard");
    } catch (error) {
      alert("Failed to open dashboard. Please try again.");
    } finally {
      setIsLoading(false);
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
                Weekly Schedule
              </h1>
              <p className="text-lg text-[#8b4513] font-semibold mb-8" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                View your fixed weekly lesson schedule
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Weekly Schedule */}
            <div className="lg:col-span-2">
              <FadeInSection>
                <Card className="enhanced-card rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                      <Calendar className="w-6 h-6 text-amber-600 mr-2" />
                      Weekly Schedule
                    </CardTitle>
                    <CardDescription>Your fixed weekly lesson schedule (read-only)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {weeklySchedule.map((day, dayIndex) => (
                        <div key={dayIndex} className="border rounded-xl p-4 hover:shadow-md transition-all duration-300">
                          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <Calendar className="w-5 h-5 text-amber-600 mr-2" />
                            {day.day}
                          </h3>
                          <div className="space-y-3">
                            {day.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-4">
                                  <div className="text-center">
                                    <Clock className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                                    <span className="text-sm font-semibold text-gray-900">{lesson.time}</span>
                                  </div>
                                  <div className="flex-1">
                                    <p className="font-semibold text-gray-900">{lesson.course}</p>
                                    <p className="text-sm text-gray-600 flex items-center">
                                      <User className="w-3 h-3 mr-1" />
                                      {lesson.teacher}
                                    </p>
                                  </div>
                                </div>
                            <div className="flex items-center">
                                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                  <span className="text-sm text-green-700 font-medium">Confirmed</span>
                            </div>
                          </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>

            {/* Upcoming Lessons */}
            <div>
              <FadeInSection>
                <Card className="enhanced-card rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                      <Clock className="w-6 h-6 text-amber-600 mr-2" />
                      Upcoming Lessons
                    </CardTitle>
                    <CardDescription>Join your scheduled lessons via Zoom</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingLessons.map((lesson, index) => (
                      <div key={index} className="border rounded-xl p-4 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">{lesson.date}</span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            {lesson.status}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-gray-900">{lesson.time}</p>
                          <p className="text-sm text-gray-600">{lesson.course}</p>
                          <p className="text-sm text-gray-600">Teacher: {lesson.teacher}</p>
                        </div>
                        <div className="mt-3">
                          <button
                            onClick={() => handleJoinLesson(lesson)}
                            disabled={isLoading}
                            className={`w-full py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1 border-2 ${
                              isLoading 
                                ? "border-gray-300 bg-gray-50 cursor-not-allowed text-gray-500" 
                                : "border-amber-200 text-amber-700 hover:bg-amber-50"
                            }`}
                          >
                            {isLoading ? (
                              <div className="w-3 h-3 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <Video className="w-3 h-3" />
                            )}
                            Join Zoom Lesson
                          </button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </FadeInSection>

              {/* Quick Actions */}
              <FadeInSection>
                <Card className="enhanced-card rounded-2xl shadow-lg mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <button
                      onClick={handleDownloadMaterials}
                      disabled={isLoading}
                      className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 ${
                        isLoading 
                          ? "border-gray-300 bg-gray-50 cursor-not-allowed text-gray-500" 
                          : "border-amber-200 text-amber-700 hover:bg-amber-50"
                      }`}
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Download className="w-5 h-5" />
                      )}
                      Download Materials
                    </button>
                    
                    <button
                      onClick={handleViewDashboard}
                      disabled={isLoading}
                      className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 ${
                        isLoading 
                          ? "border-gray-300 bg-gray-50 cursor-not-allowed text-gray-500" 
                          : "border-amber-200 text-amber-700 hover:bg-amber-50"
                      }`}
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Home className="w-5 h-5" />
                      )}
                      View Dashboard
                    </button>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 