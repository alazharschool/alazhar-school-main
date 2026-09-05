import { useState, useEffect, useCallback } from 'react';
import { scheduleAPI, ScheduleData, AttendanceStats, RealTimeUpdates } from '@/lib/api';
import { useUser } from '@/contexts/UserContext';

export const useScheduleData = () => {
  const { user } = useUser();
  const [scheduleData, setScheduleData] = useState<ScheduleData[]>([]);
  const [attendanceStats, setAttendanceStats] = useState<AttendanceStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [realTimeUpdates, setRealTimeUpdates] = useState<RealTimeUpdates | null>(null);

  // Load schedule data
  const loadScheduleData = useCallback(async () => {
    if (!user?.email) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const [schedule, stats] = await Promise.all([
        scheduleAPI.getStudentSchedule(user.email, currentMonth.toString()),
        scheduleAPI.getAttendanceStats(user.email, currentMonth.toString())
      ]);
      
      setScheduleData(schedule);
      setAttendanceStats(stats);
    } catch (err) {
      setError('Failed to load schedule data');
      console.error('Error loading schedule:', err);
    } finally {
      setLoading(false);
    }
  }, [user?.email, currentMonth]);

  // Update attendance status
  const updateAttendance = useCallback(async (classId: string, status: 'attended' | 'cancelled') => {
    try {
      const success = await scheduleAPI.updateAttendance(classId, status);
      
      if (success) {
        // Update local state immediately for better UX
        setScheduleData(prev => 
          prev.map(classItem => 
            classItem.id === classId 
              ? { ...classItem, status } 
              : classItem
          )
        );
        
        // Reload stats to reflect changes
        const newStats = await scheduleAPI.getAttendanceStats(user?.email || '', currentMonth.toString());
        setAttendanceStats(newStats);
        
        return true;
      }
      return false;
    } catch (err) {
      console.error('Error updating attendance:', err);
      return false;
    }
  }, [user?.email, currentMonth]);

  // Navigate to different month
  const navigateMonth = useCallback((direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      if (direction === 'prev') {
        return prev === 1 ? 12 : prev - 1;
      } else {
        return prev === 12 ? 1 : prev + 1;
      }
    });
  }, []);

  // Get month name
  const getMonthName = useCallback((month: number) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month - 1];
  }, []);

  // Initialize real-time updates
  useEffect(() => {
    if (!user?.email) return;

    const rtUpdates = new RealTimeUpdates();
    setRealTimeUpdates(rtUpdates);

    rtUpdates.connect(user.email, (data) => {
      // Handle real-time updates
      if (data.type === 'schedule_update') {
        setScheduleData(prev => 
          prev.map(item => 
            item.id === data.classId 
              ? { ...item, ...data.changes } 
              : item
          )
        );
      } else if (data.type === 'attendance_update') {
        loadScheduleData(); // Reload all data
      }
    });

    return () => {
      rtUpdates.disconnect();
    };
  }, [user?.email, loadScheduleData]);

  // Load data when component mounts or dependencies change
  useEffect(() => {
    loadScheduleData();
  }, [loadScheduleData]);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      loadScheduleData();
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, [loadScheduleData]);

  return {
    scheduleData,
    attendanceStats,
    loading,
    error,
    currentMonth,
    getMonthName,
    updateAttendance,
    navigateMonth,
    refreshData: loadScheduleData
  };
}; 