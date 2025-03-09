"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

// Updated type definition to allow string while still maintaining type safety
interface ClientCategoryProps {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
  image: string
  direction?: "none" | "right" | "left" | "up" | "down" | string
  delay?: number
}

export function ClientCategory({ 
  icon, 
  title, 
  description, 
  benefits,
  image,
  direction = "up",
  delay = 0
}: ClientCategoryProps) {
  return (
    <ScrollReveal 
      direction={
        // Type assertion to handle potential string values
        ["none", "right", "left", "up", "down"].includes(direction as string) 
          ? direction as "none" | "right" | "left" | "up" | "down" 
          : "up"
      } 
      delay={delay} 
      distance={30}
    >
      <div className="bg-card rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
        <div className="relative h-48">
          {/* Replaced ParallaxImage with regular Image component */}
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            priority
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary/10 rounded-full text-primary mr-3">
              {icon}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            {description}
          </p>
          <ul className="space-y-2 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            Learn More
          </Button>
        </div>
      </div>
    </ScrollReveal>
  )
}