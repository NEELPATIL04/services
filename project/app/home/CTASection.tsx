'use client'

import { useEffect, useState, useRef } from "react";

interface TestimonialCard {
  id: number;
  title: string;
  subtitle: string;
  content: string;
}

const cards: TestimonialCard[] = [
  {
    id: 1,
    title: "Henry Rausch",
    subtitle: "Quality Engineer @ FIC America Corp",
    content: "You need to try pieces out if you write code and feel that you need a true second brain, where you can basically store any function or code you've ever written and can use it again and again and again."
  },
  {
    id: 2,
    title: "Scott Hanselman",
    subtitle: "VP of Developer Community @ Microsoft",
    content: "Everyone's got a copilot. You're inverted, you've rotated the whole thing. It's not a vertical copilot, it's a horizontal one."
  },
  {
    id: 3,
    title: "Ayush Kumar",
    subtitle: "Data Analyst @ Accenture",
    content: "Pieces Copilot has become much more efficient for any developer to ask any question and get a particular result. The LLMs in Pieces are sensitive to programming, so I think that gives better results."
  },
  {
    id: 4,
    title: "Maya Johnson",
    subtitle: "Senior Developer @ TechCorp",
    content: "The ability to quickly search and reuse code snippets has saved me countless hours. It's like having your entire coding history at your fingertips."
  },
  {
    id: 5,
    title: "Alex Rivera",
    subtitle: "Full Stack Engineer @ StartupInc",
    content: "I've increased my productivity by 40% since I started using this tool. The contextual suggestions are spot on, and it learns from my coding patterns."
  }
];

export default function CTASection() {
  const [position, setPosition] = useState<number>(0);
  const animationRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollSpeed = 0.01; // Adjust speed as needed

  // Duplicate cards multiple times to ensure continuous scroll
  const duplicatedCards: TestimonialCard[] = [...cards, ...cards, ...cards, ...cards, ...cards];

  const startAnimation = () => {
    if (animationRef.current !== null) return;
    animationRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const animate = () => {
    setPosition(prevPosition => {
      // Calculate new position
      const newPosition = prevPosition + scrollSpeed;
      
      // Reset position when first set of cards has scrolled out of view
      if (newPosition >= (100 / duplicatedCards.length) * cards.length) {
        return 0;
      }
      
      return newPosition;
    });
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    startAnimation();
    
    return () => stopAnimation();
  }, []);

  const handleMouseEnter = () => {
    stopAnimation();
  };

  const handleMouseLeave = () => {
    startAnimation();
  };

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#1c1d1e] py-12 px-4 sm:px-6 lg:px-8">
      <div 
        ref={containerRef}
        className="relative whitespace-nowrap"
        style={{ transform: `translateX(-${position}%)` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {duplicatedCards.map((card, index) => (
          <div 
            key={`${card.id}-${index}`}
            className="inline-block w-full sm:w-1/2 lg:w-1/3 px-4 whitespace-normal align-top"
            style={{ maxWidth: '400px' }}
          >
            <div className="flex flex-col bg-white dark:bg-[#1c1d1e] rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:border-blue-500 h-80">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{card.title}</h3>
              <p className="text-blue-500 dark:text-blue-400 text-sm mb-4">{card.subtitle}</p>
              <p className="text-gray-700 dark:text-gray-300 flex-grow overflow-y-auto">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}