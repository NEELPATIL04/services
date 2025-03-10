// src/components/services/CoreTechnologiesSection.jsx
'use client'
import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ParallaxSection } from "@/components/parallax-section";
import { CoreCard } from "./CoreCards";
import { 
  Braces, 
  FileCode, 
  Terminal, 
  Server, 
  Database, 
  Table,
  Code,
  LayoutGrid,
  CloudCog,
  Smartphone,
  ArrowDown,
  Palette,
  BrainCircuit
} from "lucide-react";

export function CoreTechnologiesSection() {
  const [showMore, setShowMore] = useState(false);
  
  const initialTechnologies = [
    {
      icon: <Braces className="h-10 w-10 text-blue-500" />,
      title: "Next.js 15",
      description: "Leveraging the latest features of Next.js 15 for server-side rendering, static site generation, and API routes to build fast, SEO-friendly web applications."
    },
    {
      icon: <FileCode className="h-10 w-10 text-green-500" />,
      title: "React 19",
      description: "Building interactive user interfaces with React 19's latest features including concurrent rendering and improved performance optimizations."
    },
    {
      icon: <Terminal className="h-10 w-10 text-purple-500" />,
      title: "Node.js",
      description: "Creating scalable backend services with Node.js for efficient server-side operations and real-time applications."
    },
    {
      icon: <Server className="h-10 w-10 text-yellow-500" />,
      title: "Express.js",
      description: "Developing robust API endpoints and server applications with Express.js for flexible, minimalist web infrastructure."
    },
    {
      icon: <Database className="h-10 w-10 text-orange-500" />,
      title: "MongoDB",
      description: "Implementing NoSQL database solutions with MongoDB for flexible, scalable data storage and retrieval."
    },
    {
      icon: <Table className="h-10 w-10 text-red-500" />,
      title: "SQL Databases",
      description: "Designing relational database systems with PostgreSQL, MySQL, and other SQL technologies for structured data management."
    }
  ];
  
  const additionalTechnologies = [
    {
      icon: <LayoutGrid className="h-10 w-10 text-indigo-500" />,
      title: "Tailwind CSS",
      description: "Creating responsive, utility-first designs with Tailwind CSS for rapid UI development and consistent styling."
    },
    {
      icon: <CloudCog className="h-10 w-10 text-teal-500" />,
      title: "AWS Services",
      description: "Deploying scalable cloud solutions with AWS services including Lambda, S3, EC2, and DynamoDB for enterprise-grade infrastructure."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-pink-500" />,
      title: "React Native",
      description: "Building cross-platform mobile applications with React Native for iOS and Android with a single codebase."
    },
    {
      icon: <Palette className="h-10 w-10 text-cyan-500" />,
      title: "UI/UX Design",
      description: "Creating intuitive user experiences and beautiful interfaces with Figma, Adobe XD, and other modern design tools."
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-violet-500" />,
      title: "AI Integration",
      description: "Implementing artificial intelligence solutions with TensorFlow, PyTorch, and OpenAI APIs for intelligent application features."
    },
    {
      icon: <Code className="h-10 w-10 text-emerald-500" />,
      title: "TypeScript",
      description: "Developing type-safe applications with TypeScript for improved code quality, developer experience, and maintainability."
    }
  ];

  const toggleShowMore = () => setShowMore(!showMore);
  
  // Combine arrays based on state
  const technologies = showMore 
    ? [...initialTechnologies, ...additionalTechnologies] 
    : initialTechnologies;

  return (
    <section className="py-24 bg-muted/50 dark:bg-[#1c1d1e] relative overflow-hidden">
      <ParallaxSection speed={0.15} direction="right" className="absolute -left-64 top-20 opacity-5 z-0">
        <Code className="h-[800px] w-[800px] text-primary" />
      </ParallaxSection>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We specialize in modern web technologies to deliver high-performance, scalable solutions
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <ScrollReveal 
              key={tech.title} 
              delay={0.1 * (index + 1)} 
              direction="up" 
              distance={30}
            >
              <CoreCard 
                icon={tech.icon}
                title={tech.title}
                description={tech.description}
              />
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={toggleShowMore}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-black text-white   dark:bg-white dark:text-black  rounded-lg hover:bg-primary/90 transition-all"
          >
            {showMore ? "Show Less" : "Load More"}
            <ArrowDown className={`h-4 w-4 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
}