// components/who-we-serve/testimonials-section.tsx
"use client"

import React from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Testimonial } from "./testimonial"

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the diverse range of clients we've helped achieve their digital goals
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal direction="up" distance={30} delay={0.1}>
            <Testimonial 
              quote="The enterprise solution they delivered has transformed our internal processes and significantly improved our customer experience."
              name="Sarah Johnson"
              title="CTO, Global Enterprises Inc."
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80"
              type="enterprise"
            />
          </ScrollReveal>
          
          <ScrollReveal direction="up" distance={30} delay={0.2}>
            <Testimonial 
              quote="As a solo founder, I needed a technical partner who understood my vision and budget constraints. They delivered beyond my expectations."
              name="Michael Chen"
              title="Founder, InnovateTech"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              type="entrepreneur"
            />
          </ScrollReveal>
          
          <ScrollReveal direction="up" distance={30} delay={0.3}>
            <Testimonial 
              quote="The mentorship and technical guidance I received helped me complete my senior project and land my first developer job."
              name="Emily Rodriguez"
              title="Computer Science Student, Tech University"
              image="https://images.unsplash.com/photo-1596935884413-260a972dab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              type="student"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}