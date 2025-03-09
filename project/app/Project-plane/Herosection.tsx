"use client";

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <div className={`w-full ${theme === 'dark' ? 'bg-[#1c1d1e]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 pt-24 pb-32">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative element */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-8 h-8 text-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 5V3"></path>
                <path d="M18.2 12.2L20 10.5"></path>
                <path d="M5.8 12.2L4 10.5"></path>
                <path d="M9 19l-1.7 1"></path>
                <path d="M15 19l1.7 1"></path>
                <circle cx="12" cy="12" r="5"></circle>
              </svg>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 
            className={`text-5xl md:text-7xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative inline-block">
              Innovative
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
            </span>{" "}
            Web Development Solutions
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We transform your ideas into powerful digital experiences with modern technologies and a proven development process.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="px-8 py-4 rounded-full font-medium text-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore our services
            </motion.button>
            <motion.button
              className={`px-8 py-4 rounded-full font-medium text-lg border-2 ${theme === 'dark' ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} w-full sm:w-auto`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View our work
            </motion.button>
          </motion.div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                title: "Modern Tech Stack",
                description: "Built with the latest technologies including React, Next.js, and Tailwind CSS",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                )
              },
              {
                title: "Structured Process",
                description: "We follow a proven four-step development process from discovery to deployment",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                )
              },
              {
                title: "Ongoing Support",
                description: "We don't just build and leave - we provide continued maintenance and support",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M12 9l0 3l3 0"></path>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50 border border-gray-700' : 'bg-white shadow-xl'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${theme === 'dark' ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-100 text-indigo-600'}`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className=" flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
          
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}