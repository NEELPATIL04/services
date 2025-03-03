// components/sections/CTASection.jsx
'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ParallaxSection } from "@/components/parallax-section"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden" style={{ backgroundColor: '#000' }}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-[200%] h-full object-cover animate-roll"
          style={{ animationDuration: "20s" }}
          onError={(e) => console.error("Video failed to load", e)}
        >
          <source
            src="/mainframe.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our cutting-edge web development services can help you achieve your goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}