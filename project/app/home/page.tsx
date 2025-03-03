// pages/index.jsx or app/page.jsx
import HeroSection from "./HeroSection"
import ServicesSection from "./ServiceSection"
import TechStackSection from "./TechStackSection"
import ClientsSection from "./ClientsSection"
import FeaturedProjectSection from "./FeatureProjectsection"
import CTASection from "./CTASection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <ClientsSection />
      <FeaturedProjectSection />
      <CTASection />
    </div>
  )
}