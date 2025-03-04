// components/who-we-serve/client-category.tsx
"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ParallaxImage } from "@/components/parallax-image"
import { ScrollReveal } from "@/components/scroll-reveal"

interface ClientCategoryProps {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
  image: string
  direction?: string
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
    <ScrollReveal direction={direction} delay={delay} distance={30}>
      <div className="bg-card rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
        <div className="relative h-48">
          <ParallaxImage 
            src={image}
            alt={title}
            speed={0.1}
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