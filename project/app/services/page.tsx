import { 
  HeroSection, 
  CoreTechnologiesSection, 
  SpecializedServicesSection, 
  ProcessSection, 
  CTASection 
} from './index';

import Head from 'next/head';
import { getServiceSchema } from './serviceSchema';

export const metadata = {
  title: 'Services - TechSolutions',
  description: 'Explore our comprehensive range of web development services',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={getServiceSchema()} 
        />
      </Head>

      {/* Wrapper for Hero and Services sections with shared glow effect */}
      <div className="relative">
        {/* Shared Diagonal Glow Effect for Hero and Services sections only */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div 
            className="absolute w-[200%] h-[300px] bg-gradient-to-r from-transparent via-blue-100/30 to-transparent dark:via-white/10 blur-[100px] transition-colors duration-300 z-10"
            style={{ 
              top: '15%', 
              left: '-25%',
              transform: 'rotate(35deg)'
            }}
          />
        </div>

        <HeroSection />
        <CoreTechnologiesSection />
      </div>
      
      <SpecializedServicesSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
