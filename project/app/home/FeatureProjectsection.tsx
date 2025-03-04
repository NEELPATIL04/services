// components/sections/FeaturedProjectSection.jsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"
import { ArrowRight } from "lucide-react"

export default function FeaturedProjectSection() {
  return (
    <section className="py-24 relative overflow-hidden dark:bg-[#1c1d1e]">
      <div className="container mx-auto px-4">
        <ScrollReveal className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Project</h2>
          <p className="text-muted-foreground">
            Our latest work showcases the power of modern web technologies
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.2} direction="left" distance={50}>
            <div className="rounded-lg overflow-hidden h-[400px]">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Featured Project"
                className="h-full"
                speed={0.15}
                scale={1.1}
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4} direction="right" distance={50}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">E-Commerce Platform</h3>
              <p className="text-muted-foreground">
                A high-performance e-commerce platform built with Next.js 15 and React 19, featuring real-time inventory management, secure payment processing, and a responsive design that works across all devices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>Server-side rendering for optimal SEO</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>Integrated payment gateway</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>Advanced product filtering and search</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>Customer account management</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">View Similar Projects</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}