"use client"

import { useState } from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  Phone, 
  MapPin,
  Send,
  CheckCircle2,
  Code
} from "lucide-react"
import { ParallaxSection } from "@/components/parallax-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxImage } from "@/components/parallax-image"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log(values)
    setIsSubmitted(true)
    form.reset()
  }

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Contact Background"
            speed={0.2}
            className="opacity-20 dark:opacity-10"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="max-w-3xl" direction="up" distance={50}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have a project in mind or questions about our services? We'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
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
                    icon={<Mail className="h-5 w-5" />}
                    title="Email"
                    content="info@techsolutions.com"
                    href="mailto:info@techsolutions.com"
                  />
                  <ContactInfo 
                    icon={<Phone className="h-5 w-5" />}
                    title="Phone"
                    content="+1 (555) 123-4567"
                    href="tel:+15551234567"
                  />
                  <ContactInfo 
                    icon={<MapPin className="h-5 w-5" />}
                    title="Office"
                    content="123 Tech Street, San Francisco, CA 94107"
                    href="https://maps.google.com"
                  />
                </div>
                
                <div className="relative h-[300px] rounded-lg overflow-hidden">
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
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                          <CheckCircle2 className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out. We'll get back to you as soon as possible.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)}>
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your email" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone (Optional)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your phone number" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="subject"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Subject</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Message subject" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Tell us about your project or inquiry" 
                                    className="min-h-[150px]"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <Button type="submit" className="w-full">
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </Button>
                        </form>
                      </Form>
                    )}
                  </div>
                </ParallaxSection>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Contact us today to schedule a free consultation and discuss how we can help bring your vision to life.
            </p>
            <Button size="lg" variant="secondary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Get in Touch
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

function ContactInfo({ icon, title, content, href }: { icon: React.ReactNode, title: string, content: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-start group"
    >
      <div className="p-2 bg-primary/10 rounded-full text-primary mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-muted-foreground group-hover:text-primary transition-colors">{content}</p>
      </div>
    </a>
  )
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  )
}