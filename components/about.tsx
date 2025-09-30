"use client"

import { useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function About() {
  const [activeTab, setActiveTab] = useState<"skills" | "education">("skills")
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 delay-200 ${
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a Computer Science student at VIT Bhopal with a passion for building intelligent systems that automate
              complex workflows. My experience spans AI agent development, web applications, and machine learning
              models.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've worked on projects ranging from emotion detection systems to conversational AI agents, always
              focusing on creating practical solutions that make a real impact.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex gap-4 mb-6 border-b border-border">
              <button
                onClick={() => setActiveTab("skills")}
                className={`pb-3 px-1 text-sm font-medium transition-all duration-300 border-b-2 ${
                  activeTab === "skills"
                    ? "border-accent text-foreground scale-105"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:scale-105"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`pb-3 px-1 text-sm font-medium transition-all duration-300 border-b-2 ${
                  activeTab === "education"
                    ? "border-accent text-foreground scale-105"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:scale-105"
                }`}
              >
                Education
              </button>
            </div>

            <div className="overflow-hidden">
              {activeTab === "skills" && (
                <div className="space-y-4 animate-slideIn">
                  <div className="hover:translate-x-2 transition-transform duration-300">
                    <h3 className="font-semibold mb-2">Languages</h3>
                    <p className="text-muted-foreground">Python, Java, JavaScript, HTML/CSS</p>
                  </div>
                  <div className="hover:translate-x-2 transition-transform duration-300">
                    <h3 className="font-semibold mb-2">Tools & Platforms</h3>
                    <p className="text-muted-foreground">GitHub, AWS, n8n, Docker, Flask</p>
                  </div>
                  <div className="hover:translate-x-2 transition-transform duration-300">
                    <h3 className="font-semibold mb-2">Libraries & Frameworks</h3>
                    <p className="text-muted-foreground">pandas, NumPy, Matplotlib, PyTorch, TensorFlow, LangChain</p>
                  </div>
                </div>
              )}

              {activeTab === "education" && (
                <div className="space-y-4 animate-slideIn">
                  <div className="hover:translate-x-2 transition-transform duration-300">
                    <h3 className="font-semibold">VIT Bhopal University</h3>
                    <p className="text-sm text-muted-foreground">Bachelor of Technology in Computer Science</p>
                    <p className="text-sm text-muted-foreground">2022 - Present • CGPA: 8.62</p>
                  </div>
                  <div className="pt-4 hover:translate-x-2 transition-transform duration-300">
                    <h3 className="font-semibold mb-2">Certifications</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Cloud Computing NPTEL (2024)</li>
                      <li>• IBM Cyber Security Analyst (2025)</li>
                      <li>• Marketing Analytics NPTEL (2025)</li>
                      <li>• JLPT N5 (2025)</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
