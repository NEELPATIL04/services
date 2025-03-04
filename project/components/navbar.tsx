"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Code } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/for-whom", label: "For Whom" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            
            <span className="font-bold text-xl sm:ml-2">WEBDRIFT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            {/* <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button> */}
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden  bg-white dark:bg-[#1c1d1e] pt-4 pb-2">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* <Button asChild className="w-full mt-2">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
              </Button> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar