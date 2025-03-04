// components/who-we-serve/hero-section.tsx
"use client"

import React from "react"
import { ParallaxImage } from "@/components/parallax-image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Who We Serve Background"
          speed={0.2}
          className="opacity-20 dark:opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-3xl" direction="up" distance={50}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Who We Serve
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Tailored tech solutions for businesses and individuals at every stage of growth
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}