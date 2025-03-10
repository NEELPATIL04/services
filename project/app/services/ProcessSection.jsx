// src/components/services/ProcessSection.jsx
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { ProcessCard } from "./ProcessCard"
import { Code } from "lucide-react"

export function ProcessSection() {
  return (
    <section className="py-24 dark:bg-[#1c1d1e] relative overflow-hidden">
      <ParallaxSection speed={0.2} direction="right" className="absolute -left-64 top-0 opacity-10 z-0">
        <Code className="h-[600px] w-[600px] text-primary" />
      </ParallaxSection>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a structured approach to ensure successful project delivery
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ScrollReveal delay={0.1} direction="up" distance={40}>
            <ProcessCard 
              number="01"
              title="Discovery"
              description="We start by understanding your business goals, target audience, and project requirements."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction="up" distance={40}>
            <ProcessCard 
              number="02"
              title="Planning"
              description="Creating a detailed project roadmap with timelines, milestones, and resource allocation."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3} direction="up" distance={40}>
            <ProcessCard 
              number="03"
              title="Development"
              description="Building your solution using agile methodologies with regular updates and feedback cycles."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" distance={40}>
            <ProcessCard 
              number="04"
              title="Deployment"
              description="Launching your application with thorough testing and ongoing support to ensure success."
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}