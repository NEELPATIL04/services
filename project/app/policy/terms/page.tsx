'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ParallaxSection } from "@/components/parallax-section";
import { FileText, Book, User,Calendar,Building,AlertTriangle, Award, Scale, Globe, Mail } from "lucide-react";

export default function TermsOfService() {
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

  return (
    <div className="relative min-h-screen flex flex-col items-start pt-20 justify-start overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#1a1b1c] dark:to-[#1c1d1e] transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid-pattern.svg')] opacity-20 dark:opacity-10" />
      
      <ParallaxSection speed={0.2} direction="up" className="z-10 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-8"
        >
          <Link href="/policy" className="flex items-center mr-3 bg-white dark:bg-[#292a2b] px-3 py-2 rounded-lg shadow-sm hover:shadow-md text-blue-600 dark:text-blue-400 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Policies
          </Link>
          <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">|</span>
          <span className="ml-3 text-gray-600 dark:text-gray-400 transition-colors duration-300 flex items-center">
            <FileText className="h-5 w-5 mr-1" />
            Terms of Service
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white transition-colors duration-300 border-l-4 border-blue-500 pl-3"
        >
          Terms of Service
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-[#292a2b] rounded-xl shadow-lg p-6 mb-12 transition-all duration-300 border border-gray-100 dark:border-gray-800"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm transition-colors duration-300 flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
            Last Updated: March 9, 2025
          </p>
          
          <div className="prose dark:prose-invert max-w-none transition-colors duration-300">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={fadeIn} className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start">
                  <Book className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-blue-800 dark:text-blue-300 m-0">
                    Welcome to WebDrift. By accessing or using our services, you agree to be bound by these Terms of Service (Terms). 
                    Please read these Terms carefully before using our platform.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mb-8">
                <h2 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                  <Book className="h-5 w-5 mr-2 text-blue-500" />
                  Definitions
                </h2>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <ul className="list-none p-0 m-0 space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex-shrink-0 mt-1">
                        <Building className="h-3 w-3" />
                      </span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">WebDrift, we, us, or our</strong> refers to WebDrift Inc., the company operating the WebDrift platform.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex-shrink-0 mt-1">
                        <Globe className="h-3 w-3" />
                      </span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">Services</strong> refers to all products, services, applications, and websites provided by WebDrift.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex-shrink-0 mt-1">
                        <User className="h-3 w-3" />
                      </span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">User, you or your </strong> refers to any individual or entity using our Services.
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mb-8">
                <h2 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                  <Award className="h-5 w-5 mr-2 text-blue-500" />
                  Intellectual Property
                </h2>
                <p>
                  All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, and software, are the exclusive property of WebDrift or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                    <p className="text-yellow-800 dark:text-yellow-300 m-0 text-sm">
                      Unauthorized use of our intellectual property may result in legal action.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mb-8">
                <h2 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                  <Scale className="h-5 w-5 mr-2 text-blue-500" />
                  Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which WebDrift is headquartered, without regard to its conflict of law provisions.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mb-8">
                <h2 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                  <Mail className="h-5 w-5 mr-2 text-blue-500" />
                  Contact Information
                </h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg inline-block">
                  <p className="flex items-center text-blue-600 dark:text-blue-400 font-medium m-0">
                    <Mail className="h-5 w-5 mr-2" />
                    webdrift07@gmail.com
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </ParallaxSection>
    </div>
  );
}