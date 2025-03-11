'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import { ParallaxSection } from "@/components/parallax-section";
import { Cookie, Lock, AlertCircle, Database, Mail, Bell, Settings, UserCheck, Shield } from "lucide-react";

export default function CookiePolicy() {
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
      
      {/* <ParallaxSection speed={0.2} direction="up" className="z-10 container mx-auto px-4"> */}
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
            <Cookie className="h-5 w-5 mr-1" />
            Cookie Policy
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white transition-colors duration-300 border-l-4 border-blue-500 pl-3"
        >
          Cookie Policy
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-[#292a2b] rounded-xl shadow-lg p-6 mb-12 transition-all duration-300 border border-gray-100 dark:border-gray-800"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm transition-colors duration-300 flex items-center">
            <Bell className="h-4 w-4 mr-2 text-blue-500" />
            Last Updated: March 9, 2025
          </p>
          
          <div className="prose dark:prose-invert max-w-none transition-colors duration-300">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={fadeIn} className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start">
                  <Cookie className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-blue-800 dark:text-blue-300 m-0">
                    This Cookie Policy explains how WebDrift uses cookies and similar technologies to recognize you when you visit our websites and use our services. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mb-8">
                <h2 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                  <Cookie className="h-5 w-5 mr-2 text-blue-500" />
                  What Are Cookies?
                </h2>
                <p>
                  Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
                <p>
                  Cookies set by the website owner (in this case, WebDrift) are called first-party cookies. Cookies set by parties other than the website owner are called third-party cookies. Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mb-8">
                <h2 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                  <Database className="h-5 w-5 mr-2 text-blue-500" />
                  Types of Cookies We Use
                </h2>
                <p>
                  We use the following types of cookies:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex-shrink-0">
                      <Shield className="h-3 w-3" />
                    </span>
                    <div>
                      <strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex-shrink-0">
                      <Settings className="h-3 w-3" />
                    </span>
                    <div>
                      <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex-shrink-0">
                      <UserCheck className="h-3 w-3" />
                    </span>
                    <div>
                      <strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex-shrink-0">
                      <Bell className="h-3 w-3" />
                    </span>
                    <div>
                      <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mb-8">
                <h2 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                  <Settings className="h-5 w-5 mr-2 text-blue-500" />
                  How to Manage Cookies
                </h2>
                <p>
                  You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg flex items-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 mr-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex-shrink-0">
                      <Lock className="h-4 w-4" />
                    </span>
                    Browser Settings
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg flex items-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 mr-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex-shrink-0">
                      <Shield className="h-4 w-4" />
                    </span>
                    Cookie Banner Preferences
                  </div>
                </div>
                <p className="mt-4">
                  Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <span className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300">www.allaboutcookies.org</span>.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mb-8">
                <h2 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                  <Database className="h-5 w-5 mr-2 text-blue-500" />
                  Other Tracking Technologies
                </h2>
                <p>
                  In addition to cookies, we may use other similar technologies, like web beacons (sometimes called tracking pixels or clear gifs), to track user behavior on our websites and in our marketing communications.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mb-8">
                <h2 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                  <Bell className="h-5 w-5 mr-2 text-blue-500" />
                  Updates to This Cookie Policy
                </h2>
                <p>
                  We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mb-8">
                <h2 className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                  <AlertCircle className="h-5 w-5 mr-2 text-blue-500" />
                  Contact Us
                </h2>
                <p>
                  If you have any questions about our use of cookies or other technologies, please contact us at:
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
      {/* </ParallaxSection> */}
    </div>
  );
}