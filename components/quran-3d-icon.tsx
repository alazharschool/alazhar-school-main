import React from "react";

export default function Quran3DIcon({ className = "w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: 'drop-shadow(0 4px 8px #bfa76a55)' }}
    >
      {/* قاعدة المصحف */}
      <ellipse cx="60" cy="110" rx="38" ry="10" fill="#e8d5b7" />
      {/* غلاف المصحف الأيسر */}
      <path d="M60 20 L20 40 Q18 60 60 100" fill="#fffbe6" stroke="#bfa76a" strokeWidth="3" />
      {/* غلاف المصحف الأيمن */}
      <path d="M60 20 L100 40 Q102 60 60 100" fill="#fffbe6" stroke="#bfa76a" strokeWidth="3" />
      {/* صفحات المصحف */}
      <path d="M60 25 Q35 45 60 95 Q85 45 60 25" fill="#fff" stroke="#e8b007" strokeWidth="2" />
      {/* كلمة اقرأ */}
      <text x="60" y="55" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#5a2600" fontFamily="'Cairo', 'Tajawal', 'Noto Serif', serif">اقرأ</text>
      {/* تأثير 3D خفيف */}
      <ellipse cx="60" cy="110" rx="32" ry="6" fill="#bfa76a33" />
    </svg>
  );
} 