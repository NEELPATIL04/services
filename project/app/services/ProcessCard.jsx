// src/components/services/ProcessCard.jsx
import { Card, CardContent } from "@/components/ui/card"

export function ProcessCard({ number, title, description }) {
  return (
    <Card className="border-none bg-background shadow-md h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="text-4xl font-bold text-primary/20 mb-4">{number}</div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}