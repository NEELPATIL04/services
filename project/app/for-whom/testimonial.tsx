// components/who-we-serve/testimonial.tsx
import React from "react"
import Image from "next/image"
import { Building2, UserRound, GraduationCap } from "lucide-react"

interface TestimonialProps {
  quote: string
  name: string
  title: string
  image: string
  type: "enterprise" | "entrepreneur" | "student"
}

export function Testimonial({ 
  quote, 
  name, 
  title, 
  image,
  type
}: TestimonialProps) {
  const getIconByType = () => {
    switch(type) {
      case "enterprise": return <Building2 className="h-4 w-4" />;
      case "entrepreneur": return <UserRound className="h-4 w-4" />;
      case "student": return <GraduationCap className="h-4 w-4" />;
      default: return <UserRound className="h-4 w-4" />;
    }
  };
  
  return (
    <div className="bg-card rounded-lg shadow p-6 h-full flex flex-col">
      <div className="mb-4">
        <p className="italic text-muted-foreground">"{quote}"</p>
      </div>
      <div className="mt-auto flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="inline-flex items-center mr-2">
              {getIconByType()}
            </span>
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}