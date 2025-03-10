// src/app/contact/page.tsx
import { HeroSection } from "./HeroSection"
import { ContactDetailsSection } from "./ContactDetailsSection"
import { FAQSection } from "./FAQSection"
import { CTASection } from "./CTASection"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <HeroSection />
      <ContactDetailsSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}