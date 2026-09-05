"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface FadeInSectionProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export function FadeInSection({ children, delay = 0, direction = "up", className = "" }: FadeInSectionProps) {
  const { ref, hasIntersected } = useIntersectionObserver()

  const getTransform = () => {
    if (!hasIntersected) {
      switch (direction) {
        case "up":
          return "translateY(30px)"
        case "down":
          return "translateY(-30px)"
        case "left":
          return "translateX(30px)"
        case "right":
          return "translateX(30px)"
        default:
          return "none"
      }
    }
    return "none"
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hasIntersected ? 1 : 0,
        transform: getTransform(),
        transition: `all 0.45s cubic-bezier(0.4, 0.8, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
