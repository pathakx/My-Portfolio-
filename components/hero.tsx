"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`order-2 md:order-1 flex justify-center transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative group">
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-spin-slow"></div>
              <Image
                src="/images/vikas-profile.jpg"
                alt="Vikas Pathak"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-primary shadow-2xl object-cover w-64 h-64 md:w-80 md:h-80 group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          <div
            className={`space-y-6 order-1 md:order-2 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-balance gradient-text animate-gradient">Vikas Pathak</h1>
            <p className="text-xl md:text-2xl font-semibold text-primary">AI/ML Developer & Web Developer</p>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I build intelligent automation systems and web applications that solve real-world problems. Currently
              pursuing Computer Science at VIT Bhopal, specializing in AI workflow automation, machine learning, and
              full-stack development.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary hover:bg-primary hover:text-primary-foreground text-foreground bg-transparent hover:scale-105 transition-all duration-300"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="flex gap-4 pt-6">
              {[
                { href: "https://github.com/vikaspathak0911", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/vikaspathak11", icon: Linkedin, label: "LinkedIn" },
                { href: "https://instagram.com/_vikaspathak", icon: Instagram, label: "Instagram" },
                {
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=vikaspathak0911@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 hover:bg-primary/10 rounded-full hover:scale-110 hover:rotate-6"
                  style={{
                    animation: mounted ? `fadeInUp 0.5s ease-out ${0.6 + index * 0.1}s both` : "none",
                  }}
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
