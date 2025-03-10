"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GraduationCap, Code, Users, Lightbulb, ArrowRight, Link } from "lucide-react"
import { ParallaxSection } from "@/components/parallax-section"
import { ScrollReveal } from "@/components/scroll-reveal"
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
            <div className="relative h-[450px] rounded-lg overflow-hidden hidden lg:block">
              <Image 
                src="/4-small.png"
                alt="Student Solutions"
                width={400}
                height={400}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] rounded-lg z-10"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" distance={50}>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <GraduationCap className="h-8 w-8 text-pink-500" />
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
              
              {/* Button with Link - Using asChild prop */}
              <Button asChild className="group">
                <a href="/service/student">
                  Student Programs <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}