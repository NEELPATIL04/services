import { Card, CardContent } from "@/components/ui/card"

export function CoreCard({ icon, title, description }) {
  return (
   // relative p-[2.30px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-none  backdrop-blur-sm h-full">
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
