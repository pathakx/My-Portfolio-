"use client"

import type { ReactNode } from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense, useEffect, useState } from "react"
import React from "react"

export const ThemeContext = React.createContext<{
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
}>({
  theme: "dark",
  setTheme: () => {},
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <html lang="en" className={theme}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
