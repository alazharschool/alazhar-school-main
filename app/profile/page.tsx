"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Settings, Edit } from "lucide-react";
import { FadeInSection } from "@/components/fade-in-section";
import { StaggeredFadeIn } from "@/components/staggered-fade-in";
import { AnimatedButton } from "@/components/animated-button";
import { ShimmerBackground } from "@/components/shimmer-background";
import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Ahmed",
    lastName: "Mohammed",
    email: "ahmed.mohammed@example.com",
    phone: "+20 123 456 7890",
    country: "Egypt",
    city: "Cairo",
    dateOfBirth: "1995-03-15",
    joinDate: "2023-09-01"
  });

  const achievements = [
    { title: "Quran Memorization", progress: 75, icon: BookOpen },
    { title: "Arabic Language", progress: 60, icon: BookOpen },
    { title: "Islamic Studies", progress: 90, icon: Award },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Handle save logic here
    // Profile saved successfully
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
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
                My Profile
              </h1>
              <p className="text-lg text-[#8b4513] font-semibold mb-8" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
                Manage your account and track your progress
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Information */}
            <div className="lg:col-span-2">
              <FadeInSection>
                <Card className="enhanced-card rounded-2xl shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold text-gray-900">Personal Information</CardTitle>
                      <Button
                        onClick={() => setIsEditing(!isEditing)}
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <Edit className="w-4 h-4" />
                        {isEditing ? "Cancel" : "Edit"}
                      </Button>
                    </div>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-700 font-semibold">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={e => handleInputChange("firstName", e.target.value)}
                          disabled={!isEditing}
                          className="border-2 border-amber-200 focus:border-amber-400 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-700 font-semibold">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={e => handleInputChange("lastName", e.target.value)}
                          disabled={!isEditing}
                          className="border-2 border-amber-200 focus:border-amber-400 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={e => handleInputChange("email", e.target.value)}
                          disabled={!isEditing}
                          className="border-2 border-amber-200 focus:border-amber-400 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={e => handleInputChange("phone", e.target.value)}
                          disabled={!isEditing}
                          className="border-2 border-amber-200 focus:border-amber-400 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-gray-700 font-semibold">Country</Label>
                        <Input
                          id="country"
                          value={profileData.country}
                          onChange={e => handleInputChange("country", e.target.value)}
                          disabled={!isEditing}
                          className="border-2 border-amber-200 focus:border-amber-400 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-gray-700 font-semibold">City</Label>
                        <Input
                          id="city"
                          value={profileData.city}
                          onChange={e => handleInputChange("city", e.target.value)}
                          disabled={!isEditing}
                          className="border-2 border-amber-200 focus:border-amber-400 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth" className="text-gray-700 font-semibold">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={profileData.dateOfBirth}
                          onChange={e => handleInputChange("dateOfBirth", e.target.value)}
                          disabled={!isEditing}
                          className="border-2 border-amber-200 focus:border-amber-400 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="joinDate" className="text-gray-700 font-semibold">Join Date</Label>
                        <Input
                          id="joinDate"
                          type="date"
                          value={profileData.joinDate}
                          disabled
                          className="border-2 border-gray-200 rounded-xl bg-gray-50"
                        />
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex gap-4 pt-4">
                        <AnimatedButton
                          onClick={handleSave}
                          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-xl"
                        >
                          Save Changes
                        </AnimatedButton>
                        <Button
                          onClick={() => setIsEditing(false)}
                          variant="outline"
                          className="px-6 py-2 rounded-xl"
                        >
                          Cancel
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>

            {/* Profile Sidebar */}
            <div className="space-y-6">
              {/* Profile Avatar */}
              <FadeInSection>
                <Card className="enhanced-card rounded-2xl shadow-lg text-center">
                  <CardContent className="p-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                      <AvatarFallback className="bg-amber-100 text-amber-700 text-2xl font-bold">
                        {profileData.firstName[0]}{profileData.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {profileData.firstName} {profileData.lastName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">Student</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Member since {new Date(profileData.joinDate).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>

              {/* Progress Overview */}
              <FadeInSection>
                <Card className="enhanced-card rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">Learning Progress</CardTitle>
                    <CardDescription>Your course completion status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <achievement.icon className="w-4 h-4 text-amber-600" />
                            <span className="text-sm font-medium">{achievement.title}</span>
                          </div>
                          <span className="text-sm font-bold text-amber-600">{achievement.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </FadeInSection>

              {/* Quick Actions */}
              <FadeInSection>
                <Card className="enhanced-card rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <AnimatedButton
                      asChild
                      variant="outline"
                      className="w-full border-amber-200 text-amber-700 hover:bg-amber-50 py-2 rounded-xl"
                    >
                      <Link href="/schedule">View Schedule</Link>
                    </AnimatedButton>
                    <AnimatedButton
                      asChild
                      variant="outline"
                      className="w-full border-amber-200 text-amber-700 hover:bg-amber-50 py-2 rounded-xl"
                    >
                      <Link href="/materials">Download Materials</Link>
                    </AnimatedButton>
                    <AnimatedButton
                      asChild
                      variant="outline"
                      className="w-full border-amber-200 text-amber-700 hover:bg-amber-50 py-2 rounded-xl"
                    >
                      <Link href="/contact">Contact Support</Link>
                    </AnimatedButton>
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