"use client"

import React, { useState, useEffect } from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { RetroButton } from "@/components/retro-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KiwiHacks 2025 | Auckland's Premier Student Hackathon",
  description: "Join us on July 19-20, 2025 for Auckland's premier hackathon for innovation and collaboration.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent))
  }, [])  

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} bg-[#0a1f0a]`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          {!isMobile && <RetroButton />}
        </ThemeProvider>
      </body>
    </html>
  )
}
