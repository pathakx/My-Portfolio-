"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" })
          setSubmitStatus("idle")
        }, 3000)
      } else {
        throw new Error("Failed to send message.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 gradient-text transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 delay-200 ${
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:vikaspathak0911@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vikaspathak0911@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                asChild
                className="w-full md:w-auto gradient-primary text-white shadow-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
              >
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <Card
            className={`p-6 shadow-xl border-2 border-primary/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 delay-300 ${
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-2 focus:border-primary transition-all duration-300 focus:scale-[1.02]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-2 focus:border-primary transition-all duration-300 focus:scale-[1.02]"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="border-2 focus:border-primary transition-all duration-300 focus:scale-[1.02]"
                />
              </div>
              {submitStatus === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400 animate-slideIn">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-destructive animate-slideIn">
                  Failed to send message. Please try again or email me directly.
                </p>
              )}
              <Button
                type="submit"
                className="w-full gradient-primary text-white shadow-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
