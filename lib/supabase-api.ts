import { supabase } from './supabase'
import type { Database } from './supabase'

type User = Database['public']['Tables']['users']['Row']
type Schedule = Database['public']['Tables']['schedules']['Row']
type Teacher = Database['public']['Tables']['teachers']['Row']
type Attendance = Database['public']['Tables']['attendance']['Row']

// Lightweight type for testimonials to avoid breaking existing Database typing
export interface Testimonial {
  id: string
  user_id: string
  name: string
  content: string
  rating?: number
  approved?: boolean
  created_at: string
}

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

// Supabase API Functions
export const supabaseAPI = {
  // Authentication
  async signUp(email: string, password: string, userData: Partial<User>) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    })
    
    if (error) throw error
    return data
  },

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    
    if (error) throw error
    return data
  },

  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) throw error
    return user
  },

  // Users
  async createUser(userData: Omit<User, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('users')
      .insert(userData)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async getUserByEmail(email: string) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()
    
    if (error) throw error
    return data
  },

  async updateUser(id: string, updates: Partial<User>) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Schedules
  async getStudentSchedule(studentId: string, month?: string): Promise<ScheduleData[]> {
    const currentDate = new Date()
    const targetMonth = month ? parseInt(month) : currentDate.getMonth() + 1
    const targetYear = currentDate.getFullYear()
    
    const startDate = new Date(targetYear, targetMonth - 1, 1)
    const endDate = new Date(targetYear, targetMonth, 0)
    
    const { data, error } = await supabase
      .from('schedules')
      .select(`
        *,
        teachers (
          name,
          email,
          phone,
          specialization
        )
      `)
      .eq('student_id', studentId)
      .gte('date', startDate.toISOString().split('T')[0])
      .lte('date', endDate.toISOString().split('T')[0])
      .order('date', { ascending: true })
    
    if (error) {
      console.error('Error fetching schedule:', error)
      return []
    }
    
    return data.map(schedule => ({
      id: schedule.id,
      date: schedule.date,
      day: schedule.day,
      teacher: schedule.teachers.name,
      teacherId: schedule.teacher_id,
      timeUK: schedule.time_uk,
      timeEG: schedule.time_eg,
      status: schedule.status,
      zoomLink: schedule.zoom_link,
      subject: schedule.subject
    }))
  },

  async createSchedule(scheduleData: Omit<Schedule, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('schedules')
      .insert(scheduleData)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async updateScheduleStatus(scheduleId: string, status: Schedule['status']) {
    const { data, error } = await supabase
      .from('schedules')
      .update({ status })
      .eq('id', scheduleId)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Attendance
  async updateAttendance(scheduleId: string, studentId: string, status: 'attended' | 'cancelled') {
    // First update the schedule status
    await this.updateScheduleStatus(scheduleId, status)
    
    // Then create attendance record
    const { data, error } = await supabase
      .from('attendance')
      .insert({
        schedule_id: scheduleId,
        student_id: studentId,
        status
      })
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async getAttendanceStats(studentId: string, month?: string): Promise<AttendanceStats> {
    const currentDate = new Date()
    const targetMonth = month ? parseInt(month) : currentDate.getMonth() + 1
    const targetYear = currentDate.getFullYear()
    
    const startDate = new Date(targetYear, targetMonth - 1, 1)
    const endDate = new Date(targetYear, targetMonth, 0)
    
    // Get total scheduled classes
    const { data: schedules, error: schedulesError } = await supabase
      .from('schedules')
      .select('id, status')
      .eq('student_id', studentId)
      .gte('date', startDate.toISOString().split('T')[0])
      .lte('date', endDate.toISOString().split('T')[0])
    
    if (schedulesError) {
      console.error('Error fetching schedules:', schedulesError)
      return { attended: 0, total: 0, cancelled: 0, studyHours: 0 }
    }
    
    const total = schedules.length
    const attended = schedules.filter(s => s.status === 'attended').length
    const cancelled = schedules.filter(s => s.status === 'cancelled').length
    const studyHours = attended // Assuming 1 hour per attended class
    
    return { attended, total, cancelled, studyHours }
  },

  // Teachers
  async getTeacherInfo(teacherId: string): Promise<TeacherData> {
    const { data, error } = await supabase
      .from('teachers')
      .select('*')
      .eq('id', teacherId)
      .single()
    
    if (error) {
      console.error('Error fetching teacher info:', error)
      return {
        id: teacherId,
        name: 'Mohamed Mohsen',
        specialization: 'Quran & Tajweed',
        email: 'mohamed.mohsen@alazhar.edu.eg',
        phone: '+20 123 456 789'
      }
    }
    
    return {
      id: data.id,
      name: data.name,
      specialization: data.specialization,
      email: data.email,
      phone: data.phone
    }
  },

  async getAllTeachers(): Promise<TeacherData[]> {
    const { data, error } = await supabase
      .from('teachers')
      .select('*')
      .order('name')
    
    if (error) {
      console.error('Error fetching teachers:', error)
      return []
    }
    
    return data.map(teacher => ({
      id: teacher.id,
      name: teacher.name,
      specialization: teacher.specialization,
      email: teacher.email,
      phone: teacher.phone
    }))
  },

  // Zoom Links
  async getZoomLink(scheduleId: string): Promise<string> {
    const { data, error } = await supabase
      .from('schedules')
      .select('zoom_link')
      .eq('id', scheduleId)
      .single()
    
    if (error || !data?.zoom_link) {
      console.error('Error fetching zoom link:', error)
      return 'zoom.com/sdsdsdjd/ssghayds/dsas' // Default link
    }
    
    return data.zoom_link
  },

  // =====================
  // Testimonials
  // =====================
  async getApprovedTestimonials(limit = 12): Promise<Testimonial[]> {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) {
      console.error('Error fetching testimonials:', error)
      return []
    }
    return (data as unknown as Testimonial[]) || []
  },

  async createTestimonial(payload: { content: string; rating?: number; name?: string }): Promise<Testimonial | null> {
    const { data: userData } = await supabase.auth.getUser()
    const userId = userData.user?.id
    if (!userId) throw new Error('Not authenticated')

    const insertPayload = {
      user_id: userId,
      name: payload.name ?? userData.user?.user_metadata?.name ?? userData.user?.email?.split('@')[0] ?? 'Student',
      content: payload.content,
      rating: payload.rating ?? null,
      approved: true
    }

    const { data, error } = await supabase
      .from('testimonials')
      .insert(insertPayload as any)
      .select('*')
      .single()

    if (error) {
      console.error('Error creating testimonial:', error)
      throw error
    }
    return data as unknown as Testimonial
  },

  async getTestimonials(approved?: boolean): Promise<Testimonial[]> {
    let query = supabase.from('testimonials').select('*').order('created_at', { ascending: false })
    if (approved !== undefined) {
      query = query.eq('approved', approved)
    }
    const { data, error } = await query
    if (error) {
      console.error('Error fetching testimonials:', error)
      return []
    }
    return (data as unknown as Testimonial[]) || []
  },

  async updateTestimonialApproval(id: string, approved: boolean): Promise<Testimonial> {
    const { data, error } = await supabase
      .from('testimonials')
      .update({ approved })
      .eq('id', id)
      .select('*')
      .single()
    if (error) throw error
    return data as unknown as Testimonial
  },

  async deleteTestimonial(id: string): Promise<void> {
    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id)
    if (error) throw error
  }
} 