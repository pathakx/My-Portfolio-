import { Card } from "@/components/ui/card"

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-8">
          <Card className="p-6 hover:border-accent transition-colors">
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
          <h3 className="text-2xl font-bold mb-6">Achievements</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4">
              <p className="text-muted-foreground">Scored 89.88 percentile in JEE Mains 2021</p>
            </Card>
            <Card className="p-4">
              <p className="text-muted-foreground">Solved 300+ questions on LeetCode</p>
            </Card>
            <Card className="p-4">
              <p className="text-muted-foreground">
                Member of Student Internship Program under Bhopal Police 2024-2025
              </p>
            </Card>
            <Card className="p-4">
              <p className="text-muted-foreground">Selected for SIH internal round (2024)</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
