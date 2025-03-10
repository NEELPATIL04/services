"use client"

import React from "react"
import { Building2, UserRound, GraduationCap } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
// Import both the component and the type explicitly
import { ClientCategory, ClientCategoryProps } from "./client-category"

export function ClientCategoriesSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#1c1d1e]">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide customized solutions for diverse clients, from large enterprises to ambitious individuals
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ClientCategory 
            icon={<Building2 className="h-10 w-10 text-red-500" />}
            title="Enterprise"
            description="Comprehensive solutions for established businesses looking to innovate and scale their digital presence"
            benefits={[
              "Enterprise-grade infrastructure",
              "Custom software development",
              "Digital transformation services",
              "Advanced security protocols"
            ]}
            image="/ent2.jpeg"
            link="/service/enterprise"
            direction="up"
            delay={0}
          />
          
          <ClientCategory 
            icon={<UserRound className="h-10 w-10 text-orange-400" />}
            title="Solo Entrepreneurs"
            description="Agile and affordable solutions to help solopreneurs bring their ideas to market quickly"
            benefits={[
              "Rapid MVP development",
              "Scalable architecture",
              "Growth-focused design",
              "Budget-friendly options"
            ]}
            image="/api/placeholder/800/600"
            link="/service/solo-entrepreneur"
            direction="up"
            delay={0.1}
          />
          
          <ClientCategory 
            icon={<GraduationCap className="h-10 w-10 text-pink-600" />}
            title="College Students"
            description="Educational resources and project support for students building their tech portfolio"
            benefits={[
              "Student-friendly rates",
              "Technical mentorship",
              "Project collaboration",
              "Portfolio development"
            ]}
            image="/api/placeholder/800/600"
            link="/service/student"
            direction="up"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  )
}