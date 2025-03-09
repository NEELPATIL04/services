"use client";

import { ThemeProvider } from 'next-themes';
import HeroSection from './Herosection';
import DevelopmentProcess from './dev';

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="bg-gray-900 min-h-screen">
        <HeroSection />
        <DevelopmentProcess />
      </div>
    </ThemeProvider>
  );
}