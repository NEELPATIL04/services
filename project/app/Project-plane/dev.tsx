"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

// Import icons
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const ClipboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </svg>
);

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
  </svg>
);

export default function DevelopmentProcess() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Handle hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements.",
      icon: <SearchIcon />,
      bgColor: theme === 'dark' ? 'bg-indigo-900/30' : 'bg-indigo-100',
      textColor: theme === 'dark' ? 'text-indigo-300' : 'text-indigo-800',
      borderColor: theme === 'dark' ? 'border-indigo-700' : 'border-indigo-200',
      iconBg: theme === 'dark' ? 'bg-indigo-800' : 'bg-indigo-200',
    },
    {
      number: "02",
      title: "Planning",
      description: "Creating a detailed project roadmap with timelines, milestones, and resource allocation.",
      icon: <ClipboardIcon />,
      bgColor: theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100',
      textColor: theme === 'dark' ? 'text-purple-300' : 'text-purple-800',
      borderColor: theme === 'dark' ? 'border-purple-700' : 'border-purple-200',
      iconBg: theme === 'dark' ? 'bg-purple-800' : 'bg-purple-200',
    },
    {
      number: "03",
      title: "Development",
      description: "Building your solution using agile methodologies with regular updates and feedback cycles.",
      icon: <CodeIcon />,
      bgColor: theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100',
      textColor: theme === 'dark' ? 'text-blue-300' : 'text-blue-800',
      borderColor: theme === 'dark' ? 'border-blue-700' : 'border-blue-200',
      iconBg: theme === 'dark' ? 'bg-blue-800' : 'bg-blue-200',
    },
    {
      number: "04",
      title: "Deployment",
      description: "Launching your application with thorough testing and ongoing support to ensure success.",
      icon: <RocketIcon />,
      bgColor: theme === 'dark' ? 'bg-cyan-900/30' : 'bg-cyan-100',
      textColor: theme === 'dark' ? 'text-cyan-300' : 'text-cyan-800',
      borderColor: theme === 'dark' ? 'border-cyan-700' : 'border-cyan-200',
      iconBg: theme === 'dark' ? 'bg-cyan-800' : 'bg-cyan-200',
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#1c1d1e] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
            Our Development Process
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full"></div>
          </h1>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            We follow a structured approach to ensure successful project delivery
          </p>
        </motion.div>
        
        {/* Process Steps with Connecting Line */}
        <div className="relative mt-24">
          {/* Central vertical line - fixed position */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 transform -translate-x-1/2 z-0"></div>
          
          {/* Process Steps */}
          <div className="space-y-32">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Horizontal connector line - fixed position and improved alignment */}
                {index > 0 && (
                  <div className={`hidden lg:block absolute top-10 ${
                    index % 2 === 0 ? 'right-1/2 mr-10' : 'left-1/2 ml-10'
                  } h-1 w-16 -translate-y-24 bg-gradient-to-r ${
                    index === 1 ? 'from-indigo-500 to-purple-500' : 
                    index === 2 ? 'from-purple-500 to-blue-500' : 
                    'from-blue-500 to-cyan-500'
                  } z-0`}></div>
                )}
                
                {/* Card and Icon Row - improved alignment */}
                <motion.div 
                  className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} relative`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Icon Circle - centered on the vertical line */}
                  <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 mb-6 lg:mb-0">
                    <motion.div 
                      className={`w-20 h-20 rounded-full flex items-center justify-center ${step.iconBg} ${step.textColor}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {step.icon}
                    </motion.div>
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border-2 ${step.borderColor}`}>
                      <span className={`text-sm font-bold ${step.textColor}`}>{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Card Content - properly aligned with icons */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-24' : 'lg:ml-auto lg:pl-24'}`}>
                    <motion.div
                      className={`${step.bgColor} p-8 rounded-2xl border ${step.borderColor} shadow-xl relative overflow-hidden`}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Background decorative elements */}
                      <div className={`absolute -right-12 -bottom-12 w-40 h-40 rounded-full opacity-20 ${step.bgColor} blur-3xl`}></div>
                      <div className={`absolute -left-8 -top-8 w-24 h-24 rounded-full opacity-10 ${step.bgColor} blur-2xl`}></div>
                      
                      <h3 className={`text-3xl font-bold mb-4 ${step.textColor}`}>{step.title}</h3>
                      <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Project Flow */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-12">Project Flow</h2>
          
          <div className={`relative mx-auto max-w-4xl p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white shadow-xl'}`}>
            {/* Animated flow path */}
            <svg className="w-full h-32 mb-8" viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M50 50 C150 20, 200 80, 300 50 C400 20, 450 80, 550 50 C650 20, 700 80, 750 50"
                stroke="url(#flowGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              
              {/* Dot markers along the path */}
              {[1, 2, 3, 4].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={50 + i * 233}
                  cy="50"
                  r="8"
                  fill={theme === 'dark' ? '#1f2937' : 'white'}
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.3 }}
                />
              ))}
            </svg>
            
            {/* Flow labels */}
            <div className="grid grid-cols-4 gap-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${step.iconBg} ${step.textColor} mb-3`}>
                    {i + 1}
                  </div>
                  <h4 className="font-bold">{step.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Call to action */}
        Here's the rest of the code, continuing from where I left off with the call to action section:

```jsx
        {/* Call to action */}
        <motion.div 
          className={`mt-24 p-10 rounded-2xl text-center ${theme === 'dark' ? 'bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-800/50' : 'bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg'}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Lets transform your ideas into reality with our proven development process
          </p>
          <motion.button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
