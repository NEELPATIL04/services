// src/components/contact/CTASection.tsx
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParallaxSection } from "@/components/parallax-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CTAButton } from "./CTAButton"

export const CTASection = () => (
  <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
    <ParallaxSection speed={0.1} direction="up" className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary"></div>
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80"
        alt="CTA Background"
        fill
        className="object-cover opacity-10 mix-blend-overlay"
      />
    </ParallaxSection>
    
    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8 opacity-90">
          Contact us today to schedule a free consultation and discuss how we can help bring your vision to life.
        </p>
        <CTAButton />
      </ScrollReveal>
    </div>
  </section>
)