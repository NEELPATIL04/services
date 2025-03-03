import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ParallaxSection } from "@/components/parallax-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  Zap,
  ShoppingBag,
  Braces,
  FileCode,
  Terminal,
  Table,
  BarChart
} from "lucide-react"

export const metadata = {
  title: 'Services - TechSolutions',
  description: 'Explore our comprehensive range of web development services',
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Services Background"
            speed={0.2}
            className="opacity-20 dark:opacity-10"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="max-w-3xl" direction="up" distance={50}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We offer a comprehensive range of web development services using cutting-edge technologies to help businesses thrive in the digital landscape.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-muted/50 relative overflow-hidden">
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
              <ServiceCard 
                icon={<Braces className="h-10 w-10" />}
                title="Next.js 15"
                description="Leveraging the latest features of Next.js 15 for server-side rendering, static site generation, and API routes to build fast, SEO-friendly web applications."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up" distance={30}>
              <ServiceCard 
                icon={<FileCode className="h-10 w-10" />}
                title="React 19"
                description="Building interactive user interfaces with React 19's latest features including concurrent rendering and improved performance optimizations."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3} direction="up" distance={30}>
              <ServiceCard 
                icon={<Terminal className="h-10 w-10" />}
                title="Node.js"
                description="Creating scalable backend services with Node.js for efficient server-side operations and real-time applications."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.4} direction="up" distance={30}>
              <ServiceCard 
                icon={<Server className="h-10 w-10" />}
                title="Express.js"
                description="Developing robust API endpoints and server applications with Express.js for flexible, minimalist web infrastructure."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.5} direction="up" distance={30}>
              <ServiceCard 
                icon={<Database className="h-10 w-10" />}
                title="MongoDB"
                description="Implementing NoSQL database solutions with MongoDB for flexible, scalable data storage and retrieval."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.6} direction="up" distance={30}>
              <ServiceCard 
                icon={<Table className="h-10 w-10" />}
                title="SQL Databases"
                description="Designing relational database systems with PostgreSQL, MySQL, and other SQL technologies for structured data management."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Specialized Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond core development, we offer specialized services to enhance your digital presence
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1} direction="left" distance={30}>
              <ServiceCard 
                icon={<ShoppingBag className="h-10 w-10" />}
                title="Shopify Development"
                description="Custom Shopify store development and theme customization to create unique e-commerce experiences that convert visitors into customers."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up" distance={30}>
              <ServiceCard 
                icon={<Globe className="h-10 w-10" />}
                title="Web Hosting"
                description="Secure, reliable hosting solutions with continuous deployment, monitoring, and maintenance to keep your applications running smoothly."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1} direction="right" distance={30}>
              <ServiceCard 
                icon={<Smartphone className="h-10 w-10" />}
                title="Responsive Design"
                description="Mobile-first design approach ensuring your applications look and function perfectly across all devices and screen sizes."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3} direction="left" distance={30}>
              <ServiceCard 
                icon={<Zap className="h-10 w-10" />}
                title="Performance Optimization"
                description="Comprehensive performance audits and optimizations to ensure your web applications load quickly and run efficiently."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.4} direction="up" distance={30}>
              <ServiceCard 
                icon={<BarChart className="h-10 w-10" />}
                title="Analytics Integration"
                description="Implementation of analytics tools to track user behavior, conversion rates, and other key metrics to inform business decisions."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3} direction="right" distance={30}>
              <ServiceCard 
                icon={<Code className="h-10 w-10" />}
                title="Custom API Development"
                description="Building custom APIs to connect your applications with third-party services and enable seamless data exchange."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/50 relative overflow-hidden">
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

      {/* CTA Section */}
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
              Contact us today to discuss how our services can help you achieve your digital goals.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-none bg-card/50 backdrop-blur-sm h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="mb-4 text-primary bg-primary/10 p-3 rounded-lg inline-block">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function ProcessCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <Card className="border-none bg-background shadow-md h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="text-4xl font-bold text-primary/20 mb-4">{number}</div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}