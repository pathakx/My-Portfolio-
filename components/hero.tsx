import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="/images/vikas-profile.jpg"
                alt="Vikas Pathak"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-primary shadow-2xl object-cover w-64 h-64 md:w-80 md:h-80"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h1 className="text-5xl md:text-7xl font-bold text-balance gradient-text">Vikas Pathak</h1>
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
                className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary hover:bg-primary/10 bg-transparent"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/vikaspathak0911"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/vikaspathak11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/_vikaspathak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vikaspathak0911@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
