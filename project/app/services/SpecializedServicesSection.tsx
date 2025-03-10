import { ScrollReveal } from "@/components/scroll-reveal";
import { ServiceCard } from "./ServiceCard";
import { 
  ShoppingBag, 
  Globe, 
  Smartphone, 
  Zap, 
  BarChart, 
  Code,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

export function SpecializedServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#1c1d1e]">
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute w-[200%] h-[200px] bg-gradient-to-r from-transparent via-blue-100/30 to-transparent dark:via-white/20 blur-[100px] transition-colors duration-300"
          style={{ 
            top: '25%', 
            left: '-90%',
            transform: 'rotate(180deg)'
          }}
        />
      </div>
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Specialized Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond core development, we offer specialized services to enhance your digital presence
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ScrollReveal delay={0.1} direction="left" distance={30}>
            <ServiceCard 
              icon={<ShoppingBag className="h-10 w-10 text-purple-500" />}
              title="Shopify Development"
              description="Custom Shopify store development and theme customization to create unique e-commerce experiences that convert visitors into customers."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction="up" distance={30}>
            <ServiceCard 
              icon={<Globe className="h-10 w-10 text-blue-500" />}
              title="Web Hosting"
              description="Secure, reliable hosting solutions with continuous deployment, monitoring, and maintenance to keep your applications running smoothly."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1} direction="right" distance={30}>
            <ServiceCard 
              icon={<Smartphone className="h-10 w-10 text-green-500" />}
              title="Responsive Design"
              description="Mobile-first design approach ensuring your applications look and function perfectly across all devices and screen sizes."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3} direction="left" distance={30}>
            <ServiceCard 
              icon={<Zap className="h-10 w-10 text-yellow-500" />}
              title="Performance Optimization"
              description="Comprehensive performance audits and optimizations to ensure your web applications load quickly and run efficiently."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" distance={30}>
            <ServiceCard 
              icon={<BarChart className="h-10 w-10 text-red-500" />}
              title="Analytics Integration"
              description="Implementation of analytics tools to track user behavior, conversion rates, and other key metrics to inform business decisions."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3} direction="right" distance={30}>
            <ServiceCard 
              icon={<Code className="h-10 w-10 text-pink-500" />}
              title="Custom API Development"
              description="Building custom APIs to connect your applications with third-party services and enable seamless data exchange."
            />
          </ScrollReveal>
        </div>
        
        <ScrollReveal className="flex justify-center">
          <Link href="/services" className="inline-flex items-center gap-2 bg-black dark:bg-white  text-white  dark:text-black font-medium py-3 px-6 rounded-lg transition-colors duration-200">
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}