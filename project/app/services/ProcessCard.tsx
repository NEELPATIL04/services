import { Card, CardContent } from "@/components/ui/card"

interface ProcessCardProps {
  number: string | number;
  title: string;
  description: string;
}

export function ProcessCard({ number, title, description }: ProcessCardProps) {
  return (
    <div className="relative p-[2.30px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl">
      <Card className="border-none bg-background shadow-md h-full overflow-hidden rounded-lg">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="text-4xl font-bold text-primary/20 mb-4">{number}</div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}