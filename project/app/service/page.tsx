// components/services/ServicesPage.jsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParallaxSection } from "@/components/parallax-section";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-start pt-20 justify-start overflow-hidden bg-gray-100 dark:bg-[#1c1d1e] transition-colors duration-300">
      <ParallaxSection speed={0.2} direction="up" className="z-10 container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm transition-colors duration-300">WebDrift Services</p>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white max-w-3xl mx-auto transition-colors duration-300">
          Our Services & Solutions
        </h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 transition-colors duration-300">
          Tailored web solutions for organizations of all sizes, from enterprise businesses to solo entrepreneurs and educational institutions.
        </p>
      </ParallaxSection>
      
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Enterprise Card */}
        <div className="bg-white dark:bg-[#292a2b] rounded-lg shadow-md p-6 transition-colors duration-300 flex flex-col items-center text-center">
          <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">Enterprise</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
            Scalable solutions for large organizations looking to modernize their digital infrastructure and streamline operations.
          </p>
          <Button asChild className="mt-auto rounded-full px-6 bg-blue-600 hover:bg-blue-700 dark:bg-white text-white dark:text-black transition-colors duration-300">
            <Link href="/service/enterprise">Learn More</Link>
          </Button>
        </div>
        
        {/* Solo Entrepreneurs Card */}
        <div className="bg-white dark:bg-[#292a2b] rounded-lg shadow-md p-6 transition-colors duration-300 flex flex-col items-center text-center">
          <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">Solo Entrepreneurs</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
            Affordable, high-quality web solutions to help startups and solo founders bring their ideas to market quickly.
          </p>
          <Button asChild className="mt-auto rounded-full px-6 bg-purple-600 hover:bg-purple-700 dark:bg-white text-white dark:text-black transition-colors duration-300">
            <Link href="/service/solo-entrepreneur">Learn More</Link>
          </Button>
        </div>
        
        {/* Educational Institutions Card */}
        <div className="bg-white dark:bg-[#292a2b] rounded-lg shadow-md p-6 transition-colors duration-300 flex flex-col items-center text-center">
          <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 dark:text-amber-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">Educational Institutions</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
            Custom platforms for colleges and educational organizations to enhance learning experiences and administrative efficiency.
          </p>
          <Button asChild className="mt-auto rounded-full px-6 bg-amber-600 hover:bg-amber-700 dark:bg-white text-white dark:text-black transition-colors duration-300">
            <Link href="/service/student">Learn More</Link>
          </Button>
        </div>
      </div>
      
      {/* Call to Action Section */}
      {/* <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
          Ready to transform your digital presence?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 transition-colors duration-300">
          Our team of experts is ready to help you achieve your goals with tailored web solutions.
        </p>
        <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg">
          <Link href="/contact">Get Started Today</Link>
        </Button>
      </div> */}
    </div>
  );
}