import { Card } from "@/components/ui/card"
import { Code, Bot, Cloud, Workflow } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Bot,
      title: "AI & Machine Learning",
      description:
        "Building intelligent systems with ML models, chatbots, and AI agents using LangChain, PyTorch, and TensorFlow.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Designing and implementing automated workflows using n8n, integrating multiple APIs and services for seamless operations.",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Creating responsive web applications with Flask, React, and modern web technologies, focusing on user experience and performance.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "Deploying and managing applications on AWS with Docker containerization and CI/CD pipelines using GitHub Actions.",
    },
  ]

  return (
    <section id="services" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What I Do</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-6 hover:border-accent transition-colors group">
                <Icon className="h-10 w-10 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
