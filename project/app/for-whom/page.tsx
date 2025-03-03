"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  UserRound, 
  GraduationCap,
  Lightbulb,
  Users,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Clock,
  PenTool,
  HeartHandshake,
  Code
} from "lucide-react"
import { ParallaxSection } from "@/components/parallax-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"

export default function WhoWeServePage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Who We Serve Background"
            speed={0.2}
            className="opacity-20 dark:opacity-10"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="max-w-3xl" direction="up" distance={50}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Who We Serve
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tailored tech solutions for businesses and individuals at every stage of growth
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Client Categories Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide customized solutions for diverse clients, from large enterprises to ambitious individuals
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ClientCategory 
              icon={<Building2 className="h-10 w-10" />}
              title="Enterprise"
              description="Comprehensive solutions for established businesses looking to innovate and scale their digital presence"
              benefits={[
                "Enterprise-grade infrastructure",
                "Custom software development",
                "Digital transformation services",
                "Advanced security protocols"
              ]}
              image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=1478&q=80"
              direction="up"
            />
            
            <ClientCategory 
              icon={<UserRound className="h-10 w-10" />}
              title="Solo Entrepreneurs"
              description="Agile and affordable solutions to help solopreneurs bring their ideas to market quickly"
              benefits={[
                "Rapid MVP development",
                "Scalable architecture",
                "Growth-focused design",
                "Budget-friendly options"
              ]}
              image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              direction="up"
              delay={0.1}
            />
            
            <ClientCategory 
              icon={<GraduationCap className="h-10 w-10" />}
              title="College Students"
              description="Educational resources and project support for students building their tech portfolio"
              benefits={[
                "Student-friendly rates",
                "Technical mentorship",
                "Project collaboration",
                "Portfolio development"
              ]}
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              direction="up"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-24 relative overflow-hidden">
        <ParallaxSection speed={0.15} direction="right" className="absolute -right-64 top-20 opacity-5 z-0">
          <BarChart3 className="h-[800px] w-[800px] text-primary" />
        </ParallaxSection>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" distance={50}>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <ParallaxImage 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Enterprise Solutions"
                  speed={0.1}
                  className="rounded-lg"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" distance={50}>
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <Building2 className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Enterprise Solutions</h2>
                <p className="text-muted-foreground mb-8">
                  We partner with established businesses to deliver robust, scalable solutions that drive digital transformation and create competitive advantages.
                </p>
                
                <div className="space-y-6 mb-8">
                  <FeatureItem 
                    icon={<ShieldCheck className="h-5 w-5" />}
                    title="Enterprise-Grade Security"
                    description="Advanced security protocols to protect sensitive business data and ensure compliance with industry regulations."
                  />
                  <FeatureItem 
                    icon={<Users className="h-5 w-5" />}
                    title="Team Collaboration Tools"
                    description="Custom solutions that enhance communication and streamline workflows across departments and teams."
                  />
                  <FeatureItem 
                    icon={<BarChart3 className="h-5 w-5" />}
                    title="Data Analytics & Insights"
                    description="Powerful analytics tools that transform your business data into actionable insights for strategic decision-making."
                  />
                </div>
                
                <Button>
                  Enterprise Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Solo Entrepreneurs Section */}
      <section className="py-24 bg-muted/50 relative overflow-hidden">
        <ParallaxSection speed={0.15} direction="left" className="absolute -left-64 top-20 opacity-5 z-0">
          <Lightbulb className="h-[800px] w-[800px] text-primary" />
        </ParallaxSection>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" distance={50} className="order-2 lg:order-1">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <UserRound className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Solo Entrepreneur Solutions</h2>
                <p className="text-muted-foreground mb-8">
                  We help solo entrepreneurs turn innovative ideas into market-ready digital products with efficient, scalable, and cost-effective solutions.
                </p>
                
                <div className="space-y-6 mb-8">
                  <FeatureItem 
                    icon={<Clock className="h-5 w-5" />}
                    title="Rapid MVP Development"
                    description="Get your minimum viable product to market quickly with our streamlined development process focused on core functionality."
                  />
                  <FeatureItem 
                    icon={<PenTool className="h-5 w-5" />}
                    title="Growth-Focused Design"
                    description="User-centric design that adapts to your growing business needs and enhances customer acquisition and retention."
                  />
                  <FeatureItem 
                    icon={<HeartHandshake className="h-5 w-5" />}
                    title="Ongoing Support & Guidance"
                    description="Technical partnership that provides not just implementation but strategic guidance as your business evolves."
                  />
                </div>
                
                <Button>
                  Entrepreneur Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" distance={50} className="order-1 lg:order-2">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <ParallaxImage 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Solo Entrepreneur Solutions"
                  speed={0.1}
                  className="rounded-lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section className="py-24 relative overflow-hidden">
        <ParallaxSection speed={0.15} direction="right" className="absolute -right-64 top-20 opacity-5 z-0">
          <Code className="h-[800px] w-[800px] text-primary" />
        </ParallaxSection>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" distance={50}>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <ParallaxImage 
                  src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Student Solutions"
                  speed={0.1}
                  className="rounded-lg"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" distance={50}>
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Student Resources</h2>
                <p className="text-muted-foreground mb-8">
                  We empower the next generation of tech leaders with educational resources, mentorship, and affordable solutions for academic and portfolio projects.
                </p>
                
                <div className="space-y-6 mb-8">
                  <FeatureItem 
                    icon={<Code className="h-5 w-5" />}
                    title="Technical Mentorship"
                    description="Get guidance from experienced developers who can help you learn industry best practices and expand your technical skills."
                  />
                  <FeatureItem 
                    icon={<Users className="h-5 w-5" />}
                    title="Collaborative Projects"
                    description="Work alongside our team on real-world projects to gain valuable experience and enhance your portfolio."
                  />
                  <FeatureItem 
                    icon={<Lightbulb className="h-5 w-5" />}
                    title="Innovation Support"
                    description="Turn your academic ideas into functional prototypes with our technical resources and development assistance."
                  />
                </div>
                
                <Button>
                  Student Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from the diverse range of clients we've helped achieve their digital goals
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <Testimonial 
                quote="The enterprise solution they delivered has transformed our internal processes and significantly improved our customer experience."
                name="Sarah Johnson"
                title="CTO, Global Enterprises Inc."
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80"
                type="enterprise"
              />
            </ScrollReveal>
            
            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <Testimonial 
                quote="As a solo founder, I needed a technical partner who understood my vision and budget constraints. They delivered beyond my expectations."
                name="Michael Chen"
                title="Founder, InnovateTech"
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                type="entrepreneur"
              />
            </ScrollReveal>
            
            <ScrollReveal direction="up" distance={30} delay={0.3}>
              <Testimonial 
                quote="The mentorship and technical guidance I received helped me complete my senior project and land my first developer job."
                name="Emily Rodriguez"
                title="Computer Science Student, Tech University"
                image="https://images.unsplash.com/photo-1596935884413-260a972dab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                type="student"
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
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="CTA Background"
            fill
            className="object-cover opacity-10 mix-blend-overlay"
          />
        </ParallaxSection>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're an enterprise, entrepreneur, or student, we have the expertise to help you succeed in your digital endeavors.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

