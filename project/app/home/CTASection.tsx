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
    title: "Arjun Sharma",
    subtitle: "Engineering Student @ IIT Delhi",
    content: "The project delivered for my final year thesis was exceptional. The code was well-structured and documented, making it easy for me to understand and present. Perfect for students looking to build impressive academic portfolios."
  },
  {
    id: 2,
    title: "Priya Patel",
    subtitle: "Solo Entrepreneur @ DesignHub",
    content: "As a solo entrepreneur, finding affordable yet professional web services was challenging until I discovered this team. Their custom e-commerce solution helped me launch my business with minimal investment and maximum impact."
  },
  {
    id: 3,
    title: "Vikram Malhotra",
    subtitle: "CTO @ TechInnovate Solutions",
    content: "Our enterprise needed scalable software that could handle our growing data demands. The team delivered a comprehensive solution that optimized our workflow and increased efficiency by 35% within the first quarter."
  },
  {
    id: 4,
    title: "Neha Verma",
    subtitle: "Computer Science Student @ BITS Pilani",
    content: "The machine learning project they developed for my research work was outstanding. The algorithms were optimized for performance and the documentation made it easy to explain to non-technical faculty members."
  },
  {
    id: 5,
    title: "Rajesh Gupta",
    subtitle: "Founder @ DigitalGrowth",
    content: "Their web development services transformed my business idea into reality. The responsive design, SEO optimization, and user-friendly interface helped me attract 200+ clients within the first three months of launch."
  }
];

export default function CTASection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 1; // Pixels per frame

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const card = containerRef.current.querySelector('.card');
        if (card) setCardWidth(card.clientWidth);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const animate = () => {
    setScrollPosition(prev => {
      const maxScroll = cardWidth * cards.length;
      const newPosition = prev + scrollSpeed;
      
      // Reset to start without visual jump when reaching cloned content
      return newPosition >= maxScroll ? 0 : newPosition;
    });
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [cardWidth]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#1c1d1e] py-12 px-4 sm:px-6 lg:px-8">
      <div 
        ref={containerRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={contentRef}
          className="flex"
          style={{ 
            transform: `translateX(-${scrollPosition}px)`,
            transition: animationRef.current ? 'none' : 'transform 0.3s ease'
          }}
        >
          {/* Original Cards */}
          {cards.map((card) => (
            <div
              key={`original-${card.id}`}
              className="card inline-block w-full sm:w-1/2 lg:w-1/3 px-4 whitespace-normal align-top"
              style={{ minWidth: '400px' }}
            >
              <div className="flex flex-col bg-white dark:bg-[#1c1d1e] rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:border-blue-500 h-80">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{card.title}</h3>
                <p className="text-blue-500 dark:text-blue-400 text-sm mb-4">{card.subtitle}</p>
                <p className="text-gray-700 dark:text-gray-300 flex-grow overflow-y-auto">{card.content}</p>
              </div>
            </div>
          ))}
          
          {/* Cloned Cards for seamless looping */}
          {cards.map((card) => (
            <div
              key={`clone-${card.id}`}
              className="card inline-block w-full sm:w-1/2 lg:w-1/3 px-4 whitespace-normal align-top"
              style={{ minWidth: '400px' }}
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
    </div>
  );
}