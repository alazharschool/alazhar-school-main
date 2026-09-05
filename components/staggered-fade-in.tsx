"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { type ReactNode, Children, cloneElement, isValidElement } from "react"

interface StaggeredFadeInProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export function StaggeredFadeIn({ children, staggerDelay = 150, className = "" }: StaggeredFadeInProps) {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          const existingStyle = (child.props as any)?.style as React.CSSProperties | undefined
          const mergedStyle: React.CSSProperties = {
            ...existingStyle,
            opacity: hasIntersected ? 1 : 0,
            transform: hasIntersected ? "translateY(0)" : "translateY(30px)",
            transition: `all 0.35s cubic-bezier(0.4, 0.8, 0.2, 1) ${index * staggerDelay}ms`,
          }
          return cloneElement(child as any, {
            ...(child.props as any),
            style: mergedStyle,
          })
        }
        return child
      })}
    </div>
  )
}
