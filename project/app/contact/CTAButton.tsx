// src/components/contact/CTAButton.tsx
"use client"

import { Button } from "@/components/ui/button"

export const CTAButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button 
      size="lg" 
      variant="secondary" 
      onClick={handleScrollToTop}
    >
      Get in Touch
    </Button>
  )
}