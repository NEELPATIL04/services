'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { BookOpen, Clock, Globe, Smartphone, Users, Lightbulb, Code, Share2, GraduationCap, School, ArrowLeft, ChevronRight } from "lucide-react";

export default function EducationalServices() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const institutionServices = [
    {
      title: "Learning Management Systems",
      description: "Comprehensive LMS solutions designed specifically for educational institutions to streamline course delivery and student engagement.",
      icon: <BookOpen className="h-6 w-6 text-purple-500" />,
      features: [
        "Course content management",
        "Student progress tracking",
        "Assessment tools",
        "Interactive learning modules"
      ]
    },
    {
      title: "Attendance Management Systems",
      description: "Custom attendance solutions that simplify tracking, reporting, and analytics for educational institutions of all sizes.",
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      features: [
        "Automated attendance tracking",
        "Real-time reporting",
        "Parent notifications",
        "Integration with existing systems"
      ]
    },
    {
      title: "Custom Website Development",
      description: "Professional educational websites optimized for student engagement, information sharing, and institutional branding.",
      icon: <Globe className="h-6 w-6 text-purple-500" />,
      features: [
        "Mobile-responsive design",
        "Content management system",
        "Event calendar integration",
        "Student portal access"
      ]
    },
    {
      title: "Custom App Development",
      description: "Tailored mobile applications that enhance communication between students, parents, and educational institutions.",
      icon: <Smartphone className="h-6 w-6 text-purple-500" />,
      features: [
        "Cross-platform compatibility",
        "Push notifications",
        "Secure authentication",
        "Offline functionality"
      ]
    }
  ];

  const studentServices = [
    {
      title: "Mini-Project Ideation",
      description: "Expert guidance and creative support for students looking to develop innovative technology projects and solutions.",
      icon: <Lightbulb className="h-6 w-6 text-green-500" />,
      features: [
        "Brainstorming sessions",
        "Feasibility assessment",
        "Technology stack advice",
        "Implementation roadmap"
      ]
    },
    {
      title: "Ready-Made Project Templates",
      description: "Pre-built project frameworks and templates to help students kickstart their development journey with confidence.",
      icon: <Code className="h-6 w-6 text-green-500" />,
      features: [
        "Documented codebase",
        "Customization options",
        "Multiple technology stacks",
        "Academic citation support"
      ]
    },
    {
      title: "DevOps Support for Deployment",
      description: "Professional deployment assistance to help students launch their projects on production environments.",
      icon: <Share2 className="h-6 w-6 text-green-500" />,
      features: [
        "Cloud hosting setup",
        "CI/CD pipeline configuration",
        "Performance optimization",
        "Monitoring implementation"
      ]
    },
    {
      title: "Project Ideas Discussion",
      description: "Collaborative sessions to explore and refine innovative project concepts with industry experts.",
      icon: <Lightbulb className="h-6 w-6 text-green-500" />,
      features: [
        "Brainstorming workshops",
        "Feasibility analysis",
        "Market demand assessment",
        "Technology stack recommendations"
      ]
    },
    
    
    {
      title: "Mentorship Assessment",
      description: "Comprehensive evaluation and guidance to help students and professionals reach their development goals.",
      icon: <Users className="h-6 w-6 text-green-500" />,
      features: [
        "Skill gap analysis",
        "Personalized learning paths",
        "Progress tracking",
        "Career development roadmaps"
      ]
    }
  ];

  return (
    <div className="relative flex flex-col items-start pt-16 pb-0 justify-start bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#1a1b1c] dark:to-[#1c1d1e] transition-colors duration-500 h-auto">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid-pattern.svg')] opacity-20 dark:opacity-10" />
      
      {/* <ParallaxSection speed={0.2} direction="up" className="z-10 container mx-auto px-4 mb-0 pb-0"> */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-6"
        >
          <Link href="/service" className="flex items-center mr-3 bg-white dark:bg-[#292a2b] px-3 py-2 rounded-lg shadow-sm hover:shadow-md text-purple-600 dark:text-purple-400 transition-all duration-300">
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to service
          </Link>
          <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">|</span>
          <span className="ml-3 text-gray-600 dark:text-gray-400 transition-colors duration-300 flex items-center">
            <School className="h-5 w-5 mr-1" />
            Educational Services
          </span>
        </motion.div>
        
        {/* Educational Institutions Section */}
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white transition-colors duration-300 border-l-4 border-purple-500 pl-3"
        >
          For Educational Institutions
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-[#292a2b] rounded-xl shadow-lg p-5 mb-6 transition-all duration-300 border border-gray-100 dark:border-gray-800"
        >
          <div className="prose dark:prose-invert max-w-none transition-colors duration-300">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={fadeIn} className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-start">
                  <School className="h-6 w-6 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <p className="text-purple-800 dark:text-purple-300 m-0">
                    WebDrift provides specialized digital solutions for educational institutions to enhance learning experiences, 
                    streamline administrative tasks, and create engaging platforms for students and faculty alike.
                  </p>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                {institutionServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-gray-50 dark:bg-gray-800/40 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
                  >
                    <div className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg mr-3">
                          {service.icon}
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{service.description}</p>
                      <ul className="space-y-2 mb-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="inline-flex items-center justify-center w-5 h-5 mr-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex-shrink-0">
                              <ChevronRight className="h-3 w-3" />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Student Services Section */}
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-4 mt-8 tracking-tight text-gray-900 dark:text-white transition-colors duration-300 border-l-4 border-green-500 pl-3"
        >
          For Students
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white dark:bg-[#292a2b] rounded-xl shadow-lg p-5 mb-0 transition-all duration-300 border border-gray-100 dark:border-gray-800"
        >
          <div className="prose dark:prose-invert max-w-none transition-colors duration-300">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={fadeIn} className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start">
                  <GraduationCap className="h-6 w-6 mr-3 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-green-800 dark:text-green-300 m-0">
                    We empower students with the tools, templates, and support needed to bring their ideas to life.
                    Our student-focused services are designed to complement academic learning with practical, hands-on experience.
                  </p>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                {studentServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-gray-50 dark:bg-gray-800/40 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
                  >
                    <div className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg mr-3">
                          {service.icon}
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{service.description}</p>
                      <ul className="space-y-2 mb-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="inline-flex items-center justify-center w-5 h-5 mr-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex-shrink-0">
                              <ChevronRight className="h-3 w-3" />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={fadeIn} className="mt-6 p-5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-green-500" />
                  Ready to Elevate Your Educational Experience?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Whether you &lsquo;re an institution looking to digitize or a student working on projects, our team is here to support your educational journey.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact">
                  <button className="py-2 px-5 bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-600 hover:to-green-600 text-white rounded-lg transition-all flex items-center justify-center text-sm font-medium">
                    Schedule a Demo
                  </button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      {/* </ParallaxSection> */}
      
      <style jsx global>{`
        html, body {
          height: auto !important;
          min-height: auto !important;
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }
      `}</style>
    </div>
  );
}