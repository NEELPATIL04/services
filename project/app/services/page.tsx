import { 
  HeroSection, 
  CoreTechnologiesSection, 
  SpecializedServicesSection, 
  ProcessSection, 
  CTASection 
} from './index';

export const metadata = {
  title: 'Services - TechSolutions',
  description: 'Explore our comprehensive range of web development services',
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <HeroSection />
      <CoreTechnologiesSection />
      <SpecializedServicesSection />
      <ProcessSection />
      <CTASection />
    </div>
  )
}