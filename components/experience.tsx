"use client"

import { Card } from "@/components/ui/card"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="experience" className="py-24 px-6 bg-secondary/20" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Experience
        </h2>

        <div className="space-y-8">
          <Card
            className={`p-6 hover:border-accent transition-all duration-500 hover:shadow-xl hover:shadow-accent/20 hover:scale-[1.02] ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold">AI Workflow Automation Intern</h3>
                <p className="text-muted-foreground">Tsuroni Ltd. • Remote, Israel</p>
              </div>
              <p className="text-sm text-muted-foreground">Apr 2025 – Jun 2025</p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                • Architected and deployed complex AI agent workflows on n8n to automate critical business functions,
                including content creation, financial analysis, and data processing
              </li>
              <li>
                • Developed an end-to-end SEO content pipeline that performs automated keyword research, scrapes and
                analyzes top-ranking competitor articles, and generates complete, human-like blog drafts using a chain
                of LLM agents
              </li>
              <li>• Automated PDF invoice data extraction from emails to a relational Airtable using a Gemini agent</li>
              <li>
                • Engineered an automated stock analysis workflow that aggregates data from multiple financial APIs,
                performs technical analysis (RSI, MACD), analyzes news sentiment, and generates comprehensive reports
                for investment insights
              </li>
            </ul>
          </Card>
        </div>

        <div className="mt-12">
          <h3
            className={`text-2xl font-bold mb-6 transition-all duration-700 ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Scored 89.88 percentile in JEE Mains 2021",
              "Solved 300+ questions on LeetCode",
              "Member of Student Internship Program under Bhopal Police 2024-2025",
              "Selected for SIH internal round (2024)",
            ].map((achievement, index) => (
              <Card
                key={index}
                className={`p-4 hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${
                  isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <p className="text-muted-foreground">{achievement}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
