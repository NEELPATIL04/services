// app/(marketing)/who-we-serve/page.tsx
"use client"

import React from "react"
import { HeroSection } from "./hero-section"
import { ClientCategoriesSection } from "./client-categories-section"
import { EnterpriseSection } from "./enterprise-section"
import { SoloEntrepreneurSection } from "./solo-entrepreneur-section"
import { StudentsSection } from "./students-section"
import { TestimonialsSection } from "./testimonials-section"
import { CTASection } from "./cta-section"

export default function WhoWeServePage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Client Categories Section */}
      <ClientCategoriesSection />

      {/* Enterprise Section */}
      <EnterpriseSection />

      {/* Solo Entrepreneurs Section */}
      <SoloEntrepreneurSection />

      {/* Students Section */}
      <StudentsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}