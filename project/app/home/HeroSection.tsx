import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParallaxSection } from "@/components/parallax-section";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-start pt-20 justify-center overflow-hidden bg-gray-100 dark:bg-[#1c1d1e] transition-colors duration-300">
      {/* Diagonal Glow Effect - visible in both light and dark modes with different colors */}
      {/* <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute w-[200%] h-[300px] bg-gradient-to-r from-transparent via-blue-100/30 to-transparent dark:via-white/10 blur-[100px] transition-colors duration-300"
          style={{ 
            top: '30%', 
            left: '-50%',
            transform: 'rotate(35deg)'
          }}
        />
      </div> */}

      <ParallaxSection speed={0.3} direction="up" className="z-10 container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm transition-colors duration-300">Beyond imagination...</p>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white max-w-3xl mx-auto transition-colors duration-300">
        Empowering Students, Enterprises, and Mid-Level Companies
        </h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 transition-colors duration-300">
        WebDrift helps students, enterprises, and mid-level companies build projects efficiently with cutting-edge technology and expert guidance.
        </p>
        
        <div className="flex justify-center">
          <Button size="lg" asChild className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 dark:bg-white text-white dark:text-black transition-colors duration-300">
            <Link href="/get-started">Get started</Link>
          </Button>
        </div>
      </ParallaxSection>
      
      {/* Code snippets */}
      <div className="absolute bottom-0 w-full flex justify-between px-20 pb-8 opacity-70">
        {/* Code snippet 1 */}
        <div className="w-3/12 rounded-lg h-40 border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#222324] overflow-hidden transition-colors duration-300">
          <div className="px-4 py-2 flex items-center gap-2 bg-gray-100 dark:bg-[#222324] transition-colors duration-300">
            <div className="w-5 h-5 rounded bg-gray-400 dark:bg-[#222324] transition-colors duration-300"></div>
            <span className="text-gray-600 dark:text-gray-400 text-xs transition-colors duration-300">You shared the snippet with Tsavo</span>
          </div>
          <div className="p-4 text-sm font-mono">
            <div>
              <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">1</span> 
              <span className="text-pink-600 dark:text-pink-400 transition-colors duration-300">const</span> 
              <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">stage</span> 
              <span className="text-pink-600 dark:text-pink-400 transition-colors duration-300">=</span> 
              <span className="text-blue-600 dark:text-blue-300 transition-colors duration-300">document</span>.
              <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">querySelector</span>
              (<span className="text-green-600 dark:text-green-400 transition-colors duration-300">&apos;svg&apos;</span>)
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">2</span> 
              <span className="text-pink-600 dark:text-pink-400 transition-colors duration-300">const</span> 
              <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">hit</span> 
              <span className="text-pink-600 dark:text-pink-400 transition-colors duration-300">=</span> 
              <span className="text-blue-600 dark:text-blue-300 transition-colors duration-300">document</span>.
              <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">querySelector</span>
              (<span className="text-green-600 dark:text-green-400 transition-colors duration-300">&apos;di&apos;</span>)
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">3</span> 
              <span className="text-pink-600 dark:text-pink-400 transition-colors duration-300">let</span> 
              <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">mPos</span> 
              <span className="text-pink-600 dark:text-pink-400 transition-colors duration-300">=</span> {'{'}
              x:<span className="text-orange-600 dark:text-orange-400 transition-colors duration-300">50</span>, 
              y:<span className="text-orange-600 dark:text-orange-400 transition-colors duration-300">50</span>{'}'}
            </div>
          </div>
        </div>
        
        {/* Enterprise card */}
        <div className="w-3/12 rounded-lg h-45 border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#292a2b] flex flex-col items-center justify-center p-6 transition-colors duration-300">
          <div className="bg-gray-200 dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black dark:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="font-medium text-lg text-black dark:text-white mb-2 transition-colors duration-300">Enterprise</h3>
          <p className="text-gray-800 dark:text-gray-200 text-center text-sm transition-colors duration-300">
            Scalable solutions for large organizations looking to modernize their digital infrastructure and streamline operations.
          </p>
        </div>
      </div>
    </div>
  );
}