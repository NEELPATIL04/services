import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ParallaxSection } from "@/components/parallax-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ServiceCard } from "./ServiceCard"
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  Zap
} from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 bg-white dark:bg-[#1c1d1e] transition-colors duration-300">
      {/* Adjusted Diagonal Glow Effect from HeroSection */}
      {/* <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          className="absolute w-[200%] h-[300px] bg-gradient-to-r from-transparent via-blue-100/30 to-transparent dark:via-white/10 blur-[100px] transition-colors duration-300"
          style={{ 
            top: '-40%', 
            left: '-15%',  // Adjusted from -65% to -25% to shift more to the right
            transform: 'rotate(35deg)'
          }}
        />
      </div> */}
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Services
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive range of web development services using the latest technologies
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal delay={0.2}>
            <ServiceCard 
              icon={<Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
              title="Frontend Development"
              description="Modern, responsive interfaces built with React 19 and Next.js 15 for optimal performance and user experience."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <ServiceCard 
              icon={<Server className="h-8 w-8 text-green-600 dark:text-green-400" />}
              title="Backend Development"
              description="Robust server-side solutions using Node.js, Express, and other modern frameworks."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <ServiceCard 
              icon={<Database className="h-8 w-8 text-purple-600 dark:text-purple-400" />}
              title="Database Solutions"
              description="Efficient data management with MongoDB, SQL, PostgreSQL, and other database technologies."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <ServiceCard 
              icon={<Globe className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
              title="Web Hosting"
              description="Secure, scalable hosting solutions for applications of any size with continuous deployment."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <ServiceCard 
              icon={<Smartphone className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
              title="Responsive Design"
              description="Mobile-first approach ensuring your applications work flawlessly across all devices."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.7}>
            <ServiceCard 
              icon={<Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />}
              title="Performance Optimization"
              description="Speed up your applications with advanced optimization techniques and best practices."
            />
          </ScrollReveal>
        </div>

        <div className="text-center mt-16">
          <Button asChild className="rounded-md bg-blue-600 hover:bg-blue-700 text-white dark:text-black dark:bg-white ">
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}