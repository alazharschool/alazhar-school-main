// API Service for External System Integration
export interface ScheduleData {
  id: string;
  date: string;
  day: string;
  teacher: string;
  teacherId: string;
  timeUK: string;
  timeEG: string;
  status: 'scheduled' | 'attended' | 'cancelled' | 'completed';
  zoomLink?: string;
  subject: string;
}

export interface AttendanceStats {
  attended: number;
  total: number;
  cancelled: number;
  studyHours: number;
}

export interface TeacherData {
  id: string;
  name: string;
  specialization: string;
  email: string;
  phone: string;
}

// External System API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.alazhar-school.com';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// API Headers
const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_KEY}`,
});

// Schedule API Functions
export const scheduleAPI = {
  // Get student schedule for current month
  async getStudentSchedule(studentId: string, month?: string): Promise<ScheduleData[]> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/schedule/student/${studentId}?month=${month || new Date().getMonth() + 1}`,
        { headers: getHeaders() }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch schedule');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching schedule:', error);
      // Return mock data for development
      return getMockScheduleData();
    }
  },

  // Update attendance status
  async updateAttendance(classId: string, status: 'attended' | 'cancelled'): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/attendance`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ classId, status, timestamp: new Date().toISOString() })
      });
      
      return response.ok;
    } catch (error) {
      console.error('Error updating attendance:', error);
      return false;
    }
  },

  // Get attendance statistics
  async getAttendanceStats(studentId: string, month?: string): Promise<AttendanceStats> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/attendance/stats/${studentId}?month=${month || new Date().getMonth() + 1}`,
        { headers: getHeaders() }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch attendance stats');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching attendance stats:', error);
      // Return mock data for development
      return getMockAttendanceStats();
    }
  },

  // Get teacher information
  async getTeacherInfo(teacherId: string): Promise<TeacherData> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/teachers/${teacherId}`,
        { headers: getHeaders() }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch teacher info');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching teacher info:', error);
      // Return mock data for development
      return getMockTeacherData(teacherId);
    }
  },

  // Get zoom link for class
  async getZoomLink(classId: string): Promise<string> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/classes/${classId}/zoom-link`,
        { headers: getHeaders() }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch zoom link');
      }
      
      const data = await response.json();
      return data.zoomLink;
    } catch (error) {
      console.error('Error fetching zoom link:', error);
      return 'zoom.com/sdsdsdjd/ssghayds/dsas'; // Mock link
    }
  }
};

// Mock Data for Development
function getMockScheduleData(): ScheduleData[] {
  // Check if this is a new student (you can add logic here to detect new students)
  // For now, we'll return empty array for new students
  return [];
}

function getMockAttendanceStats(): AttendanceStats {
  return {
    attended: 0,
    total: 0,
    cancelled: 0,
    studyHours: 0
  };
}

function getMockTeacherData(teacherId: string): TeacherData {
  return {
    id: teacherId,
    name: 'Mohamed Mohsen',
    specialization: 'Quran & Tajweed',
    email: 'mohamed.mohsen@alazhar.edu.eg',
    phone: '+20 123 456 789'
  };
}

// Real-time Updates with WebSocket
export class RealTimeUpdates {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;

  connect(studentId: string, onUpdate: (data: any) => void) {
    try {
      this.ws = new WebSocket(`${API_BASE_URL.replace('https', 'wss')}/ws/student/${studentId}`);
      
      this.ws.onopen = () => {
        console.log('WebSocket connected');
        this.reconnectAttempts = 0;
      };

      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        onUpdate(data);
      };

      this.ws.onclose = () => {
        console.log('WebSocket disconnected');
        this.attemptReconnect(studentId, onUpdate);
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    } catch (error) {
      console.error('Failed to connect WebSocket:', error);
    }
  }

  private attemptReconnect(studentId: string, onUpdate: (data: any) => void) {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      setTimeout(() => {
        this.connect(studentId, onUpdate);
      }, 1000 * this.reconnectAttempts);
    }
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  sendMessage(message: any) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
    }
  }
} 