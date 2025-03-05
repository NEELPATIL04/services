// components/who-we-serve/solo-entrepreneur-section.tsx
"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { UserRound, Lightbulb, Clock, PenTool, HeartHandshake, ArrowRight } from "lucide-react"
import { ParallaxSection } from "@/components/parallax-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FeatureItem } from "./feature-item"

export function SoloEntrepreneurSection() {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden ">
      <ParallaxSection speed={0.15} direction="left" className="absolute -left-64 top-20 opacity-5 z-0">
        <Lightbulb className="h-[800px] w-[800px] text-primary" />
      </ParallaxSection>
      
      <div className="container mx-auto px-4 relative z-10 sm:ml-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" distance={50}>
            <div className="pr-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <UserRound className="h-8 w-8 text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Solo Entrepreneur Solutions</h2>
              <p className="text-muted-foreground mb-8">
                We help solo entrepreneurs turn innovative ideas into market-ready digital products with efficient, scalable, and cost-effective solutions.
              </p>
              
              <div className="space-y-6 mb-8">
                <FeatureItem 
                  icon={<Clock className="h-5 w-5 " />}
                  title="Rapid MVP Development"
                  description="Get your minimum viable product to market quickly with our streamlined development process focused on core functionality."
                />
                <FeatureItem 
                  icon={<PenTool className="h-5 w-5" />}
                  title="Growth-Focused Design"
                  description="User-centric design that adapts to your growing business needs and enhances customer acquisition and retention."
                />
                <FeatureItem 
                  icon={<HeartHandshake className="h-5 w-5" />}
                  title="Ongoing Support & Guidance"
                  description="Technical partnership that provides not just implementation but strategic guidance as your business evolves."
                />
              </div>
              
              <Button>
                Entrepreneur Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" distance={50}>
            <div className="relative h-[400px] rounded-lg overflow-hidden hidden lg:block">
              <Image
                src="/image-2.png"
                alt="Solo Entrepreneur Illustration"
                width={600}
                height={600}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] rounded-lg z-10"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}