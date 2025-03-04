"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle2, User, Mail, Phone, Tag, MessageCircle } from "lucide-react"
import { formSchema, ContactFormData } from "./contactFormSchema"

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: ContactFormData) {
    console.log(values)
    setIsSubmitted(true)
    form.reset()
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <User className="inline-block mr-2 text-blue-500" /> Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Mail className="inline-block mr-2 text-green-500" /> Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Phone className="inline-block mr-2 text-purple-500" /> Phone (Optional)
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Tag className="inline-block mr-2 text-red-500" /> Subject
                </FormLabel>
                <FormControl>
                  <Input placeholder="Message subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <MessageCircle className="inline-block mr-2 text-orange-500" /> Message
              </FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your project or inquiry" 
                  className="min-h-[150px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full">
          <Send className="mr-2 h-4 w-4 text-white" /> Send Message
        </Button>
      </form>
    </Form>
  )
}
