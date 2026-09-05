"use client";

import { useState, useEffect } from 'react';
import { useUser } from '@/contexts/UserContext';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Loader2, Users, Calendar, BookOpen, Settings, BarChart3, UserPlus, Edit, Trash2, CheckCircle2, XCircle } from 'lucide-react';
import { scheduleAPI, ScheduleData, AttendanceStats } from '@/lib/api';
import { supabaseAPI, Testimonial } from '@/lib/supabase-api';

export default function AdminPage() {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState<any[]>([]);
  const [teachers, setTeachers] = useState<any[]>([]);
  const [scheduleData, setScheduleData] = useState<ScheduleData[]>([]);
  const [stats, setStats] = useState<AttendanceStats | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(false);

  // Check if user is admin/teacher
  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    
    // For demo purposes, allow access if user has admin role
    // In production, check actual user roles
    if (user.userType !== 'admin' && user.userType !== 'teacher') {
      router.push('/dashboard');
      return;
    }
  }, [user, router]);

  // Load admin data
  useEffect(() => {
    if (user?.userType === 'admin' || user?.userType === 'teacher') {
      loadAdminData();
      loadTestimonials();
    }
  }, [user]);

  const loadAdminData = async () => {
    setLoading(true);
    try {
      // Load mock data for demo
      const mockStudents = [
        { id: '1', name: 'Ahmed Ali', email: 'ahmed@example.com', status: 'active', subjects: ['Quran', 'Tajweed'] },
        { id: '2', name: 'Fatima Hassan', email: 'fatima@example.com', status: 'active', subjects: ['Quran'] },
        { id: '3', name: 'Omar Khalil', email: 'omar@example.com', status: 'inactive', subjects: ['Islamic Studies'] }
      ];
      
      const mockTeachers = [
        { id: '1', name: 'Mohamed Mohsen', email: 'mohamed@alazhar.edu.eg', specialization: 'Quran & Tajweed', status: 'active' },
        { id: '2', name: 'Aisha Ahmed', email: 'aisha@alazhar.edu.eg', specialization: 'Islamic Studies', status: 'active' }
      ];

      setStudents(mockStudents);
      setTeachers(mockTeachers);
      
      // Load schedule and stats
      const schedule = await scheduleAPI.getStudentSchedule('demo', '8');
      const attendanceStats = await scheduleAPI.getAttendanceStats('demo', '8');
      
      setScheduleData(schedule);
      setStats(attendanceStats);
    } catch (error) {
      console.error('Error loading admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadTestimonials = async () => {
    setLoadingTestimonials(true);
    try {
      const data = await supabaseAPI.getTestimonials();
      setTestimonials(data);
    } catch (e) {
      console.error('Error loading testimonials', e);
    } finally {
      setLoadingTestimonials(false);
    }
  };

  const getStatusBadge = (status: string) => {
    return (
      <Badge variant={status === 'active' ? 'default' : 'secondary'}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-20">
            <div className="flex items-center gap-2">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span>Loading admin panel...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#8B4513] mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage students, teachers, and system settings</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Students</p>
                      <p className="text-2xl font-bold">{students.length}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Teachers</p>
                      <p className="text-2xl font-bold">{teachers.filter(t => t.status === 'active').length}</p>
                    </div>
                    <BookOpen className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Classes This Month</p>
                      <p className="text-2xl font-bold">{scheduleData.length}</p>
                    </div>
                    <Calendar className="w-8 h-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
                      <p className="text-2xl font-bold">
                        {stats ? Math.round((stats.attended / stats.total) * 100) : 0}%
                      </p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">New student registration</p>
                      <p className="text-sm text-gray-600">Ahmed Ali joined Quran class</p>
                    </div>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Schedule updated</p>
                      <p className="text-sm text-gray-600">Monday class time changed to 9 PM</p>
                    </div>
                    <span className="text-sm text-gray-500">1 day ago</span>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Attendance marked</p>
                      <p className="text-sm text-gray-600">Fatima Hassan attended Quran class</p>
                    </div>
                    <span className="text-sm text-gray-500">3 days ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Student Management</CardTitle>
                <Button>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Student
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Name</th>
                        <th className="text-left py-3 px-4 font-semibold">Email</th>
                        <th className="text-left py-3 px-4 font-semibold">Subjects</th>
                        <th className="text-left py-3 px-4 font-semibold">Status</th>
                        <th className="text-left py-3 px-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b">
                          <td className="py-3 px-4 font-medium">{student.name}</td>
                          <td className="py-3 px-4">{student.email}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-1">
                              {student.subjects.map((subject: string, index: number) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {subject}
                                </Badge>
                              ))}
                            </div>
                          </td>
                          <td className="py-3 px-4">{getStatusBadge(student.status)}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Teachers Tab */}
          <TabsContent value="teachers" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Teacher Management</CardTitle>
                <Button>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Teacher
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Name</th>
                        <th className="text-left py-3 px-4 font-semibold">Email</th>
                        <th className="text-left py-3 px-4 font-semibold">Specialization</th>
                        <th className="text-left py-3 px-4 font-semibold">Status</th>
                        <th className="text-left py-3 px-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teachers.map((teacher) => (
                        <tr key={teacher.id} className="border-b">
                          <td className="py-3 px-4 font-medium">{teacher.name}</td>
                          <td className="py-3 px-4">{teacher.email}</td>
                          <td className="py-3 px-4">{teacher.specialization}</td>
                          <td className="py-3 px-4">{getStatusBadge(teacher.status)}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Class Schedule Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Date</th>
                        <th className="text-left py-3 px-4 font-semibold">Subject</th>
                        <th className="text-left py-3 px-4 font-semibold">Teacher</th>
                        <th className="text-left py-3 px-4 font-semibold">Time</th>
                        <th className="text-left py-3 px-4 font-semibold">Status</th>
                        <th className="text-left py-3 px-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scheduleData.map((classItem) => (
                        <tr key={classItem.id} className="border-b">
                          <td className="py-3 px-4">
                            {new Date(classItem.date).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4">{classItem.subject}</td>
                          <td className="py-3 px-4">{classItem.teacher}</td>
                          <td className="py-3 px-4">{classItem.timeUK} / {classItem.timeEG}</td>
                          <td className="py-3 px-4">
                            <Badge variant={
                              classItem.status === 'attended' ? 'default' :
                              classItem.status === 'cancelled' ? 'destructive' :
                              'secondary'
                            }>
                              {classItem.status.charAt(0).toUpperCase() + classItem.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="outline" size="sm">
                              <Edit className="w-3 h-3" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Testimonials</CardTitle>
              </CardHeader>
              <CardContent>
                {loadingTestimonials ? (
                  <div className="py-8 text-center">Loading...</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">Name</th>
                          <th className="text-left py-3 px-4 font-semibold">Content</th>
                          <th className="text-left py-3 px-4 font-semibold">Rating</th>
                          <th className="text-left py-3 px-4 font-semibold">Approved</th>
                          <th className="text-left py-3 px-4 font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {testimonials.map(t => (
                          <tr key={t.id} className="border-b">
                            <td className="py-3 px-4 font-medium">{t.name}</td>
                            <td className="py-3 px-4 max-w-xl">{t.content}</td>
                            <td className="py-3 px-4">{t.rating ?? '-'}</td>
                            <td className="py-3 px-4">{t.approved ? 'Yes' : 'No'}</td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={async () => { await supabaseAPI.updateTestimonialApproval(t.id, !t.approved!); await loadTestimonials(); }}>
                                  {t.approved ? <XCircle className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                                </Button>
                                <Button variant="outline" size="sm" onClick={async () => { await supabaseAPI.deleteTestimonial(t.id); await loadTestimonials(); }}>
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">API Configuration</h3>
                    <div>
                      <Label htmlFor="api-url">API Base URL</Label>
                      <Input id="api-url" defaultValue="https://api.alazhar-school.com" />
                    </div>
                    <div>
                      <Label htmlFor="api-key">API Key</Label>
                      <Input id="api-key" type="password" defaultValue="••••••••••••••••" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">Notification Settings</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Email Notifications</span>
                        <Badge variant="default">Enabled</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Real-time Updates</span>
                        <Badge variant="default">Enabled</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Auto-refresh</span>
                        <Badge variant="default">5 minutes</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button>
                    <Settings className="w-4 h-4 mr-2" />
                    Save Settings
                  </Button>
                  <Button variant="outline">
                    Reset to Default
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 