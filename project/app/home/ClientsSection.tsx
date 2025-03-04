// components/sections/ClientsSection.jsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { ClientCard } from "./ClientCard"
import { Building2, User, GraduationCap, Code } from "lucide-react"

export default function ClientsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/30  dark:bg-[#1c1d1e]">
      <ParallaxSection speed={0.2} direction="left" className="absolute -right-64 top-0 opacity-10 z-0">
        <Code className="h-[600px] w-[600px] text-primary" />
      </ParallaxSection>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our solutions are tailored to meet the unique needs of different clients
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.2} direction="left" distance={30}>
            <ClientCard 
              icon={<Building2 />}
              title="Enterprise"
              description="Scalable solutions for large organizations looking to modernize their digital infrastructure and streamline operations."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" distance={30}>
            <ClientCard 
              icon={<User />}
              title="Solo Entrepreneurs"
              description="Affordable, high-quality web solutions to help startups and solo founders bring their ideas to market quickly."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction="right" distance={30}>
            <ClientCard 
              icon={<GraduationCap />}
              title="Educational Institutions"
              description="Custom platforms for colleges and educational organizations to enhance learning experiences and administrative efficiency."
            />
          </ScrollReveal>
        </div>
        
        <ScrollReveal className="text-center mt-12" delay={0.6}>
          <Button size="lg" variant="outline" asChild>
            <Link href="/for-whom">Learn More</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}