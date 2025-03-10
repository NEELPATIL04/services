// components/cards/ServiceCard.jsx
import { Card, CardContent } from "@/components/ui/card"

interface ClientCardProps {
  icon: React.ReactNode
  title: string
  description: string
}
export function ServiceCard({ icon, title, description }: ClientCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-none bg-card/50 backdrop-blur-sm h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="mb-4 text-primary  p-3 rounded-lg inline-block">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}