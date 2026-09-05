"use client";
import { useState } from "react";
import { FaWhatsapp, FaTelegram, FaFacebookMessenger, FaCommentDots } from "react-icons/fa";

export default function FloatingChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
      zIndex: 1000
    }}>
      {/* الأيقونات المنبثقة */}
      {open && (
        <div className="flex flex-col items-center mb-4 space-y-3 animate-fade-in-up">
          <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={44} className="text-green-500 bg-white rounded-full shadow-lg p-2 hover:scale-110 transition" />
          </a>
          <a href="https://t.me/username" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={44} className="text-blue-400 bg-white rounded-full shadow-lg p-2 hover:scale-110 transition" />
          </a>
          <a href="https://m.me/username" target="_blank" rel="noopener noreferrer">
            <FaFacebookMessenger size={44} className="text-blue-600 bg-white rounded-full shadow-lg p-2 hover:scale-110 transition" />
          </a>
        </div>
      )}

      {/* زر الدردشة الرئيسي */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#8B4513] hover:bg-[#5a2600] text-white rounded-full shadow-2xl p-4 flex items-center justify-center transition-all"
        style={{
          boxShadow: "0 4px 32px #0002"
        }}
        aria-label="Open chat options"
      >
        <FaCommentDots size={28} />
      </button>
    </div>
  );
} 