function ClientCategory({ 
  icon, 
  title, 
  description, 
  benefits,
  image,
  direction = "up",
  delay = 0
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  benefits: string[],
  image: string,
  direction?: string,
  delay?: number
}) {
  return (
    <ScrollReveal direction={direction} delay={delay} distance={30}>
      <div className="bg-card rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
        <div className="relative h-48">
          <ParallaxImage 
            src={image}
            alt={title}
            speed={0.1}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary/10 rounded-full text-primary mr-3">
              {icon}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            {description}
          </p>
          <ul className="space-y-2 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            Learn More
          </Button>
        </div>
      </div>
    </ScrollReveal>
  )
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex items-start">
      <div className="p-2 bg-primary/10 rounded-full text-primary mr-4 mt-1 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function Testimonial({ 
  quote, 
  name, 
  title, 
  image,
  type
}: { 
  quote: string, 
  name: string, 
  title: string, 
  image: string,
  type: "enterprise" | "entrepreneur" | "student"
}) {
  const getIconByType = () => {
    switch(type) {
      case "enterprise": return <Building2 className="h-4 w-4" />;
      case "entrepreneur": return <UserRound className="h-4 w-4" />;
      case "student": return <GraduationCap className="h-4 w-4" />;
      default: return <UserRound className="h-4 w-4" />;
    }
  };
  
  return (
    <div className="bg-card rounded-lg shadow p-6 h-full flex flex-col">
      <div className="mb-4">
        <p className="italic text-muted-foreground">"{quote}"</p>
      </div>
      <div className="mt-auto flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="inline-flex items-center mr-2">
              {getIconByType()}
            </span>
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}