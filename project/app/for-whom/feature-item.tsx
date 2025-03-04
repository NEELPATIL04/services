// components/who-we-serve/feature-item.tsx
import React from "react"

interface FeatureItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start">
      <div className="p-2 bg-primary/10 rounded-full text-primary mr-4 mt-1 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}