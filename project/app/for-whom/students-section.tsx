    // components/who-we-serve/students-section.tsx
"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap, Code, Users, Lightbulb, ArrowRight } from "lucide-react"
import { ParallaxSection } from "@/components/parallax-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"
import { FeatureItem } from "./feature-item"

export function StudentsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <ParallaxSection speed={0.15} direction="right" className="absolute -right-64 top-20 opacity-5 z-0">
        <Code className="h-[800px] w-[800px] text-primary" />
      </ParallaxSection>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" distance={50}>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Student Solutions"
                speed={0.1}
                className="rounded-lg"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" distance={50}>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Student Resources</h2>
              <p className="text-muted-foreground mb-8">
                We empower the next generation of tech leaders with educational resources, mentorship, and affordable solutions for academic and portfolio projects.
              </p>
              
              <div className="space-y-6 mb-8">
                <FeatureItem 
                  icon={<Code className="h-5 w-5" />}
                  title="Technical Mentorship"
                  description="Get guidance from experienced developers who can help you learn industry best practices and expand your technical skills."
                />
                <FeatureItem 
                  icon={<Users className="h-5 w-5" />}
                  title="Collaborative Projects"
                  description="Work alongside our team on real-world projects to gain valuable experience and enhance your portfolio."
                />
                <FeatureItem 
                  icon={<Lightbulb className="h-5 w-5" />}
                  title="Innovation Support"
                  description="Turn your academic ideas into functional prototypes with our technical resources and development assistance."
                />
              </div>
              
              <Button>
                Student Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}