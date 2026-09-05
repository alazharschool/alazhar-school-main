-- ========================================
-- Schema قاعدة بيانات Al-Azhar School
-- ========================================
-- 
-- انسخ هذا المحتوى والصقه في SQL Editor في Supabase

-- ========================================
-- إعدادات أساسية
-- ========================================

-- تفعيل Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret-change-this';

-- إنشاء extension للـ UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ========================================
-- جدول المستخدمين
-- ========================================

CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  user_type VARCHAR(20) CHECK (user_type IN ('student', 'teacher', 'admin')) NOT NULL,
  phone VARCHAR(50),
  age VARCHAR(10),
  country VARCHAR(100),
  monthly_fees VARCHAR(20),
  assigned_teacher VARCHAR(255),
  subjects TEXT[],
  status VARCHAR(50) DEFAULT 'Active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- جدول المعلمين
-- ========================================

CREATE TABLE IF NOT EXISTS teachers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50) NOT NULL,
  specialization VARCHAR(255) NOT NULL,
  hourly_rate DECIMAL(10,2),
  availability JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- جدول الجداول الدراسية
-- ========================================

CREATE TABLE IF NOT EXISTS schedules (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  student_id UUID REFERENCES users(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES teachers(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  day VARCHAR(20) NOT NULL,
  time_uk TIME NOT NULL,
  time_eg TIME NOT NULL,
  status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'attended', 'cancelled', 'completed')),
  subject VARCHAR(100) NOT NULL,
  zoom_link TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- جدول الحضور
-- ========================================

CREATE TABLE IF NOT EXISTS attendance (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  student_id UUID REFERENCES users(id) ON DELETE CASCADE,
  schedule_id UUID REFERENCES schedules(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  status VARCHAR(20) DEFAULT 'present' CHECK (status IN ('present', 'absent', 'late', 'excused')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- جدول المواد الدراسية
-- ========================================

CREATE TABLE IF NOT EXISTS subjects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  level VARCHAR(50),
  duration_minutes INTEGER DEFAULT 60,
  price_per_hour DECIMAL(10,2),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- جدول المدفوعات
-- ========================================

CREATE TABLE IF NOT EXISTS payments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  student_id UUID REFERENCES users(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  payment_date DATE NOT NULL,
  payment_method VARCHAR(50),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  reference_number VARCHAR(100),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- إنشاء Indexes للأداء
-- ========================================

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_user_type ON users(user_type);
CREATE INDEX IF NOT EXISTS idx_schedules_date ON schedules(date);
CREATE INDEX IF NOT EXISTS idx_schedules_student_id ON schedules(student_id);
CREATE INDEX IF NOT EXISTS idx_schedules_teacher_id ON schedules(teacher_id);
CREATE INDEX IF NOT EXISTS idx_attendance_date ON attendance(date);
CREATE INDEX IF NOT EXISTS idx_payments_student_id ON payments(student_id);

-- ========================================
-- تفعيل Row Level Security (RLS)
-- ========================================

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- ========================================
-- سياسات الأمان الأساسية
-- ========================================

-- المستخدمون يمكنهم رؤية بياناتهم فقط
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid()::text = id::text);

-- المعلمون يمكنهم رؤية بياناتهم فقط
CREATE POLICY "Teachers can view own data" ON teachers
  FOR SELECT USING (auth.uid()::text = id::text);

-- الطلاب يمكنهم رؤية جداولهم الدراسية
CREATE POLICY "Students can view own schedules" ON schedules
  FOR SELECT USING (auth.uid()::text = student_id::text);

-- المعلمون يمكنهم رؤية جداولهم الدراسية
CREATE POLICY "Teachers can view own schedules" ON schedules
  FOR SELECT USING (auth.uid()::text = teacher_id::text);

-- ========================================
-- إدخال بيانات تجريبية
-- ========================================

-- إدخال مواد دراسية أساسية
INSERT INTO subjects (name, description, level, price_per_hour) VALUES
('القرآن الكريم', 'تعلم القرآن الكريم مع التجويد', 'مبتدئ', 25.00),
('اللغة العربية', 'قواعد اللغة العربية والنحو', 'متوسط', 30.00),
('العلوم الإسلامية', 'أصول الدين والفقه', 'متقدم', 35.00),
('الرياضيات', 'الرياضيات الأساسية', 'مبتدئ', 25.00),
('اللغة الإنجليزية', 'تعلم اللغة الإنجليزية', 'متوسط', 30.00)
ON CONFLICT DO NOTHING;

-- ========================================
-- رسالة نجاح
-- ========================================

-- تم إنشاء قاعدة البيانات بنجاح!
-- يمكنك الآن استخدام الموقع مع قاعدة البيانات
