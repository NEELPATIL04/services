import { ParallaxSection } from "@/components/parallax-section";
import { ParallaxImage } from "@/components/parallax-image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tech Solutions | Web & App Development | Pune, India",
  description: `📞 Contact Tech Solutions – Expert IT Services, Web & App Development | Pune, India  
  Get in touch with **Tech Solutions** for top-tier **IT services, web & mobile app development, digital transformation, and business consultation**.  
  Reach us via **email, phone, or visit our Pune office**. Let’s build your next big project!`
};

export const ContactDetailsSection = () => (
  <section className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ScrollReveal direction="left" distance={50}>
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we'll get back to you as soon as possible. We're excited to learn about your project and how we can help.
            </p>
            
            <div className="space-y-6 mb-8">
              <ContactInfo 
                icon={<Mail className="h-5 w-5 text-orange-400" />}
                title="Email"
                content="info@techsolutions.com"
                href="mailto:info@techsolutions.com"
              />
              <ContactInfo 
                icon={<Phone className="h-5 w-5 text-red-400" />}
                title="Phone"
                content="+91 7821954352"
                href="tel:+917821954352"
              />
              <ContactInfo 
                icon={<MapPin className="h-5 w-5 text-yellow-400" />}
                title="Office"
                content="Bavdhan, Pune, India"
                href="https://maps.google.com"
              />
            </div>
            
            <div className="relative h-[100px] rounded-lg overflow-hidden">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
                alt="Office"
                speed={0.1}
              />
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="right" distance={50} delay={0.2}>
          <div>
            <ParallaxSection speed={0.1} direction="up">
              <div className="bg-card rounded-lg shadow-lg p-8">
                <ContactForm />
              </div>
            </ParallaxSection>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);
