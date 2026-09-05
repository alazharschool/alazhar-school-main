"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
  }, [hasIntersected])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [handleIntersection, options])

  return { ref, isIntersecting, hasIntersected }
}
