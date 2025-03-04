'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Layers } from "lucide-react"; // Importing an icon from Lucide

export function HeroSection() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-16 bg-white text-black dark:bg-black dark:text-white">
      
      {/* Left Content */}
      <div className="max-w-2xl text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold">For whom</h1>
        <p className="mt-4 text-base sm:text-lg">
          We offer a comprehensive range of web development services using cutting-edge technologies to help businesses thrive in the digital landscape.
        </p>
        <Button asChild className="mt-6">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>

      {/* Right Side Icon (Moves below text on small screens) */}
      <div className="mt-6 lg:mt-0 lg:absolute lg:right-10 lg:top-1/2 lg:-translate-y-1/2">
        <Layers className="w-24 h-24 sm:w-40 sm:h-40 text-yellow-300 neon-glow sm:mr-8" />
      </div>

      {/* Tailwind Neon Effect (Optional) */}
      <style jsx>{`
        .neon-glow {
          filter: drop-shadow(0 0 10px #ff00ff) drop-shadow(0 0 20px #ff00ff);
        }
      `}</style>
    </div>
  );
}
