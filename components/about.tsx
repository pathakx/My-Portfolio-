"use client"

import { useState } from "react"

export function About() {
  const [activeTab, setActiveTab] = useState<"skills" | "education">("skills")

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">About</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
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

          <div>
            <div className="flex gap-4 mb-6 border-b border-border">
              <button
                onClick={() => setActiveTab("skills")}
                className={`pb-3 px-1 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === "skills"
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`pb-3 px-1 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === "education"
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                Education
              </button>
            </div>

            {activeTab === "skills" && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Languages</h3>
                  <p className="text-muted-foreground">Python, Java, JavaScript, HTML/CSS</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tools & Platforms</h3>
                  <p className="text-muted-foreground">GitHub, AWS, n8n, Docker, Flask</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Libraries & Frameworks</h3>
                  <p className="text-muted-foreground">pandas, NumPy, Matplotlib, PyTorch, TensorFlow, LangChain</p>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">VIT Bhopal University</h3>
                  <p className="text-sm text-muted-foreground">Bachelor of Technology in Computer Science</p>
                  <p className="text-sm text-muted-foreground">2022 - Present • CGPA: 8.62</p>
                </div>
                <div className="pt-4">
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
    </section>
  )
}
