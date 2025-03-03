"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface RotateOnScrollProps {
  children: React.ReactNode
  className?: string
  speed?: number
  reverse?: boolean
  maxRotation?: number
}

export function RotateOnScroll({
  children,
  className,
  speed = 0.1,
  reverse = false,
  maxRotation = 15,
}: RotateOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!element) return
          
          const scrollTop = window.scrollY
          const elementTop = element.getBoundingClientRect().top + scrollTop
          const relativeScroll = scrollTop - elementTop
          
          // Calculate rotation based on scroll position
          let rotation = (relativeScroll * speed) % 360
          
          // Limit rotation to maxRotation
          rotation = Math.max(Math.min(rotation, maxRotation), -maxRotation)
          
          // Apply reverse if needed
          if (reverse) rotation = -rotation
          
          element.style.transform = `rotate(${rotation}deg)`
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, reverse, maxRotation])
  
  return (
    <div ref={elementRef} className={cn("will-change-transform", className)}>
      {children}
    </div>
  )
}