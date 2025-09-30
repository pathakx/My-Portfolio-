"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

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
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div
          className={`flex items-center justify-between mb-12 transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Projects
          </h2>
          <Button
            asChild
            className="
              border-2 
              bg-white text-purple-600 border-purple-600
              hover:bg-purple-100 hover:text-purple-700
              dark:bg-purple-600 dark:text-white dark:border-purple-600
              dark:hover:bg-purple-700 dark:hover:text-white
              hover:scale-105 transition-all duration-300
            "
          >
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

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 hover:border-primary transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.03] ${
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {project.date}
                </span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="
                      bg-primary/10 text-primary border-primary/20
                      hover:bg-primary/20 
                      dark:bg-primary/20 dark:text-primary-foreground dark:border-primary/30
                    "
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                {project.github && (
                  <Button
                    size="sm"
                    asChild
                    className="
                      flex-1 
                      bg-white text-white border border-purple-600
                      hover:bg-purple-100 hover:text-white-700
                      dark:bg-purple-600 dark:text-white dark:border-purple-600
                      dark:hover:bg-purple-700 dark:hover:text-white
                      hover:scale-105 transition-transform duration-300
                    "
                  >
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
                  <Button
                    size="sm"
                    asChild
                    className="
                      flex-1 
                      bg-white text-purple-600 border border-purple-600
                      hover:bg-purple-100 hover:text-purple-700
                      dark:bg-purple-600 dark:text-white dark:border-purple-600
                      dark:hover:bg-purple-700 dark:hover:text-white
                      hover:scale-105 transition-transform duration-300
                    "
                  >
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
