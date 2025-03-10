// src/components/contact/ContactInfo.tsx
import React from 'react'

interface ContactInfoProps {
  icon: React.ReactNode
  title: string
  content: string
  href: string
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ 
  icon, 
  title, 
  content, 
  href 
}) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-start group"
  >
    <div className="p-2 bg-primary/10 rounded-full text-primary mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-muted-foreground group-hover:text-primary transition-colors">
        {content}
      </p>
    </div>
  </a>
)