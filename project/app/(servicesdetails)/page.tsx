import React from 'react';
import { Code, Laptop, Layout, PanelLeft, Palette, Box, Zap, Gauge, Database } from 'lucide-react';

const FrontendDevelopmentPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-5xl font-bold mb-6">Frontend Development for seamless user experiences</h1>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-purple-500 rounded-full p-2 mr-4">
                  <Layout className="h-6 w-6" />
                </div>
                <span className="font-semibold">Responsive Design</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-500 rounded-full p-2 mr-4">
                  <Zap className="h-6 w-6" />
                </div>
                <span className="font-semibold">High Performance</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-500 rounded-full p-2 mr-4">
                  <Palette className="h-6 w-6" />
                </div>
                <span className="font-semibold">Modern UI/UX</span>
              </div>
            </div>
            
            <div className="mt-8">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg uppercase">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
      {/* Enhanced Orbit Visualization */}
      <div className="relative h-96 w-full flex items-center justify-center">
        {/* Outer Ring - using specific dimensions and margins for perfect circle */}
        <div className="absolute w-80 h-80 rounded-full border border-gray-700 opacity-40"></div>
        
        {/* Inner Ring - using specific dimensions for perfect circle */}
        <div className="absolute w-60 h-60 rounded-full border border-gray-700 opacity-30"></div>
        
        {/* Center Logo - Brain with gradient border */}
        <div className="absolute flex items-center justify-center">
          {/* Glow effect */}
          <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500 blur-md opacity-70"></div>
          
          {/* Brain logo container */}
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full p-4"
               style={{
                 background: 'linear-gradient(#0f1014, #0f1014) padding-box, linear-gradient(to right, #7c3aed, #3b82f6, #ec4899) border-box',
                 borderWidth: '2px',
                 borderStyle: 'solid',
                 borderColor: 'transparent'
               }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10">
              <path 
                fill="none" 
                stroke="url(#brainGradient)" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="M8.5 12.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm8 2.5a2 2 0 100-4 2 2 0 000 4zm-5-7a2 2 0 100-4 2 2 0 000 4zm9.5 7.5c0 .97-.75 2-2.5 2-.97 0-2-.53-3-1.5l-5 2v4.5l3.5-1L13 21l2.5-2.5c.83-.83 1.5-2 1.5-3zm-2-9.5a2 2 0 100-4 2 2 0 000 4z" 
              />
              <defs>
                <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

              
              {/* Technology icons in orbit - positioned at equal intervals in a circle */}
              {/* React - Top position */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                <div className="bg-blue-600 p-3 rounded-lg shadow-lg shadow-blue-600/30 border border-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-white">
                    <path fill="currentColor" d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                  </svg>
                </div>
              </div>
              
              {/* Next.js - Right position */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2">
                <div className="bg-black p-3 rounded-lg shadow-lg shadow-gray-700/30 border border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-white">
                    <path fill="currentColor" d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"></path>
                  </svg>
                </div>
              </div>
              
              {/* Tailwind - Bottom position */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
                <div className="bg-cyan-500 p-3 rounded-lg shadow-lg shadow-cyan-500/30 border border-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-white">
                    <path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
                  </svg>
                </div>
              </div>
              
              {/* TypeScript - Left position */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/4 -translate-y-1/2">
                <div className="bg-blue-600 p-3 rounded-lg shadow-lg shadow-blue-600/30 border border-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-white">
                    <path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
                  </svg>
                </div>
              </div>
              
              {/* Four additional technologies in the diagonal positions */}
              {/* Top-Right: Performance Optimization */}
              <div className="absolute top-1/4 right-1/4 transform translate-x-1/4 -translate-y-1/4">
                <div className="bg-purple-600 p-3 rounded-lg shadow-lg shadow-purple-600/30 border border-purple-400">
                  <Gauge className="h-8 w-8 text-white" />
                </div>
              </div>
              
              {/* Bottom-Right: Responsive Design */}
              <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/4 translate-y-1/4">
                <div className="bg-green-600 p-3 rounded-lg shadow-lg shadow-green-600/30 border border-green-400">
                  <Laptop className="h-8 w-8 text-white" />
                </div>
              </div>
              
              {/* Bottom-Left: Modern UI/UX */}
              <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/4 translate-y-1/4">
                <div className="bg-pink-600 p-3 rounded-lg shadow-lg shadow-pink-600/30 border border-pink-400">
                  <Palette className="h-8 w-8 text-white" />
                </div>
              </div>
              
              {/* Top-Left: API Integration */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4">
                <div className="bg-blue-400 p-3 rounded-lg shadow-lg shadow-blue-400/30 border border-blue-300">
                  <Database className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technology Cards Section */}
        <h2 className="text-3xl font-bold mb-8 text-center">Our Frontend Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-white">
                  <path fill="currentColor" d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">React 19</h3>
            </div>
            <p className="text-gray-300">
              Build declarative user interfaces with the latest React features including concurrent rendering, suspense, and server components for optimal performance.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-black p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-white">
                  <path fill="currentColor" d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Next.js 15</h3>
            </div>
            <p className="text-gray-300">
              Full-stack React framework with server-side rendering, static site generation, and API routes for building production-ready applications with outstanding SEO.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-cyan-500 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-white">
                  <path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Tailwind CSS</h3>
            </div>
            <p className="text-gray-300">
              Utility-first CSS framework for rapidly building custom designs without leaving your HTML, enabling faster development and smaller bundle sizes.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-white">
                  <path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">TypeScript</h3>
            </div>
            <p className="text-gray-300">
              Strongly typed programming language that builds on JavaScript, providing better tooling at any scale for error prevention and enhanced developer experience.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-purple-600 p-3 rounded-lg mr-4">
                <Gauge className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Performance Optimization</h3>
            </div>
            <p className="text-gray-300">
              Implement advanced optimization techniques including code splitting, lazy loading, and image optimization for lightning-fast web applications.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 p-3 rounded-lg mr-4">
                <Laptop className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Responsive Design</h3>
            </div>
            <p className="text-gray-300">
              Create fluid layouts that adapt to any device size, ensuring your application looks great on everything from mobile phones to large desktop monitors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendDevelopmentPage;