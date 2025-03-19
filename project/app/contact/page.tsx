"use client";

import { HeroSection } from "./HeroSection";
import { ContactDetailsSection } from "./ContactDetailsSection";
import { FAQSection } from "./FAQSection";
import { CTASection } from "./CTASection";
import contactSeo from "./contactSeo";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact Us | WebDrift</title>
        <meta name="description" content="Get in touch with WebDrift for inquiries, support, and collaborations." />
        <meta name="keywords" content="contact WebDrift, support, business inquiries, customer service, web development consultation" />
        <meta property="og:title" content="Contact Us | WebDrift" />
        <meta property="og:description" content="Reach out to WebDrift for all your web development and digital needs." />
        <meta property="og:url" content="https://webdrift.in/contact" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSeo) }}
        />
      </Head>

      <div className="flex flex-col min-h-screen pt-20">
        <HeroSection />
        <ContactDetailsSection />
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
}
