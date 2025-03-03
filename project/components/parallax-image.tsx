"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
  priority?: boolean
  fill?: boolean
  width?: number
  height?: number
  scale?: number
}

export function ParallaxImage({
  src,
  alt,
  className,
  speed = 0.5,
  priority = false,
  fill = true,
  width,
  height,
  scale = 1.2,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const container = containerRef.current
    const image = imageRef.current
    if (!container || !image) return
    
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!container || !image) return
          
          const rect = container.getBoundingClientRect()
          const windowHeight = window.innerHeight
          
          // Check if element is in viewport
          if (rect.top < windowHeight && rect.bottom > 0) {
            // Calculate how far the container is from the center of the viewport
            const distanceFromCenter = (rect.top + rect.height / 2) - (windowHeight / 2)
            
            // Calculate the y-position based on the distance from center and speed
            const yPos = distanceFromCenter * speed
            
            // Apply the transform
            image.style.transform = `translate3d(0, ${yPos}px, 0) scale(${scale})`
          }
          
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    // Initial position
    handleScroll()
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, scale])
  
  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <div 
        ref={imageRef} 
        className="absolute inset-0 will-change-transform"
        style={{ 
          transition: "transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  )
}