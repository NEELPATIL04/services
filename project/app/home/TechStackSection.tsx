// components/sections/TechStackSection.jsx
import { ScrollReveal } from "@/components/scroll-reveal"
import { TechCard } from "./TechCard"
import { SiNextdotjs, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiTypescript, SiTailwindcss } from "react-icons/si"

export default function TechStackSection() {
  const technologies = [
    { 
      name: "Next.js", 
      delay: 0.1,
      description: "React framework for production",
      icon: SiNextdotjs
    },
    { 
      name: "React", 
      delay: 0.2,
      description: "UI component library",
      icon: SiReact
    },
    { 
      name: "Node.js", 
      delay: 0.3,
      description: "JavaScript runtime",
      icon: SiNodedotjs
    },
    { 
      name: "Express", 
      delay: 0.4,
      description: "Web framework for Node.js",
      icon: SiExpress
    },
    { 
      name: "MongoDB", 
      delay: 0.5,
      description: "NoSQL database",
      icon: SiMongodb
    },
    { 
      name: "SQL", 
      delay: 0.6,
      description: "Relational database",
      icon: SiMysql
    },
    { 
      name: "TypeScript", 
      delay: 0.7,
      description: "Typed JavaScript",
      icon: SiTypescript
    },
    { 
      name: "Tailwind", 
      delay: 0.8,
      description: "Utility-first CSS framework",
      icon: SiTailwindcss
    },
  ];

  return (
    <section className="py-24 relative bg-white dark:bg-[#1c1d1e]  overflow-hidden">
           <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute w-[200%] h-[200px] bg-gradient-to-r from-transparent via-blue-100/30 to-transparent dark:via-white/10 blur-[100px] transition-colors duration-300"
          style={{ 
            top: '30%', 
            left: '-90%',
            transform: 'rotate(0deg)'
          }}
        />
      </div>
      <div className="container bg- white dark:bg-[#1c1d1e] mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We use cutting-edge technologies to build modern web applications
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <ScrollReveal key={tech.name} delay={tech.delay} direction="up" distance={20}>
              <TechCard 
                name={tech.name}
                description={tech.description}
                icon={tech.icon}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}