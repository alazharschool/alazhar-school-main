"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Gift,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  Target,
  TrendingUp,
  Play,
  Download,
  Settings
} from "lucide-react";

export default function WelcomeNewStudentPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const welcomeSteps = [
    {
      id: 1,
      title: "Welcome to Al-Azhar School! 🎉",
      description: "We're excited to have you join our Islamic education community",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      content: (
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome, New Student!</h2>
          <p className="text-gray-600">
            You've successfully joined Al-Azhar School. Your journey to Islamic knowledge begins now!
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h3 className="font-semibold text-amber-800 mb-2">Your Welcome Gift:</h3>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Free Quran Recitation Assessment</li>
              <li>• Personalized Learning Plan</li>
              <li>• Access to Premium Materials</li>
              <li>• 24/7 Support from Qualified Teachers</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Your Learning Journey 📚",
      description: "Discover what awaits you in your educational path",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Learning Goals</h4>
                    <p className="text-sm text-gray-600">Master Quran recitation and Tajweed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Study Schedule</h4>
                    <p className="text-sm text-gray-600">Flexible timing to suit your needs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-orange-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Teachers</h4>
                    <p className="text-sm text-gray-600">Qualified Islamic scholars</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-red-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Certification</h4>
                    <p className="text-sm text-gray-600">Recognized Islamic education certificates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4">
            <h3 className="font-semibold text-blue-800 mb-2">What You'll Learn:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Quran Recitation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Tajweed Rules</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Islamic Studies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Arabic Language</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Islamic Ethics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Memorization</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Next Steps 🚀",
      description: "Here's what happens next in your learning journey",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-green-800">Assessment Session</h4>
                <p className="text-sm text-green-700">We'll schedule a free assessment to understand your current level</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800">Personalized Plan</h4>
                <p className="text-sm text-blue-700">Based on your assessment, we'll create a customized learning plan</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-purple-50 border border-purple-200 rounded-xl">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800">Start Learning</h4>
                <p className="text-sm text-purple-700">Begin your classes with your assigned teacher</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-orange-50 border border-orange-200 rounded-xl">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800">Track Progress</h4>
                <p className="text-sm text-orange-700">Monitor your learning progress through our dashboard</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4">
            <h3 className="font-semibold text-amber-800 mb-2">Estimated Timeline:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Assessment & Planning</span>
                <Badge variant="outline">1-2 days</Badge>
              </div>
              <div className="flex justify-between">
                <span>First Class</span>
                <Badge variant="outline">Within 1 week</Badge>
              </div>
              <div className="flex justify-between">
                <span>Regular Schedule</span>
                <Badge variant="outline">2-3 weeks</Badge>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Get Started Now! 🎯",
      description: "Ready to begin your Islamic education journey?",
      icon: <Play className="w-8 h-8 text-red-500" />,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">You're All Set!</h3>
            <p className="text-gray-600 mb-6">
              Your account is ready. Here's what you can do now:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={() => router.push('/dashboard')}
              className="h-auto p-6 flex flex-col items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <GraduationCap className="w-8 h-8" />
              <div className="text-center">
                <div className="font-semibold">Go to Dashboard</div>
                <div className="text-sm opacity-90">Access your learning portal</div>
              </div>
            </Button>
            
            <Button
              onClick={() => router.push('/contact')}
              variant="outline"
              className="h-auto p-6 flex flex-col items-center gap-3 border-amber-300 text-amber-700 hover:bg-amber-50"
            >
              <MessageSquare className="w-8 h-8" />
              <div className="text-center">
                <div className="font-semibold">Contact Support</div>
                <div className="text-sm opacity-90">Get help anytime</div>
              </div>
            </Button>
            
            <Button
              onClick={() => router.push('/materials')}
              variant="outline"
              className="h-auto p-6 flex flex-col items-center gap-3 border-green-300 text-green-700 hover:bg-green-50"
            >
              <Download className="w-8 h-8" />
              <div className="text-center">
                <div className="font-semibold">Browse Materials</div>
                <div className="text-sm opacity-90">Explore learning resources</div>
              </div>
            </Button>
            
            <Button
              onClick={() => router.push('/settings')}
              variant="outline"
              className="h-auto p-6 flex flex-col items-center gap-3 border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              <Settings className="w-8 h-8" />
              <div className="text-center">
                <div className="font-semibold">Account Settings</div>
                <div className="text-sm opacity-90">Manage your profile</div>
              </div>
            </Button>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-4">
            <h3 className="font-semibold text-green-800 mb-2">Need Help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-600" />
                <span>+20 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-600" />
                <span>support@alazhar.edu.eg</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = welcomeSteps.find(step => step.id === currentStep);

  return (
    <div className="min-h-screen py-20 px-4 relative"
      style={{
        backgroundImage: 'url("/backgrund1.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white" style={{textShadow: '0 2px 8px #000'}}>
              Welcome to Al-Azhar School
            </h1>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Step {currentStep} of {welcomeSteps.length}
            </Badge>
          </div>
          <Progress value={(currentStep / welcomeSteps.length) * 100} className="h-2" />
        </div>

        {/* Main Content */}
        <Card className="rounded-2xl shadow-2xl border-2 border-amber-200 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              {currentStepData?.icon}
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              {currentStepData?.title}
            </CardTitle>
            <p className="text-gray-600">
              {currentStepData?.description}
            </p>
          </CardHeader>
          <CardContent className="p-8">
            {currentStepData?.content}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              <Button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                variant="outline"
                disabled={currentStep === 1}
                className="border-amber-200 text-amber-700 hover:bg-amber-50"
              >
                Previous
              </Button>
              
              <div className="flex gap-2">
                {welcomeSteps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      step.id === currentStep 
                        ? 'bg-amber-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              {currentStep < welcomeSteps.length ? (
                <Button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={() => router.push('/dashboard')}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Go to Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 