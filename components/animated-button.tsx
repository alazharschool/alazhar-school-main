"use client"

import { Button } from "@/components/ui/button"
import { type ReactNode, useState } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  className?: string
  onClick?: () => void
  href?: string
  asChild?: boolean
  animation?: "pulse" | "bounce" | "glow" | "ripple"
  type?: "button" | "submit" | "reset"
}

export function AnimatedButton({ children, animation = "glow", className = "", ...props }: AnimatedButtonProps) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 300)
    if (props.onClick) props.onClick()
  }

  const getAnimationClass = () => {
    switch (animation) {
      case "pulse":
        return "hover:animate-pulse"
      case "bounce":
        return "hover:animate-bounce"
      case "glow":
        return "hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
      case "ripple":
        return isClicked ? "animate-ping" : ""
      default:
        return ""
    }
  }

  return (
    <Button
      {...props}
      onClick={handleClick}
      className={`
        ${className} 
        ${getAnimationClass()}
        transform hover:scale-105 transition-all duration-100 ease-out relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-300 text-white bg-[rgba(90,38,0,1)]
      `}
    >
      {children}
    </Button>
  )
}
