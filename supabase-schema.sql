-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
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

-- Create teachers table
CREATE TABLE IF NOT EXISTS teachers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50) NOT NULL,
  specialization VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create schedules table
CREATE TABLE IF NOT EXISTS schedules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES users(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES teachers(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  day VARCHAR(20) NOT NULL,
  time_uk VARCHAR(20) NOT NULL,
  time_eg VARCHAR(20) NOT NULL,
  status VARCHAR(20) CHECK (status IN ('scheduled', 'attended', 'cancelled', 'completed')) DEFAULT 'scheduled',
  subject VARCHAR(255) NOT NULL,
  zoom_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create attendance table
CREATE TABLE IF NOT EXISTS attendance (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  schedule_id UUID REFERENCES schedules(id) ON DELETE CASCADE,
  student_id UUID REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(20) CHECK (status IN ('attended', 'cancelled')) NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_user_type ON users(user_type);
CREATE INDEX IF NOT EXISTS idx_schedules_student_id ON schedules(student_id);
CREATE INDEX IF NOT EXISTS idx_schedules_date ON schedules(date);
CREATE INDEX IF NOT EXISTS idx_attendance_schedule_id ON attendance(schedule_id);
CREATE INDEX IF NOT EXISTS idx_attendance_student_id ON attendance(student_id);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Users can view their own data
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid()::text = id::text);

-- Teachers can view their assigned students
CREATE POLICY "Teachers can view assigned students" ON users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM schedules 
      WHERE teacher_id = (SELECT id FROM teachers WHERE email = auth.jwt() ->> 'email')
      AND student_id = users.id
    )
  );

-- Students can view their schedules
CREATE POLICY "Students can view own schedules" ON schedules
  FOR SELECT USING (student_id::text = auth.uid()::text);

-- Teachers can view schedules they teach
CREATE POLICY "Teachers can view their schedules" ON schedules
  FOR SELECT USING (
    teacher_id = (SELECT id FROM teachers WHERE email = auth.jwt() ->> 'email')
  );

-- Students can update attendance for their classes
CREATE POLICY "Students can update own attendance" ON attendance
  FOR INSERT WITH CHECK (student_id::text = auth.uid()::text);

-- Insert sample data
INSERT INTO teachers (name, email, phone, specialization) VALUES
  ('Sheikh Abdullah Al-Qari', 'abdullah.alqari@alazhar.edu.eg', '+20 123 456 789', 'Quran Recitation & Tajweed'),
  ('Dr. Ahmed Hassan', 'ahmed.hassan@alazhar.edu.eg', '+20 987 654 321', 'Arabic Language & Grammar'),
  ('Ustadha Fatima Ali', 'fatima.ali@alazhar.edu.eg', '+20 555 123 456', 'Islamic Studies & Fiqh')
ON CONFLICT (email) DO NOTHING;

-- Insert sample admin user
INSERT INTO users (email, name, user_type, status) VALUES
  ('admin@alazhar.edu.eg', 'System Administrator', 'admin', 'Active')
ON CONFLICT (email) DO NOTHING;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_teachers_updated_at BEFORE UPDATE ON teachers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_schedules_updated_at BEFORE UPDATE ON schedules
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); 