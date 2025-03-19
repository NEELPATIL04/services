"use client";

import React from "react";
import { HeroSection } from "./hero-section";
import { ClientCategoriesSection } from "./client-categories-section";
import { EnterpriseSection } from "./enterprise-section";
import { SoloEntrepreneurSection } from "./solo-entrepreneur-section";
import { StudentsSection } from "./students-section";
import { TestimonialsSection } from "./testimonials-section";
import { CTASection } from "./cta-section";
import whoWeServeSeo from "./whoWeServeSeo";
import Head from "next/head";

export default function WhoWeServePage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Who We Serve | WebDrift</title>
        <meta name="description" content="We help enterprises, solo entrepreneurs, and students with tailored web solutions." />
        <meta name="keywords" content="enterprise solutions, web development, startups, students, testimonials, business growth" />
        <meta property="og:title" content="Who We Serve | WebDrift" />
        <meta property="og:description" content="Find out how we help enterprises, solo entrepreneurs, and students with the best web solutions." />
        <meta property="og:url" content="https://webdrift.in/for-whom"/>
        <meta property="og:type" content="website"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(whoWeServeSeo) }}
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Wrapper for Hero and Services sections with shared glow effect */}
        <div className="relative">
          {/* Shared Diagonal Glow Effect for Hero and Services sections only */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div
              className="absolute w-[200%] h-[300px] bg-gradient-to-r from-transparent via-blue-100/30 to-transparent dark:via-white/10 blur-[100px] transition-colors duration-300 z-10"
              style={{
                top: "15%",
                left: "-25%",
                transform: "rotate(35deg)",
              }}
            />
          </div>
          {/* Hero Section */}
          <HeroSection />

          {/* Client Categories Section */}
          <ClientCategoriesSection />
        </div>

        {/* Enterprise Section */}
        <EnterpriseSection />

        {/* Solo Entrepreneurs Section */}
        <SoloEntrepreneurSection />

        {/* Students Section */}
        <StudentsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  );
}
