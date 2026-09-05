"use client";

import { useState, useEffect } from 'react';
import { scheduleAPI, AttendanceStats, ScheduleData } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Loader2, Calendar, TrendingUp, TrendingDown, Users, Clock, Download } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';

export function AttendanceReports() {
  const { user } = useUser();
  const [stats, setStats] = useState<AttendanceStats | null>(null);
  const [schedule, setSchedule] = useState<ScheduleData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Load report data
  useEffect(() => {
    if (user?.email) {
      loadReportData();
    }
  }, [user?.email, selectedMonth, selectedYear]);

  const loadReportData = async () => {
    if (!user?.email) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const [statsData, scheduleData] = await Promise.all([
        scheduleAPI.getAttendanceStats(user.email, selectedMonth.toString()),
        scheduleAPI.getStudentSchedule(user.email, selectedMonth.toString())
      ]);
      
      setStats(statsData);
      setSchedule(scheduleData);
    } catch (err) {
      setError('Failed to load report data');
      console.error('Error loading reports:', err);
    } finally {
      setLoading(false);
    }
  };

  const getAttendancePercentage = () => {
    if (!stats || stats.total === 0) return 0;
    return Math.round((stats.attended / stats.total) * 100);
  };

  const getMonthName = (month: number) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month - 1];
  };

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 2; i <= currentYear + 1; i++) {
      years.push(i);
    }
    return years;
  };

  const exportReport = () => {
    if (!stats || !schedule) return;
    
    const reportData = {
      student: user?.email,
      month: getMonthName(selectedMonth),
      year: selectedYear,
      stats,
      schedule
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `attendance-report-${selectedMonth}-${selectedYear}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <Card className="w-full">
        <CardContent className="flex items-center justify-center py-8">
          <div className="flex items-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Loading attendance report...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardContent className="py-8">
          <div className="text-center text-red-600">
            <p>{error}</p>
            <Button onClick={loadReportData} className="mt-2">
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Attendance Report
            </CardTitle>
            <div className="flex gap-2">
              <Select value={selectedMonth.toString()} onValueChange={(value) => setSelectedMonth(parseInt(value))}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                    <SelectItem key={month} value={month.toString()}>
                      {getMonthName(month)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedYear.toString()} onValueChange={(value) => setSelectedYear(parseInt(value))}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {generateYears().map(year => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button onClick={exportReport} variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Classes</p>
                <p className="text-2xl font-bold">{stats?.total || 0}</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Attended</p>
                <p className="text-2xl font-bold text-green-600">{stats?.attended || 0}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cancelled</p>
                <p className="text-2xl font-bold text-red-600">{stats?.cancelled || 0}</p>
              </div>
              <TrendingDown className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Study Hours</p>
                <p className="text-2xl font-bold text-purple-600">{stats?.studyHours || 0}</p>
              </div>
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Overall Attendance</span>
              <span className="text-sm font-bold">{getAttendancePercentage()}%</span>
            </div>
            <Progress value={getAttendancePercentage()} className="h-3" />
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-800">{stats?.attended || 0}</p>
                <p className="text-green-600">Attended</p>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <p className="font-semibold text-red-800">{stats?.cancelled || 0}</p>
                <p className="text-red-600">Cancelled</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Class Details</CardTitle>
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
                </tr>
              </thead>
              <tbody>
                {schedule.map((classItem) => (
                  <tr key={classItem.id} className="border-b">
                    <td className="py-3 px-4">
                      {new Date(classItem.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">{classItem.subject}</td>
                    <td className="py-3 px-4">{classItem.teacher}</td>
                    <td className="py-3 px-4">{classItem.timeUK} / {classItem.timeEG}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        classItem.status === 'attended' ? 'bg-green-100 text-green-800' :
                        classItem.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                        classItem.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {classItem.status.charAt(0).toUpperCase() + classItem.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 