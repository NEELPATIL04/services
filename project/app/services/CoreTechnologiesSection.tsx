// src/components/services/CoreTechnologiesSection.jsx
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { CoreCard } from "./CoreCards"
import { 
  Braces, 
  FileCode, 
  Terminal, 
  Server, 
  Database, 
  Table,
  Code
} from "lucide-react"

export function CoreTechnologiesSection() {
  return (
    <section className="py-24 bg-muted/50 dark:bg-[#1c1d1e] relative overflow-hidden">
      <ParallaxSection speed={0.15} direction="right" className="absolute -left-64 top-20 opacity-5 z-0">
        <Code className="h-[800px] w-[800px] text-primary" />
      </ParallaxSection>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We specialize in modern web technologies to deliver high-performance, scalable solutions
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1} direction="up" distance={30}>
            <CoreCard 
              icon={<Braces className="h-10 w-10 text-blue-500" />}
              title="Next.js 15"
              description="Leveraging the latest features of Next.js 15 for server-side rendering, static site generation, and API routes to build fast, SEO-friendly web applications."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction="up" distance={30}>
            <CoreCard 
              icon={<FileCode className="h-10 w-10 text-green-500" />}
              title="React 19"
              description="Building interactive user interfaces with React 19's latest features including concurrent rendering and improved performance optimizations."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3} direction="up" distance={30}>
            <CoreCard 
              icon={<Terminal className="h-10 w-10 text-purple-500" />}
              title="Node.js"
              description="Creating scalable backend services with Node.js for efficient server-side operations and real-time applications."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" distance={30}>
            <CoreCard 
              icon={<Server className="h-10 w-10 text-yellow-500" />}
              title="Express.js"
              description="Developing robust API endpoints and server applications with Express.js for flexible, minimalist web infrastructure."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5} direction="up" distance={30}>
            <CoreCard 
              icon={<Database className="h-10 w-10 text-orange-500" />}
              title="MongoDB"
              description="Implementing NoSQL database solutions with MongoDB for flexible, scalable data storage and retrieval."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.6} direction="up" distance={30}>
            <CoreCard 
              icon={<Table className="h-10 w-10 text-red-500" />}
              title="SQL Databases"
              description="Designing relational database systems with PostgreSQL, MySQL, and other SQL technologies for structured data management."
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
