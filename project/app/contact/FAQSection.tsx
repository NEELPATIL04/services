// src/components/contact/FAQSection.tsx
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { FaqItem } from "./FaqItem"
import { Code } from "lucide-react"

export const FAQSection = () => (
  <section className="py-24 relative overflow-hidden">
    <ParallaxSection speed={0.15} direction="right" className="absolute -left-64 top-20 opacity-5 z-0">
      <Code className="h-[800px] w-[800px] text-primary" />
    </ParallaxSection>
    
    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our services and process
        </p>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ScrollReveal delay={0.1} direction="left" distance={30}>
          <FaqItem 
            question="What is your typical project timeline?"
            answer="Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 2-3 months or more. We'll provide a detailed timeline during our initial consultation."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1} direction="right" distance={30}>
          <FaqItem 
            question="Do you offer ongoing maintenance?"
            answer="Yes, we offer various maintenance packages to keep your website secure, up-to-date, and performing optimally. Our team can handle regular updates, security patches, and content changes."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.2} direction="left" distance={30}>
          <FaqItem 
            question="How do you handle project pricing?"
            answer="We provide custom quotes based on your specific requirements. Factors that influence pricing include project complexity, features needed, timeline, and ongoing support requirements."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.2} direction="right" distance={30}>
          <FaqItem 
            question="Can you work with our existing design team?"
            answer="Absolutely! We're happy to collaborate with your in-house team or other agencies. We can adapt our process to complement your existing workflow and resources."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.3} direction="left" distance={30}>
          <FaqItem 
            question="Do you offer hosting services?"
            answer="Yes, we provide reliable hosting solutions with continuous deployment, regular backups, and security monitoring to ensure your application runs smoothly."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.3} direction="right" distance={30}>
          <FaqItem 
            question="What technologies do you specialize in?"
            answer="We specialize in modern web technologies including Next.js 15, React 19, Node.js, Express, MongoDB, SQL databases, and more. We stay current with the latest advancements to deliver cutting-edge solutions."
          />
        </ScrollReveal>
      </div>
    </div>
  </section>
)