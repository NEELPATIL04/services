// components/cards/ClientCard.jsx
import { Card, CardContent } from "@/components/ui/card"

export function ClientCard({ icon, title, description }) {
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