"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxSection({
  children,
  className,
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    
    let startPosition = 0
    let ticking = false
    
    const handleScroll = () => {
      startPosition = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!section) return
          
          const yPos = startPosition * speed
          let transform = ""
          
          switch (direction) {
            case "up":
              transform = `translateY(-${yPos}px)`
              break
            case "down":
              transform = `translateY(${yPos}px)`
              break
            case "left":
              transform = `translateX(-${yPos}px)`
              break
            case "right":
              transform = `translateX(${yPos}px)`
              break
          }
          
          section.style.transform = transform
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, direction])
  
  return (
    <div ref={sectionRef} className={cn("will-change-transform", className)}>
      {children}
    </div>
  )
}