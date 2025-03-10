// src/components/contact/FaqItem.tsx
import React from 'react'

interface FaqItemProps {
  question: string
  answer: string
}

export const FaqItem: React.FC<FaqItemProps> = ({ 
  question, 
  answer 
}) => (
  <div className="space-y-2">
    <h3 className="text-lg font-medium">{question}</h3>
    <p className="text-muted-foreground">{answer}</p>
  </div>
)