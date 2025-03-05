import { Card, CardContent } from "@/components/ui/card"
import React from "react"

// Define an interface for the component props
interface ClientCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function ClientCard({ icon, title, description }: ClientCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-none h-full">
      <CardContent className="p-6 h-full flex flex-col items-center text-center">
        <div className="mb-4 text-primary bg-primary/10 p-4 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}