"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Settings, 
  Eye, 
  LogOut,
  Shield,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  UserPlus,
  FileText,
  MessageSquare,
  BarChart3,
  Globe,
  Smartphone,
  Monitor
} from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [adminUsername, setAdminUsername] = useState<string>("");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Check admin session
  useEffect(() => {
    const adminSession = localStorage.getItem('adminSession');
    const username = localStorage.getItem('adminUsername');
    
    // Checking admin session
    
    if (!adminSession || !username) {
              // No admin session found, redirecting to login
      router.push('/admin-login');
      return;
    }
    
            // Admin session found, setting username
    setAdminUsername(username);
    
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminSession');
    localStorage.removeItem('adminUsername');
    router.push('/admin-login');
  };

  const handleViewPage = (page: string) => {
    window.open(`/${page}`, '_blank');
  };

  const handleViewAsStudent = (studentId: string) => {
    // In real system, this would impersonate a student
    window.open(`/dashboard?student=${studentId}`, '_blank');
  };

  // Mock data for demonstration
  const mockData = {
    totalStudents: 156,
    activeStudents: 142,
    totalTeachers: 12,
    activeClasses: 45,
    pendingRequests: 8,
    systemStatus: "Healthy",
    lastBackup: "2 hours ago",
    uptime: "99.9%"
  };

  const studentPages = [
    { name: "Dashboard", path: "dashboard", description: "Main student dashboard", status: "Active" },
    { name: "Schedule", path: "schedule", description: "Class schedule and attendance", status: "Active" },
    { name: "Materials", path: "materials", description: "Educational materials and resources", status: "Active" },
    { name: "Profile", path: "profile", description: "Student profile management", status: "Active" },
    { name: "Settings", path: "settings", description: "Account settings and password change", status: "Active" },
    { name: "Login", path: "login", description: "Student login page", status: "Active" },
                      { name: "Register", path: "register", description: "Student registration page", status: "Active" },
                  { name: "Welcome New Student", path: "welcome-new-student", description: "Welcome page for new students", status: "Active" },
                  { name: "Contact", path: "contact", description: "Contact and support page", status: "Active" },
    { name: "FAQ", path: "faq", description: "Frequently asked questions", status: "Active" },
    { name: "Blog", path: "blog", description: "Educational blog and articles", status: "Active" },
    { name: "Services", path: "services", description: "Available courses and services", status: "Active" },
    { name: "Pricing", path: "pricing", description: "Course pricing and packages", status: "Active" }
  ];

  const systemPages = [
    { name: "Admin Dashboard", path: "admin-dashboard", description: "Main admin panel", status: "Active" },
    { name: "Admin Login", path: "admin-login", description: "Admin authentication", status: "Active" },
    { name: "API Routes", path: "api", description: "Backend API endpoints", status: "Active" }
  ];

  const recentActivities = [
    { action: "Student login", user: "ahmed@example.com", time: "2 minutes ago", status: "success" },
    { action: "Password change", user: "fatima@example.com", time: "5 minutes ago", status: "success" },
    { action: "New registration", user: "omar@example.com", time: "10 minutes ago", status: "pending" },
    { action: "Class attendance", user: "mohamed@example.com", time: "15 minutes ago", status: "success" },
    { action: "System backup", user: "System", time: "2 hours ago", status: "success" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {adminUsername}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Current Time</p>
                <p className="text-sm font-semibold text-gray-900">
                  {currentTime.toLocaleTimeString()}
                </p>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-red-200 text-red-700 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">{mockData.totalStudents}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Students</p>
                  <p className="text-2xl font-bold text-gray-900">{mockData.activeStudents}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Classes</p>
                  <p className="text-2xl font-bold text-gray-900">{mockData.activeClasses}</p>
                </div>
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">System Status</p>
                  <p className="text-2xl font-bold text-gray-900">{mockData.systemStatus}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student Pages */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Student Pages Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {studentPages.map((page) => (
                    <div key={page.path} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{page.name}</h3>
                        <Badge variant={page.status === "Active" ? "default" : "secondary"}>
                          {page.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{page.description}</p>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleViewPage(page.path)}
                          size="sm"
                          variant="outline"
                          className="flex-1"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View Page
                        </Button>
                        <Button
                          onClick={() => handleViewAsStudent("demo-student")}
                          size="sm"
                          variant="outline"
                          className="flex-1"
                        >
                          <UserPlus className="w-3 h-3 mr-1" />
                          Test as Student
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Info & Activities */}
          <div className="space-y-6">
            {/* System Pages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-purple-600" />
                  System Pages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemPages.map((page) => (
                    <div key={page.path} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{page.name}</h4>
                        <p className="text-sm text-gray-600">{page.description}</p>
                      </div>
                      <Badge variant={page.status === "Active" ? "default" : "secondary"}>
                        {page.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-2">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-600">{activity.user} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-orange-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    onClick={() => handleViewPage('dashboard')}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Monitor className="w-4 h-4 mr-2" />
                    Test Student Dashboard
                  </Button>
                  <Button
                    onClick={() => handleViewPage('login')}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Test Login Page
                  </Button>
                  <Button
                    onClick={() => handleViewPage('settings')}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Test Settings Page
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 