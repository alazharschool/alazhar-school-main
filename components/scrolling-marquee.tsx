import React from "react";
import Image from "next/image";

const marqueeItems = [
  "The Holy Quran",
  "Islamic Study",
  "Arabic language",
  "Tajjweed",
  "Hadith"
];

export default function ScrollingMarquee() {
  return (
    <div className="w-full overflow-hidden py-2 bg-gradient-to-r from-[#f8f3eb] via-[#fff7e0] to-[#f8f3eb] border-y border-yellow-400">
      <div className="flex items-center gap-4 w-full">
        {/* نص ثابت */}
        <span
          className="font-black text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap px-1 sm:px-2 md:px-4 flex items-center gap-1 sm:gap-2 flex-shrink-0"
          style={{ fontFamily: 'Noto Serif', letterSpacing: '1px' }}
        >
          <Image src="/quran-logo.jpg" alt="Quran Logo" width={40} height={40} className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" style={{ objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle' }} />
          <span style={{ color: '#222', fontWeight: 900 }}>Al-Azhar </span>
          <span style={{ color: '#e8b007', fontWeight: 900 }}>School</span>
          &nbsp;&gt;&gt;
        </span>
        {/* شريط متحرك */}
        <div className="relative flex-1 overflow-hidden marquee-container">
          <div className="marquee flex gap-10 sm:gap-14" style={{ animation: 'marquee 18s linear infinite' }}>
            {marqueeItems.map((item, idx) => (
              <span
                key={idx}
                className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg font-bold px-1 sm:px-2 md:px-4 whitespace-nowrap gap-1 sm:gap-2"
                style={{ fontFamily: 'Noto Serif', color: '#5a2600', textShadow: '1px 1px 4px #fff' }}
              >
                <Image src="/logo/image.png" alt="Al-Azhar School" width={44} height={44} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 inline-block" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                {item}
                {idx !== marqueeItems.length - 1 && (
                  <span className="mx-1 sm:mx-2 text-[#5a2600]">{idx % 2 === 0 ? '>' : '<'}</span>
                )}
              </span>
            ))}
            {/* تكرار العناصر لجعل الشريط متصل */}
            {marqueeItems.map((item, idx) => (
              <span
                key={"repeat-" + idx}
                className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg font-bold px-1 sm:px-2 md:px-4 whitespace-nowrap gap-1 sm:gap-2"
                style={{ fontFamily: 'Noto Serif', color: '#5a2600', textShadow: '1px 1px 4px #fff' }}
              >
                <Image src="/logo/image.png" alt="Al-Azhar School" width={44} height={44} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 inline-block" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                {item}
                {idx !== marqueeItems.length - 1 && (
                  <span className="mx-1 sm:mx-2 text-[#5a2600]">{idx % 2 === 0 ? '>' : '<'}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* CSS للماركي */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          min-width: 200%;
          will-change: transform;
          transition-timing-function: linear;
        }
        /* أزل إيقاف الحركة عند hover ليبقى الشريط متحرك دائماً */
      `}</style>
    </div>
  );
} 