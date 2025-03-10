"use client";

import { useState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Tag,
  MessageCircle,
  AlertCircle,
} from "lucide-react";
import { formSchema, ContactFormData } from "./contactFormSchema";

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormData) {
    try {
      setIsLoading(true);
      setError(null);

      // Replace these with your actual EmailJS credentials
      const serviceID = "service_bntm8q8";
      const templateID = "template_s4esmu7";
      const publicKey = "kmz4ynjICDdFVdI_-";

      // Prepare template parameters
      const templateParams = {
        name: values.name,
        email: values.email,
        phone: values.phone || "Not provided",
        subject: values.subject,
        message: values.message,
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log("Email sent successfully:", result.text);
      setIsSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Failed to send your message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
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
    );
  }

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {error && (
          <div className="p-4 mb-4 border border-red-200 bg-red-50 text-red-600 rounded-md flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            <p>{error}</p>
          </div>
        )}

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
                  <Phone className="inline-block mr-2 text-purple-500" /> Phone
                  (Optional)
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
                <MessageCircle className="inline-block mr-2 text-orange-500" />{" "}
                Message
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

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>Processing...</>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4 text-white" /> Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};
