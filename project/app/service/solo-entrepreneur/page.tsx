'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ParallaxSection } from "@/components/parallax-section";
import { Server, Users, Cloud, Globe, Smartphone, RefreshCw, ChevronRight, Briefcase, ArrowLeft, Code, ShoppingCart, LineChart, Layers } from "lucide-react";

export default function Services() {
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

  // Enterprise services
  const enterpriseCards = [
    {
      title: "Custom ERP Solutions",
      description: "Streamline your business operations with tailored Enterprise Resource Planning solutions designed to fit your specific needs and workflows.",
      icon: <Server className="h-6 w-6 text-blue-500" />,
      features: [
        "Process automation",
        "Real-time analytics",
        "Integrated modules",
        "Custom workflows"
      ]
    },
    {
      title: "CRM Implementation",
      description: "Transform your customer relationships with powerful Customer Relationship Management systems that enhance engagement and drive sales growth.",
      icon: <Users className="h-6 w-6 text-blue-500" />,
      features: [
        "Lead management",
        "Customer insights",
        "Sales automation",
        "Marketing integration"
      ]
    },
    {
      title: "Cloud Migration & Infrastructure",
      description: "Securely transition your business to the cloud with our expert migration services and robust infrastructure solutions.",
      icon: <Cloud className="h-6 w-6 text-blue-500" />,
      features: [
        "Seamless transitions",
        "Scalable architecture",
        "Data security",
        "Cost optimization"
      ]
    },
    {
      title: "Web Development",
      description: "Create impactful online experiences with our custom web development services focused on performance, design, and user experience.",
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      features: [
        "Responsive design",
        "SEO optimization",
        "Content management",
        "E-commerce solutions"
      ]
    },
    {
      title: "App Development",
      description: "Extend your digital presence with native and cross-platform mobile applications built for performance and user engagement.",
      icon: <Smartphone className="h-6 w-6 text-blue-500" />,
      features: [
        "iOS & Android apps",
        "Cross-platform solutions",
        "UX/UI design",
        "Maintenance & support"
      ]
    },
    {
      title: "Legacy Systems Modernization",
      description: "Revitalize outdated systems and technologies to improve efficiency, reduce costs, and enhance security across your organization.",
      icon: <RefreshCw className="h-6 w-6 text-blue-500" />,
      features: [
        "System assessment",
        "Phased migration",
        "Integration services",
        "Performance optimization"
      ]
    }
  ];

  // Solo entrepreneur services
  const soloCards = [
    {
      title: "Website & E-commerce Development",
      description: "Launch your online presence with a professional website or e-commerce store tailored to your specific business needs and target audience.",
      icon: <Globe className="h-6 w-6 text-purple-500" />,
      features: [
        "Responsive design",
        "Shopping cart integration",
        "Payment gateways",
        "SEO optimization"
      ]
    },
    {
      title: "MVP Development",
      description: "Turn your idea into a functional Minimum Viable Product to validate your concept, attract early users, and secure potential investors.",
      icon: <Layers className="h-6 w-6 text-purple-500" />,
      features: [
        "Core feature focus",
        "Rapid deployment",
        "User feedback systems",
        "Scalable architecture"
      ]
    },
    {
      title: "Basic CRM & Sales Tools",
      description: "Organize your customer relationships and streamline your sales process with easy-to-use CRM tools designed for solo business owners.",
      icon: <LineChart className="h-6 w-6 text-purple-500" />,
      features: [
        "Contact management",
        "Sales pipeline tracking",
        "Email integration",
        "Performance analytics"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Expand your reach with a custom mobile application that engages your customers and enhances your business accessibility.",
      icon: <Smartphone className="h-6 w-6 text-purple-500" />,
      features: [
        "iOS & Android development",
        "User-friendly interface",
        "Push notifications",
        "Offline functionality"
      ]
    }
  ];

  return (
    <div className="relative flex flex-col items-start pt-16 pb-0 justify-start bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#1a1b1c] dark:to-[#1c1d1e] transition-colors duration-500 h-auto">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid-pattern.svg')] opacity-20 dark:opacity-10" />
      
      <ParallaxSection speed={0.2} direction="up" className="z-10 container mx-auto px-4 mb-0 pb-0">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-6"
        >
          <Link href="/service" className="flex items-center mr-3 bg-white dark:bg-[#292a2b] px-3 py-2 rounded-lg shadow-sm hover:shadow-md text-blue-600 dark:text-blue-400 transition-all duration-300">
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to Service
          </Link>
          <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">|</span>
          <span className="ml-3 text-gray-600 dark:text-gray-400 transition-colors duration-300 flex items-center">
            <Briefcase className="h-5 w-5 mr-1" />
            Our Services
          </span>
        </motion.div>
        
        {/* Solo Entrepreneur Section */}
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white transition-colors duration-300 border-l-4 border-purple-500 pl-3"
        >
          Solo Entrepreneur Services
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-[#292a2b] rounded-xl shadow-lg p-5 mb-8 transition-all duration-300 border border-gray-100 dark:border-gray-800"
        >
          <div className="prose dark:prose-invert max-w-none transition-colors duration-300">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={fadeIn} className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-start">
                  <Users className="h-6 w-6 mr-3 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <p className="text-purple-800 dark:text-purple-300 m-0">
                    At WebDrift, we understand the unique challenges solo entrepreneurs face. Our tailored services help you build and scale your business efficiently without the overhead of a large team.
                  </p>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                {soloCards.map((service, index) => (
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
              
              <motion.div variants={fadeIn} className="mt-6 p-5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-500" />
                  Ready to Grow Your Solo Business?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We offer flexible, affordable solutions tailored specifically for solo entrepreneurs and small businesses looking to make a big impact.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact">
                  <button className="py-2 px-5 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors flex items-center justify-center text-sm font-medium">
                    Get a Free Consultation
                  </button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Enterprise Section (can be commented out if you only want Solo section) */}
       
      </ParallaxSection>
      
      <style jsx global>{`
        html, body {
          height: auto !important;
          min-height: auto !important;
        }
      `}</style>
    </div>
  );
}