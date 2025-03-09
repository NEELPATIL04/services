// components/policy/PolicyPage.jsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParallaxSection } from "@/components/parallax-section";

export default function PolicyPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-start pt-20 justify-start overflow-hidden bg-gray-100 dark:bg-[#1c1d1e] transition-colors duration-300">
      <ParallaxSection speed={0.2} direction="up" className="z-10 container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm transition-colors duration-300">WebDrift Policies</p>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white max-w-3xl mx-auto transition-colors duration-300">
          Legal Policies & Documents
        </h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 transition-colors duration-300">
          Review our terms, privacy policy, and cookie policy to understand how we operate and protect your data.
        </p>
      </ParallaxSection>
      
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Terms of Service Card */}
        <div className="bg-white dark:bg-[#292a2b] rounded-lg shadow-md p-6 transition-colors duration-300 flex flex-col items-center text-center">
          <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">Terms of Service</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
            Our terms outline the rules, guidelines, and obligations when using WebDrifts services and platforms.
          </p>
          <Button asChild className="mt-auto rounded-full px-6 bg-blue-600 hover:bg-blue-700 dark:bg-white text-white dark:text-black transition-colors duration-300">
            <Link href="/policy/terms">Read Terms</Link>
          </Button>
        </div>
        
        {/* Privacy Policy Card */}
        <div className="bg-white dark:bg-[#292a2b] rounded-lg shadow-md p-6 transition-colors duration-300 flex flex-col items-center text-center">
          <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">Privacy Policy</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
            Learn how we collect, use, and protect your personal information when you use our services.
          </p>
          <Button asChild className="mt-auto rounded-full px-6 bg-purple-600 hover:bg-purple-700 dark:bg-white text-white dark:text-black transition-colors duration-300">
            <Link href="/policy/privacy">Read Policy</Link>
          </Button>
        </div>
        
        {/* Cookie Policy Card */}
        <div className="bg-white dark:bg-[#292a2b] rounded-lg shadow-md p-6 transition-colors duration-300 flex flex-col items-center text-center">
          <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 dark:text-amber-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">Cookie Policy</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
            Understand how we use cookies and similar technologies to enhance your browsing experience.
          </p>
          <Button asChild className="mt-auto rounded-full px-6 bg-amber-600 hover:bg-amber-700 dark:bg-white text-white dark:text-black transition-colors duration-300">
            <Link href="/policy/cookies">Read Policy</Link>
          </Button>
        </div>
      </div>
      
      {/* Code snippet decoration at bottom */}
        
    </div>
  );
}