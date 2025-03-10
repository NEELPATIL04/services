import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"
import { ArrowRight } from "lucide-react"

export default function PortfolioSection() {
  return (
    <section className="py-29 relative overflow-hidden dark:bg-[#1c1d1e] lg:mb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content on the left - shifted down slightly */}
          <ScrollReveal delay={0.2} direction="left" distance={50}>
            <div className="space-y-4 flex flex-col h-full pt-16">
              <h3 className="text-2xl font-bold">Custom Portfolio Solutions</h3>
              <p className="text-muted-foreground">
                Stand out from the crowd with a bespoke portfolio website that highlights your unique skills, experience, and creative work. Our custom-built portfolios are designed to impress potential clients and employers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>Responsive design for all screen sizes</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>Interactive project showcases</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>Personal branding integration</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-primary mr-2" />
                  <span>Easy content management</span>
                </li>
              </ul>
              <Button asChild className="self-start mt-2">
                <Link href="/portfolio">Explore Portfolio Options</Link>
              </Button>
            </div>
          </ScrollReveal>
          
          {/* Title and Image on the right */}
          <div className="space-y-10">
            {/* Title above the image */}
            <ScrollReveal delay={0.3} direction="right" distance={50}>
              <div className="mb-4">
                <h2 className="text-3xl md:text-4xl font-bold">Portfolio Development</h2>
                <p className="text-muted-foreground">
                  Showcase your skills and projects with a professionally designed portfolio
                </p>
              </div>
            </ScrollReveal>
            
            {/* Image below the title */}
            <ScrollReveal delay={0.4} direction="right" distance={50}>
              <div className="rounded-lg overflow-hidden h-[400px]">
                <ParallaxImage 
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Portfolio Development"
                  className="h-full"
                  speed={0.15}
                  scale={1.1}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}