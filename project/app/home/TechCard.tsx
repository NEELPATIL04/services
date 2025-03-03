// components/cards/TechCard.jsx
import { Card, CardContent } from "@/components/ui/card"

export function TechCard({ name, description, icon: Icon }) {
  return (
    <Card className="overflow-hidden border bg-card hover:shadow-lg transition-all duration-300 h-full dark:bg-card/80 dark:backdrop-blur-sm dark:border-muted">
      <CardContent className="p-5 flex flex-col items-center text-center">
        <div className="mb-3 w-12 h-12 relative flex items-center justify-center">
          {Icon ? (
            <Icon className="w-12 h-12 text-primary" />
          ) : (
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-primary">{name.charAt(0)}</span>
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-medium mb-1">{name}</h3>
        
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}