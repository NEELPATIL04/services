'use client'

import { Code, Server, GitMerge } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-gray-100 dark:bg-[#1c1d1e] px-4 py-6 md:py-10">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm transition-colors duration-300">Services...</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 md:mb-5 text-gray-900 dark:text-white">
            Empowering Your Digital Infrastructure
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
            Comprehensive solutions for web hosting, website development, and Git management to drive your digital success.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center items-start mt-20 ">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 w-16 h-16 sm:w-20 sm:h-20 bg-secondary/20 rounded-full flex items-center justify-center">
                <Server className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Web Hosting</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Reliable and scalable hosting solutions
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 w-16 h-16 sm:w-20 sm:h-20 bg-secondary/20 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 dark:text-green-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Website Development</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Custom web solutions tailored to your needs
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 w-16 h-16 sm:w-20 sm:h-20 bg-secondary/20 rounded-full flex items-center justify-center">
                <GitMerge className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500 dark:text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Git Management</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Streamlined version control and collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}