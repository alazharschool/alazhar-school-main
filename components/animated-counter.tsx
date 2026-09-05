"use client"

import { useEffect, useState } from "react"
import { useCounterAnimation } from "@/hooks/use-counter-animation"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({ value, suffix = "", className = "" }: AnimatedCounterProps) {
  const [isClient, setIsClient] = useState(false)
  const { count, startAnimation } = useCounterAnimation(value, 2000)
  const { ref, hasIntersected } = useIntersectionObserver()

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient && hasIntersected) {
      startAnimation()
    }
  }, [isClient, hasIntersected, startAnimation])

  // إذا لم يكن client بعد، اعرض الرقم النهائي مباشرة
  const displayCount = isClient ? count : value

  return (
    <div ref={ref} className={className} style={{ display: 'flex', gap: '2px', justifyContent: 'center' }}>
      {displayCount
        .toLocaleString('en-US')
        .replace(/,/g, '')
        .padStart(value.toString().length, '0')
        .split('')
        .map((digit, idx) => (
          <span
            key={idx}
            style={{
              display: 'inline-block',
              minWidth: '1.2em',
              padding: '0.1em 0.2em',
              background: '#fffbe6',
              color: '#000',
              borderRadius: '0.3em',
              fontWeight: 900,
              fontSize: '1em',
              margin: '0 1px',
              WebkitTextStroke: '1px #fffbe6',
              filter: 'brightness(1.15)',
              textShadow: '0 2px 6px #5a260055',
              border: '2px solid #5a260033', // إطار بني بسيط
              boxSizing: 'border-box',
            }}
          >
            {digit}
          </span>
        ))}
      {suffix}
    </div>
  )
}