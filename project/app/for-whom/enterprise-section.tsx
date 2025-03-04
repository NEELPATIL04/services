// components/who-we-serve/enterprise-section.tsx
"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Building2, ShieldCheck, Users, BarChart3, ArrowRight } from "lucide-react"
import { ParallaxSection } from "@/components/parallax-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FeatureItem } from "./feature-item"

export function EnterpriseSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <ParallaxSection speed={0.15} direction="right" className="absolute -right-64 top-20 opacity-5 z-0">
                <BarChart3 className="h-[800px] w-[800px] text-primary" />
            </ParallaxSection>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal direction="left" distance={50}>
                        <div className="relative h-[400px] rounded-lg overflow-hidden hidden lg:block">
                            <Image
                                src="/image-3.png"
                                alt="New Illustration"
                                width={300}
                                height={300}
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] rounded-lg shadow-lg z-10"
                            />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right" distance={50}>
                        <div>
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                                <Building2 className="h-8 w-8  text-red-500" />
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
    )
}