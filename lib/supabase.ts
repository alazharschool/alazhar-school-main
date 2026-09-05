import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

function isValidAbsoluteUrl(value?: string | null): boolean {
  if (!value) return false
  try {
    const u = new URL(value)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

if (!supabaseUrl || !supabaseKey) {
  // Do not crash the app in production if env vars are missing.
  // The site will render, but auth/data calls will be no-ops until env vars are provided.
  // eslint-disable-next-line no-console
  console.warn(
    'Supabase env vars are missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable auth & data features.'
  )
}

const safeUrl = isValidAbsoluteUrl(supabaseUrl)
  ? (supabaseUrl as string)
  : 'https://placeholder.supabase.co'
const safeKey = supabaseKey || 'public-anon-key'

export const supabase = createClient(safeUrl, safeKey)


// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          user_type: 'student' | 'teacher' | 'admin'
          phone?: string
          age?: string
          country?: string
          monthly_fees?: string
          assigned_teacher?: string
          subjects?: string[]
          status?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          user_type: 'student' | 'teacher' | 'admin'
          phone?: string
          age?: string
          country?: string
          monthly_fees?: string
          assigned_teacher?: string
          subjects?: string[]
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          user_type?: 'student' | 'teacher' | 'admin'
          phone?: string
          age?: string
          country?: string
          monthly_fees?: string
          assigned_teacher?: string
          subjects?: string[]
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      schedules: {
        Row: {
          id: string
          student_id: string
          teacher_id: string
          date: string
          day: string
          time_uk: string
          time_eg: string
          status: 'scheduled' | 'attended' | 'cancelled' | 'completed'
          subject: string
          zoom_link?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          teacher_id: string
          date: string
          day: string
          time_uk: string
          time_eg: string
          status?: 'scheduled' | 'attended' | 'cancelled' | 'completed'
          subject: string
          zoom_link?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          teacher_id?: string
          date?: string
          day?: string
          time_uk?: string
          time_eg?: string
          status?: 'scheduled' | 'attended' | 'cancelled' | 'completed'
          subject?: string
          zoom_link?: string
          created_at?: string
          updated_at?: string
        }
      }
      teachers: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          specialization: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone: string
          specialization: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          specialization?: string
          created_at?: string
          updated_at?: string
        }
      }
      attendance: {
        Row: {
          id: string
          schedule_id: string
          student_id: string
          status: 'attended' | 'cancelled'
          timestamp: string
          created_at: string
        }
        Insert: {
          id?: string
          schedule_id: string
          student_id: string
          status: 'attended' | 'cancelled'
          timestamp?: string
          created_at?: string
        }
        Update: {
          id?: string
          schedule_id?: string
          student_id?: string
          status?: 'attended' | 'cancelled'
          timestamp?: string
          created_at?: string
        }
      }
    }
  }
} 
