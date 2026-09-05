"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface StudentInfo {
  full_name: string;
  age: string;
  country: string;
  email: string;
  phone: string;
  monthly_fees: string;
  assigned_teacher: string;
  subjects: string[];
  status: string;
}

interface ScheduleType {
  id: string;
  study_day: string;
  date: string;
  assigned_teacher: string;
  time_uk: string;
  time_eg: string;
  attendance_status: string;
}

export default function DashboardPage() {
  const [student, setStudent] = useState<StudentInfo | null>(null);
  const [schedule, setSchedule] = useState<ScheduleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  function handlePrevMonth() {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  }

  function handleNextMonth() {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  }

  // Helper to format month name
  function getMonthYear(date: Date) {
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  }

  const stats = {
    attended: 4,
    cancelled: 2,
    hours: 4,
    zoom_link: "https://zoom.com/sdsdsdjd/ssghayds/dsas",
    month: "July 2025"
  };

  useEffect(() => {
    setStudent({
      full_name: "Ahmad Al-Rashid",
      age: "12 years old",
      country: "Saudi Arabia",
      email: "ahmad@example.com",
      phone: "+966-50-123-4567",
      monthly_fees: "32$",
      assigned_teacher: "Sheikh Abdullah Al-Qari",
      subjects: ["Quran Recitation", "Tajweed"],
      status: "active"
    });
    setSchedule([
      { id: "1", study_day: "Monday", date: "5/8/2025", assigned_teacher: "Mohamed Mohsen", time_uk: "9 PM", time_eg: "5 AM", attendance_status: "Attend" },
      { id: "2", study_day: "Thursday", date: "8/8/2025", assigned_teacher: "Mohamed Mohsen", time_uk: "9 PM", time_eg: "5 AM", attendance_status: "Attend" },
      { id: "3", study_day: "Monday", date: "12/8/2025", assigned_teacher: "Mohamed Mohsen", time_uk: "9 PM", time_eg: "5 AM", attendance_status: "Cancel S" },
      { id: "4", study_day: "Thursday", date: "15/8/2025", assigned_teacher: "Mohamed Mohsen", time_uk: "9 PM", time_eg: "5 AM", attendance_status: "Cancel T" },
      { id: "5", study_day: "Monday", date: "19/8/2025", assigned_teacher: "Mohamed Mohsen", time_uk: "9 PM", time_eg: "5 AM", attendance_status: "Attend" },
      { id: "6", study_day: "Thursday", date: "21/8/2025", assigned_teacher: "Mohamed Mohsen", time_uk: "9 PM", time_eg: "5 AM", attendance_status: "Attend" },
    ]);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;
  // إذا لم توجد بيانات الطالب
  if (!student) {
    const emptyStudent = {
      full_name: "—",
      age: "—",
      country: "—",
      email: "—",
      phone: "—",
      monthly_fees: "—",
      assigned_teacher: "—",
      subjects: [],
      status: "—"
    };
    const emptySchedule = [
      {
        id: "empty",
        study_day: "ابدأ لتفعيل الجدول",
        date: "",
        assigned_teacher: "",
        time_uk: "",
        time_eg: "",
        attendance_status: ""
      }
    ];
    // أعرض نفس الصفحة لكن استخدم البيانات الافتراضية
    return (
      <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
        {/* بيانات الطالب */}
        <div className="w-full bg-[#8B451340] bg-[url('/islamic-pattern-new.jpg')] bg-cover bg-center bg-blend-multiply text-[#8B4513] rounded-xl p-6 flex flex-wrap justify-between items-start gap-8 shadow-[0_4px_16px_rgba(0,0,0,0.18)] border-2 border-[#fff]">
          <div className="space-y-1 min-w-[220px] flex-1 text-[#8B4513]">
            <div className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Full Name</div>
            <div className="font-bold text-[#8B4513]">{emptyStudent.full_name}</div>
            <div className="font-bold text-xl text-white mt-2" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Email</div>
            <div className="font-bold text-[#8B4513]">{emptyStudent.email}</div>
            <div className="font-bold text-xl text-white mt-2" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Phone</div>
            <div className="font-bold text-[#8B4513]">{emptyStudent.phone}</div>
          </div>
          <div className="space-y-1 min-w-[120px] flex-1 text-[#8B4513]">
            <div className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Age</div>
            <div className="font-bold text-[#8B4513]">{emptyStudent.age}</div>
            <div className="font-bold text-xl text-white mt-2" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Country</div>
            <div className="font-bold text-[#8B4513]">{emptyStudent.country}</div>
            <div className="font-bold text-xl text-white mt-2" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Monthly Fees</div>
            <div className="font-bold text-[#8B4513]">{emptyStudent.monthly_fees}</div>
          </div>
          <div className="space-y-1 min-w-[180px] flex-1 text-[#8B4513]">
            <div className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Assigned Teacher</div>
            <div className="font-bold text-[#8B4513]">{emptyStudent.assigned_teacher}</div>
            <div className="font-bold text-xl text-white mt-2" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Subjects</div>
            <div className="flex gap-2 flex-wrap">
              {/* لا مواد */}
            </div>
            <div className="font-bold text-xl text-white mt-2" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Status</div>
            <span className="bg-green-200 text-green-900 px-2 py-0.5 rounded text-xs font-semibold">{emptyStudent.status}</span>
          </div>
        </div>
        {/* الإحصائيات */}
        <div className="w-full flex flex-wrap gap-6 justify-between text-white">
          <div className="bg-[#8B451340] bg-[url('/islamic-pattern-new.jpg')] bg-cover bg-center bg-blend-multiply text-white rounded-xl flex-1 min-w-[180px] flex flex-col items-center p-6 shadow-[0_4px_16px_rgba(0,0,0,0.18)] border-2 border-[#fff]">
            <span className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Attend Classes</span>
            <span className="bg-white text-[#8B4513] font-bold rounded px-4 py-1 text-xl mt-1">—</span>
          </div>
          <div className="bg-[#8B451340] bg-[url('/islamic-pattern-new.jpg')] bg-cover bg-center bg-blend-multiply text-white rounded-xl flex-1 min-w-[180px] flex flex-col items-center p-6 shadow-[0_4px_16px_rgba(0,0,0,0.18)] border-2 border-[#fff]">
            <span className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Canceled Classes</span>
            <span className="bg-white text-[#8B4513] font-bold rounded px-4 py-1 text-xl mt-1">—</span>
          </div>
          <div className="bg-[#8B451340] bg-[url('/islamic-pattern-new.jpg')] bg-cover bg-center bg-blend-multiply text-white rounded-xl flex-1 min-w-[180px] flex flex-col items-center p-6 shadow-[0_4px_16px_rgba(0,0,0,0.18)] border-2 border-[#fff]">
            <span className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Study Hours</span>
            <span className="bg-white text-[#8B4513] font-bold rounded px-4 py-1 text-xl mt-1">—</span>
          </div>
          <div className="bg-[#8B451340] bg-[url('/islamic-pattern-new.jpg')] bg-cover bg-center bg-blend-multiply text-white rounded-xl flex-1 min-w-[220px] flex flex-col items-center p-6 shadow-[0_4px_16px_rgba(0,0,0,0.18)] border-2 border-[#fff]">
            <span className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Zoom Link</span>
            <span className="bg-white text-[#8B4513] font-bold rounded px-4 py-1 mt-1">—</span>
          </div>
          <div className="bg-[#8B451340] bg-[url('/islamic-pattern-new.jpg')] bg-cover bg-center bg-blend-multiply text-white rounded-xl flex-1 min-w-[180px] flex flex-col items-center p-6 shadow-[0_4px_16px_rgba(0,0,0,0.18)] border-2 border-[#fff]">
            <span className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>{getMonthYear(currentMonth)}</span>
            <div className="flex gap-2 mt-1">
              <button className="bg-[#5a2600] text-white rounded px-3 py-1" disabled>&#60;</button>
              <button className="bg-[#5a2600] text-white rounded px-3 py-1" disabled>&#62;</button>
            </div>
          </div>
        </div>
        {/* جدول الدروس */}
        <div className="overflow-x-auto mt-8 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.18)] border border-green-200">
          <table className="w-full text-center bg-white/90 rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-[#8B4513] text-white shadow-[0_2px_8px_rgba(0,0,0,0.18)]">
                <th className="px-4 py-3 text-xl font-bold text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Study Days</th>
                <th className="px-4 py-3 text-xl font-bold text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Assigned Teacher</th>
                <th className="px-4 py-3 text-xl font-bold text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Study Time - UK</th>
                <th className="px-4 py-3 text-xl font-bold text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Study Time - EG</th>
                <th className="px-4 py-3 text-xl font-bold text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Attendance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="text-center text-lg font-bold text-[#8B4513] py-8">
                  {emptySchedule[0].study_day}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* صندوق تحفيزي */}
        <div className="mt-8 max-w-3xl mx-auto bg-[#8B4513cc] border-2 border-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.18)] p-6 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-white text-center" style={{ textShadow: '0 2px 8px #000' }}>
            Keep going! Every day you study brings you closer to your Quran and Arabic goals.<br />You are doing amazing!
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
      {/* بيانات الطالب */}
      <div className="w-full bg-[#8B451340] bg-[url('/islamic-pattern-new.jpg')] bg-cover bg-center bg-blend-multiply text-[#8B4513] rounded-xl p-6 flex flex-wrap justify-between items-start gap-8 shadow-[0_4px_16px_rgba(0,0,0,0.18)] border-2 border-[#fff]">
        <div className="space-y-1 min-w-[220px] flex-1 text-[#8B4513]">
          <div className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Full Name</div>
          <div className="font-bold text-[#8B4513]">{student.full_name}</div>
          <div className="font-bold text-xl text-white mt-2" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Email</div>
          <div className="font-bold text-[#8B4513]">{student.email}</div>
          <div className="font-bold text-xl text-white mt-2" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Phone</div>
          <div className="font-bold text-[#8B4513]">{student.phone}</div>
        </div>
        <div className="space-y-1 min-w-[120px] flex-1 text-[#8B4513]">
          <div className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Age</div>
          <div className="font-bold text-[#8B4513]">{student.age}</div>
          <div className="font-bold text-xl text-white mt-2" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Country</div>
          <div className="font-bold text-[#8B4513]">{student.country}</div>
          <div className="font-bold text-xl text-white mt-2" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Monthly Fees</div>
          <div className="font-bold text-[#8B4513]">{student.monthly_fees}</div>
        </div>
        <div className="space-y-1 min-w-[180px] flex-1 text-[#8B4513]">
          <div className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Assigned Teacher</div>
          <div className="font-bold text-[#8B4513]">{student.assigned_teacher}</div>
          <div className="font-bold text-xl text-white mt-2" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Subjects</div>
          <div className="flex gap-2 flex-wrap">
            {student.subjects.map((subj) => (
              <span key={subj} className="bg-green-200 text-green-900 px-2 py-0.5 rounded text-xs font-semibold">{subj}</span>
            ))}
          </div>
          <div className="font-bold text-xl text-white mt-2" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Status</div>
          <span className="bg-green-200 text-green-900 px-2 py-0.5 rounded text-xs font-semibold">{student.status}</span>
        </div>
      </div>

      {/* الإحصائيات */}
      <div className="w-full flex flex-wrap gap-6 justify-between text-white">
        <div className="bg-[#8B451340] bg-[url('/islamic-pattern-new.jpg')] bg-cover bg-center bg-blend-multiply text-white rounded-xl flex-1 min-w-[180px] flex flex-col items-center p-6 shadow-[0_4px_16px_rgba(0,0,0,0.18)] border-2 border-[#fff]">
          <span className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Attend Classes</span>
          <span className="bg-white text-[#8B4513] font-bold rounded px-4 py-1 text-xl mt-1">{stats.attended}/4</span>
        </div>
        <div className="bg-[#8B451340] bg-[url('/islamic-pattern-new.jpg')] bg-cover bg-center bg-blend-multiply text-white rounded-xl flex-1 min-w-[180px] flex flex-col items-center p-6 shadow-[0_4px_16px_rgba(0,0,0,0.18)] border-2 border-[#fff]">
          <span className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Canceled Classes</span>
          <span className="bg-white text-[#8B4513] font-bold rounded px-4 py-1 text-xl mt-1">{stats.cancelled}</span>
        </div>
        <div className="bg-[#8B451340] bg-[url('/islamic-pattern-new.jpg')] bg-cover bg-center bg-blend-multiply text-white rounded-xl flex-1 min-w-[180px] flex flex-col items-center p-6 shadow-[0_4px_16px_rgba(0,0,0,0.18)] border-2 border-[#fff]">
          <span className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Study Hours</span>
          <span className="bg-white text-[#8B4513] font-bold rounded px-4 py-1 text-xl mt-1">{stats.hours}/4</span>
        </div>
        <div className="bg-[#8B451340] bg-[url('/islamic-pattern-new.jpg')] bg-cover bg-center bg-blend-multiply text-white rounded-xl flex-1 min-w-[220px] flex flex-col items-center p-6 shadow-[0_4px_16px_rgba(0,0,0,0.18)] border-2 border-[#fff]">
          <span className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Zoom Link</span>
          <a href={stats.zoom_link} target="_blank" rel="noopener noreferrer" className="bg-white text-[#8B4513] font-bold rounded px-4 py-1 mt-1 hover:underline break-all">{stats.zoom_link}</a>
        </div>
        <div className="bg-[#8B451340] bg-[url('/islamic-pattern-new.jpg')] bg-cover bg-center bg-blend-multiply text-white rounded-xl flex-1 min-w-[180px] flex flex-col items-center p-6 shadow-[0_4px_16px_rgba(0,0,0,0.18)] border-2 border-[#fff]">
          <span className="font-bold text-xl text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>{getMonthYear(currentMonth)}</span>
          <div className="flex gap-2 mt-1">
            <button onClick={handlePrevMonth} className="bg-[#5a2600] text-white rounded px-3 py-1">&#60;</button>
            <button onClick={handleNextMonth} className="bg-[#5a2600] text-white rounded px-3 py-1">&#62;</button>
          </div>
        </div>
      </div>

      {/* جدول الدروس */}
      <div className="overflow-x-auto mt-8 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.18)] border border-green-200">
        <table className="w-full text-center bg-white/90 rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-[#8B4513] text-white shadow-[0_2px_8px_rgba(0,0,0,0.18)]">
              <th className="px-4 py-3 text-xl font-bold text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Study Days</th>
              <th className="px-4 py-3 text-xl font-bold text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Assigned Teacher</th>
              <th className="px-4 py-3 text-xl font-bold text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Study Time - UK</th>
              <th className="px-4 py-3 text-xl font-bold text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Study Time - EG</th>
              <th className="px-4 py-3 text-xl font-bold text-white" style={{ textShadow: '0 2px 8px #000', WebkitTextStroke: '0.25px #8B4513' }}>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, idx) => (
              <tr
                key={item.id}
                className={`transition hover:bg-green-50/80 ${idx % 2 === 0 ? 'bg-white' : 'bg-green-50/60'}`}
              >
                <td className="px-4 py-3 font-bold text-base text-green-900">
                  <div>{item.study_day}</div>
                  <div className="text-xs text-gray-500 font-normal">{item.date}</div>
                </td>
                <td className="px-4 py-3 text-base text-green-900">{item.assigned_teacher}</td>
                <td className="px-4 py-3 text-base text-green-900">{item.time_uk}</td>
                <td className="px-4 py-3 text-base text-green-900">{item.time_eg}</td>
                <td className="px-4 py-3">
                  {item.attendance_status === "Attend" ? (
                    <span className="inline-block px-6 py-1 rounded-full bg-green-600 text-white font-bold shadow-[0_2px_8px_rgba(0,0,0,0.18)] hover:bg-green-700 transition">
                      Attend
                    </span>
                  ) : (
                    <span className="inline-block px-6 py-1 rounded-full bg-red-600 text-white font-bold shadow-[0_2px_8px_rgba(0,0,0,0.18)] hover:bg-red-700 transition">
                      {item.attendance_status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* صندوق تحفيزي */}
      <div className="mt-8 max-w-3xl mx-auto bg-[#8B4513cc] border-2 border-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.18)] p-6 flex items-center justify-center">
        <span className="text-2xl md:text-3xl font-bold text-white text-center" style={{ textShadow: '0 2px 8px #000' }}>
          Keep going! Every day you study brings you closer to your Quran and Arabic goals.<br />You are doing amazing!
        </span>
      </div>
    </div>
  );
}
