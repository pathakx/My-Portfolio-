import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Medical ChatBot",
      date: "Feb 2025",
      description:
        "Developed an AI-powered medical chatbot using Flask, LangChain, Pinecone, and LLMs for query understanding and response generation. Implemented Docker-based containerization and deployed on AWS EC2 with automated CI/CD workflows.",
      tags: ["Flask", "LangChain", "Pinecone", "AWS", "Docker", "CI/CD"],
      github: "https://github.com/vikaspathak0911/medical-chatbot",
      live: null,
    },
    {
      title: "Conversational AI Agent",
      date: "Aug 2025",
      description:
        "Developed a conversational AI agent using LangGraph, Flask, and Python to handle product recommendations and order management queries. Implemented a state machine architecture with LangGraph to create a robust and scalable conversational workflow.",
      tags: ["LangGraph", "Flask", "Python", "REST API", "State Machine"],
      github: "https://github.com/vikaspathak0911/ai-agent-langgraph",
      live: null,
    },
    {
      title: "Emotion Detector",
      date: "Nov 2023",
      description:
        "Built a Flask-based web application for facial emotion detection, enabling users to upload images and receive real-time classification across seven emotional categories. Trained ML model and integrated it to analyze uploaded images with confidence scores.",
      tags: ["Flask", "Machine Learning", "Computer Vision", "Python"],
      github: "https://github.com/vikaspathak0911/EmotionAI",
      live: "https://emotion-ai-seven.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Projects</h2>
          <Button variant="outline" asChild className="border-2 border-primary hover:bg-primary/10 bg-transparent">
            <a
              href="https://github.com/vikaspathak0911"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View All on GitHub
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary transition-all group hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                <span className="text-sm text-muted-foreground">{project.date}</span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                {project.github && (
                  <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button size="sm" asChild className="flex-1 gradient-primary text-white">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
